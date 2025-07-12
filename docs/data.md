
### **Arquivo Final: `data.md` (Versão 2.0 - Completa e Robusta)**


```markdown
# Estrutura de Dados (Schemas & Mocks) – ClinicAI v2.0

Este documento é a fonte única da verdade para a arquitetura de dados do ClinicAI. Ele detalha todas as tabelas, relacionamentos e schemas necessários para suportar um sistema completo de gestão, marketing, finanças e inteligência para clínicas odontológicas.

---

## 🏛️ Modelo de Entidade e Relacionamento (Visão Geral)

O sistema é centrado no `paciente`, que interage com a clínica através de `agendamentos`, `tratamentos` e `transações financeiras`. O crescimento é impulsionado por `campanhas` de marketing que geram `leads`, gerenciados em um `funil`. A satisfação é medida via `feedback_nps`. Todas as interações são logadas em `chat_history` e os `KPIs diários` são armazenados para análise de performance. O acesso é controlado pela tabela de `usuários`.

---

## 🧱 Schemas das Tabelas Principais

### 1. `patients` (Pacientes)
*O coração do sistema. Armazena dados demográficos e de relacionamento de cada indivíduo.*

| Campo       | Tipo          | Descrição                                        |
|-------------|---------------|--------------------------------------------------|
| `id`        | `uuid` (PK)   | Identificador único.                             |
| `full_name` | `text`        | Nome completo.                                   |
| `phone`     | `text`        | Telefone principal para contato.                 |
| `email`     | `text`        | E-mail de contato.                               |
| `source`    | `text`        | Canal de aquisição (ex: 'Instagram', 'Google').  |
| `status`    | `text`        | 'Lead', 'Ativo', 'Inativo', 'Arquivado'.         |
| `tags`      | `text[]`      | Array de tags para segmentação (ex: `{'VIP'}`).  |
| `created_at`| `timestamptz` | Data do primeiro registro.                       |

### 2. `users` (Usuários / Equipe)
*Membros da equipe que acessam a plataforma.*

| Campo           | Tipo          | Descrição                                        |
|-----------------|---------------|--------------------------------------------------|
| `id`            | `uuid` (PK)   | Identificador único.                             |
| `full_name`     | `text`        | Nome completo do usuário.                        |
| `email`         | `text` (UNIQUE)| E-mail de login.                                |
| `password_hash` | `text`        | Senha criptografada.                             |
| `role`          | `text`        | 'Admin', 'Dentista', 'Recepção', 'Marketing'.    |
| `avatar_url`    | `text`        | URL da foto de perfil.                           |

### 3. `appointments` (Agendamentos)
*Registra todos os compromissos na agenda.*

| Campo           | Tipo        | Descrição                                        |
|-----------------|-------------|--------------------------------------------------|
| `id`            | `uuid` (PK) | ID único do agendamento.                         |
| `patient_id`    | `uuid` (FK) | Chave para `patients.id`.                        |
| `professional_id`| `uuid` (FK) | Chave para `users.id` (o profissional).          |
| `procedure_name`| `text`      | Nome do serviço (ex: 'Limpeza e Profilaxia').    |
| `start_time`    | `timestamptz`| Início do agendamento.                           |
| `end_time`      | `timestamptz`| Fim do agendamento.                              |
| `status`        | `text`      | 'Confirmado', 'Aguardando', 'Cancelado', 'Concluído'.|

### 4. `treatments` (Planos de Tratamento)
*Agrupa múltiplos procedimentos em um plano de tratamento com valor total.*

| Campo             | Tipo        | Descrição                                        |
|-------------------|-------------|--------------------------------------------------|
| `id`              | `uuid` (PK) | ID único do tratamento.                          |
| `patient_id`      | `uuid` (FK) | Chave para `patients.id`.                        |
| `name`            | `text`      | Nome do plano (ex: 'Plano Ortodôntico Completo').|
| `status`          | `text`      | 'Planejado', 'Aceito', 'Em Andamento', 'Finalizado'.|
| `total_value`     | `numeric`   | Valor total do tratamento orçado.                |
| `acceptance_date` | `date`      | Data em que o paciente aceitou o orçamento.      |

### 5. `financial_transactions` (Transações Financeiras)
*Registra todas as entradas e saídas de dinheiro, vinculadas a pacientes ou tratamentos.*

| Campo           | Tipo        | Descrição                                        |
|-----------------|-------------|--------------------------------------------------|
| `id`            | `uuid` (PK) | ID único da transação.                           |
| `patient_id`    | `uuid` (FK) | Opcional, chave para `patients.id`.              |
| `treatment_id`  | `uuid` (FK) | Opcional, chave para `treatments.id`.            |
| `description`   | `text`      | Descrição (ex: "Entrada do tratamento orto").    |
| `type`          | `text`      | 'Receita' ou 'Despesa'.                          |
| `amount`        | `numeric`   | Valor da transação.                              |
| `transaction_date`|`date`      | Data da transação.                               |

### 6. `campaigns` (Campanhas de Marketing)
*Permite rastrear o ROI de cada campanha de marketing.*

| Campo        | Tipo      | Descrição                                        |
|--------------|-----------|--------------------------------------------------|
| `id`         | `uuid` (PK)| ID da campanha.                                  |
| `name`       | `text`    | Nome da campanha (ex: "Clareamento - Jul/25").   |
| `channel`    | `text`    | 'Google Ads', 'Facebook Ads', 'TikTok'.          |
| `budget`     | `numeric` | Orçamento investido na campanha.                 |
| `start_date` | `date`    | Data de início.                                  |
| `end_date`   | `date`    | Data de término (opcional).                      |

*Nota: A conexão entre `patients` e `campaigns` pode ser feita adicionando um campo `campaign_id` (FK) na tabela `patients`.*

### 7. `chat_history` (Histórico de Conversas)
*Log de todas as interações de texto para auditoria e retreinamento da IA.*

| Campo       | Tipo          | Descrição                                        |
|-------------|---------------|--------------------------------------------------|
| `id`        | `uuid` (PK)   | ID único da mensagem.                            |
| `patient_id`| `uuid` (FK)   | Chave para `patients.id`.                        |
| `sender`    | `text`        | 'Paciente', 'IA', 'Humano'.                      |
| `message`   | `text`        | Conteúdo da mensagem.                            |
| `channel`   | `text`        | 'WhatsApp', 'Webchat'.                           |
| `timestamp` | `timestamptz` | Data e hora da mensagem.                         |

### 8. `nps_feedback` (Feedback de Satisfação)
*Armazena as respostas da pesquisa de NPS para análise de satisfação.*

| Campo       | Tipo        | Descrição                                        |
|-------------|-------------|--------------------------------------------------|
| `id`        | `uuid` (PK) | ID do feedback.                                  |
| `patient_id`| `uuid` (FK) | Chave para `patients.id`.                        |
| `score`     | `int`       | Nota de 0 a 10.                                  |
| `comment`   | `text`      | Comentário opcional do paciente.                 |
| `created_at`| `timestamptz` | Data da resposta.                                |

### 9. `daily_kpis` (Métricas Diárias Consolidadas)
*Tabela otimizada para Business Intelligence. Um processo (no n8n ou uma `cron job`) preenche esta tabela diariamente para alimentar os dashboards do Metabase de forma rápida.*

| Campo           | Tipo    | Descrição                                        |
|-----------------|---------|--------------------------------------------------|
| `date`          | `date` (PK)| Data do registro (chave primária).              |
| `new_leads`     | `int`   | Quantidade de novos leads criados no dia.        |
| `new_patients`  | `int`   | Leads convertidos em pacientes no dia.           |
| `appointments_scheduled`| `int`   | Agendamentos criados no dia.                 |
| `appointments_completed`| `int`   | Agendamentos concluídos no dia.              |
| `revenue`       | `numeric` | Faturamento total do dia.                        |
| `expenses`      | `numeric` | Despesas totais do dia.                          |
| `avg_nps_score` | `numeric` | Média das notas de NPS recebidas no dia.         |
```

---

### Análise e Conclusão

Este modelo agora está **completo e extremamente robusto**.
