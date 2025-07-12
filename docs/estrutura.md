# Estrutura do MVP – Página 1: Dashboard (Com Header, Welcome Banner e Diretrizes Responsivas)

**Missão da Tela:** Ser o "cockpit" do gestor da clínica, com uma interface que transmite autoridade, clareza e elegância em qualquer dispositivo.

---

### **Layout Geral da Página e Comportamento Responsivo**

A tela é composta por 3 partes principais:
1.  **Sidebar de Navegação (Fixa à Esquerda)**
2.  **Header Global da Aplicação (Barra Superior Fixa)**
3.  **Área de Conteúdo Principal (Rolável)**

#### **Diretrizes de Responsividade (Comportamento em Diferentes Telas):**

-   **Desktop (telas grandes, > 1024px):**
    -   A **Sidebar** é exibida em sua largura total, com ícones e texto.
    -   A **Área de Conteúdo** adota um layout complexo em grid. O **Bloco de KPIs** se organiza em uma linha de 4 colunas. A **Seção de Conteúdo Principal** se divide em um grid de 2 colunas (mais larga à esquerda, mais estreita à direita).

-   **Tablet (telas médias, 768px a 1024px):**
    -   A **Sidebar** pode ser recolhida para exibir apenas os ícones, expandindo a área de conteúdo.
    -   O **Bloco de KPIs** se reorganiza em um grid de 2x2 (duas colunas, duas linhas).
    -   O layout da **Seção de Conteúdo Principal** mantém as 2 colunas, mas com proporções mais equilibradas.

-   **Mobile (telas pequenas, < 768px):**
    -   A **Sidebar** fica completamente oculta, acessível por um ícone de "menu hambúrguer" no Header.
    -   A **Área de Conteúdo Principal** se transforma em uma **coluna única vertical**. Todos os componentes são empilhados na seguinte ordem: Welcome Banner → Bloco de KPIs (em 2x2 ou 1x4) → Todos os cards da coluna esquerda → Todos os cards da coluna direita.

---

### **1. Componentes Estruturais (Header e Welcome Banner)**

#### **1.1. Header Global da Aplicação (Barra Superior)**
*Barra fina e persistente em todas as páginas, contendo controles globais.*

-   **Design:** Fundo definido pela variável `--background`, com uma borda sutil na parte inferior (`border-b border-border`).
-   **Conteúdo (Esquerda):**
    -   Logo da Aplicação: Ícone + "ClinicAI". (Em mobile, pode ser substituído por um ícone de menu).
-   **Conteúdo (Direita):**
    -   Barra de Busca Global: Campo de busca elegante.
    -   Ícone de Notificações (🔔).
    -   Dropdown de Perfil com Avatar do usuário.

#### **1.2. Welcome Banner do Dashboard (Hero da Página)**
*Bloco visualmente destacado, posicionado como o PRIMEIRO elemento dentro da Área de Conteúdo Principal.*

-   **Design:** Card largo com fundo de cor de destaque sutil (ex: `bg-secondary`) e padding generoso.
-   **Conteúdo (Esquerda):**
    -   `H1 (Título Principal)`: **"Hello, Mohammad 👋"** (ou "Good evening, Igor").
    -   `p (Subtítulo)`: "Aqui está o resumo da sua clínica hoje."
-   **Conteúdo (Direita):**
    -   Dropdown de Período: Seletor com o valor padrão "July 2024".

---

### **2. Componentes de Conteúdo do Dashboard (Abaixo do Welcome Banner)**

#### **2.1. Bloco de KPIs (Cards)**
-   **Estrutura:** Grid com 4 cards.
    -   **Responsividade:** `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`.
-   **Design de cada Card:** Fundo sólido com cor vibrante, ícone, título e valores.
-   **Cards:**
    1.  `Hospital Earnings` (Azul): **$ 800K - 500K**
    2.  `Total Patient` (Amarelo): **600**
    3.  `Operation` (Vermelho): **400**
    4.  `Appointments` (Verde): **80**

#### **2.2. Seção de Conteúdo Principal (Grid de 2 Colunas em Desktop/Tablet)**
-   **Estrutura Geral:**
    -   **Responsividade:** `grid grid-cols-1 lg:grid-cols-3 gap-6`. A coluna da esquerda ocupará 2/3 do espaço (`lg:col-span-2`) e a da direita 1/3 (`lg:col-span-1`). Em mobile, serão empilhadas.

-   **Coluna Esquerda (`lg:col-span-2`):**
    -   **Card `Best Doctor's`:** Header com título e link "View all". Conteúdo com uma lista horizontal de avatares de médicos.
    -   **Card `Patients`:** Header com título e link "View all". Conteúdo com um gráfico de rosca (Donut Chart) e o número total de pacientes.

-   **Coluna Direita (`lg:col-span-1`):**
    -   **Card `Visitors`:** Gráfico de linha/área.
    -   **Card `Recovered`:** Gráfico de linha.
    -   **Card `Consultation Slots`:** Header com título e link "View all". Conteúdo com uma lista vertical de slots de consulta.

### **2. Página: Agenda (Calendário)**

**Missão da Tela:** Oferecer uma visão completa e interativa de todos os compromissos da clínica. A interface deve permitir agendamentos rápidos, filtros por profissional e uma visualização clara da disponibilidade, minimizando conflitos e otimizando o tempo da equipe.

---

#### **2.1. Estrutura de Layout da Página**

A tela será dividida em 2 áreas principais:
- **Área do Calendário (Centro):** Ocupa a maior parte do espaço, com os controles de visualização e a grade de agendamentos.
- **Barra Lateral de Apoio (Direita, opcional):** Uma coluna mais estreita para exibir detalhes do evento selecionado ou uma lista dos próximos compromissos do dia.

---

#### **2.2. Componentes Detalhados**

**Componente 2.2.1: Header da Página**
- **Localização:** Topo da área de conteúdo, acima de tudo.
- **Conteúdo (Esquerda):**
    - `H1 (Título da Página)`: **"Agenda"**.
- **Conteúdo (Direita):**
    - `Botão de Ação Principal`: **"[+] Novo Agendamento"**. Este botão deve abrir o modal de criação de agendamento.

**Componente 2.2.2: Barra de Ferramentas e Filtros**
- **Localização:** Abaixo do header, acima do calendário.
- **Estrutura:** Uma linha horizontal com todos os controles de visualização.
- **Controles (da esquerda para a direita):**
    1.  `Botões de Navegação de Período`:
        - Botão `Hoje`: Volta o calendário para a data atual.
        - Ícones de seta `⟨` (Anterior) e `⟩` (Próximo) para navegar entre meses/semanas/dias.
    2.  `Display de Período Atual`: Mostra o mês e ano corrente (ex: **"Agosto 2025"**).
    3.  `Dropdown de Filtro por Profissional`:
        - Permite filtrar os eventos exibidos no calendário por um ou mais dentistas.
        - Deve incluir uma opção "Todos os Profissionais".
        - O dropdown deve listar os profissionais com seus avatares e nomes.
    4.  `Botões de Seleção de Visualização (View Switcher)`:
        - Grupo de botões para alternar a grade do calendário.
        - Opções: `Mês`, `Semana`, `Dia`, `Lista`.

**Componente 2.2.3: Grade do Calendário Interativo**
- **Localização:** Ocupa a área central da página.
- **Design:** Deve se assemelhar visualmente ao Google Calendar.
    - **Visualização `Mês`:** Grade mensal com os dias. Cada dia mostra um resumo dos eventos.
    - **Visualização `Semana`/`Dia`:** Colunas representando os dias/horas, com os eventos posicionados verticalmente de acordo com o horário e duração.
- **Interatividade:**
    - `Clicar em um slot vazio`: Abre o **Modal de Novo Agendamento** com a data e hora pré-selecionadas.
    - `Clicar em um evento existente`: Abre um **Popover de Detalhes** ou seleciona o evento para exibição na barra lateral de apoio.
    - `Arrastar e soltar (Drag-and-Drop)`: Permite reagendar um compromisso movendo-o para um novo dia/horário.
- **Design dos Eventos:**
    - Blocos retangulares coloridos.
    - **Cor por status:** `Azul` para confirmado, `Amarelo` para pendente, `Cinza` para concluído.
    - O bloco deve exibir o `Nome do Paciente` e o `Nome do Procedimento`.

**Componente 2.2.4: Modal de Novo Agendamento**
- **Tipo:** Janela pop-up que aparece sobre a tela.
- **Header do Modal:**
    - `Título`: "Criar Novo Agendamento".
    - `Ícone de fechar (X)`.
- **Corpo do Formulário:**
    1.  `Campo "Paciente"`:
        - Campo de busca com **autocompletar**. Ao digitar, busca na base de pacientes.
        - Ao selecionar um paciente, preenche automaticamente alguns dados.
        - Opção `+ Adicionar novo paciente` se não for encontrado.
    2.  `Campo "Procedimento/Serviço"`: Dropdown com a lista de serviços cadastrados.
    3.  `Campo "Profissional"`: Dropdown para selecionar o dentista responsável.
    4.  `Campos "Data" e "Horário"`: Seletores de data e hora.
    5.  `Checkbox "Notificar Paciente"`: Opção para enviar confirmação por WhatsApp/Email.
    6.  `Campo "Observações"`: Área de texto para notas internas.
- **Rodapé do Modal:**
    - Botão `Cancelar`.
    - Botão `Salvar Agendamento`.

**Componente 2.2.5: Barra Lateral de Detalhes do Evento (Opcional, mas recomendado)**
- **Localização:** Coluna da direita.
- **Funcionalidade:** Fica vazia até um evento ser clicado no calendário. Ao clicar, exibe os detalhes do agendamento selecionado.
- **Conteúdo:**
    - `Título`: Nome do Procedimento.
    - `Detalhes do Paciente`: Nome, telefone (com link para WhatsApp).
    - `Detalhes do Agendamento`: Data, hora, duração, profissional.
    - `Status`: (Confirmado, Pendente, etc.) com opção para alterá-lo.
    - `Ações Rápidas`: Botões como `Reagendar`, `Cancelar Agendamento`, `Ver Ficha do Paciente`.

---

Perfeito. Foco total na **Página 3**. Esta tela é o coração do CRM clínico, onde toda a informação do paciente é centralizada. A experiência do usuário aqui precisa ser impecável: rápida, intuitiva e densa em informações relevantes.

Seguindo o altíssimo padrão e inspirando-nos nas melhores práticas de design de sistemas, aqui está a estrutura detalhada da **Página 3: Pacientes**.

---

### **3. Página: Pacientes (CRM Clínico)**

**Missão da Tela:** Ser o arquivo central e inteligente de todos os pacientes. A tela deve permitir busca instantânea, filtragem avançada e uma visão 360º de cada paciente com um único clique, transformando dados brutos em insights acionáveis para a equipe clínica e administrativa.

---

#### **3.1. Estrutura de Layout da Página**

A página adota um layout de coluna única para maximizar a área de visualização da tabela, com um painel lateral (`Sheet`) que desliza da direita para a esquerda ao selecionar um paciente, mantendo o contexto da lista principal.

- **Área Principal (Largura Total):** Contém o header, a barra de ferramentas (busca/filtros) e a tabela de pacientes.
- **Painel de Detalhes (`Sheet`):** Oculto por padrão, ativado por interação, sobrepõe-se à área principal.

---

#### **3.2. Componentes Detalhados**

**Componente 3.2.1: Header da Página e Ações**
- **Localização:** Topo da área de conteúdo.
- **Design:** Uma faixa limpa, com alinhamento `flex` e `justify-content: space-between`.
- **Conteúdo (Esquerda):**
    - `H1 (Título da Página)`: **"Pacientes"**.
    - `p (Subtítulo)`: "Gerencie a base de dados completa de seus pacientes."
- **Conteúdo (Direita):**
    - `Botão de Ação Principal`: **"[+] Novo Paciente"**. Ao ser clicado, abre o **Modal de Cadastro de Paciente (3.2.5)**.

**Componente 3.2.2: Barra de Ferramentas da Tabela**
- **Localização:** Abaixo do Header, logo acima da tabela.
- **Estrutura:** Uma linha de controles para manipular a visualização da tabela.
- **Controles:**
    1.  **Campo de Busca:** `Input` com ícone de lupa 🔎 e placeholder "Buscar por nome, CPF ou telefone...". A busca deve ser aplicada em tempo real na tabela.
    2.  **Botão de Filtros:** Um botão `"[Filtros]"` com um ícone de funil. Ao clicar, abre um `Popover` com opções avançadas:
        - `Filtro por Status`: Checkboxes para `Ativo`, `Inativo`, `Lead`.
        - `Filtro por Tags`: Um campo de múltipla seleção para filtrar por tags personalizadas (ex: "VIP", "Pós-operatório").
        - `Filtro por Profissional`: Dropdown para ver pacientes de um dentista específico.
        - Um botão `Limpar Filtros` dentro do popover.
    3.  **Botão de Ações em Massa (opcional):** Fica desabilitado por padrão. É ativado quando um ou mais checkboxes da tabela são marcados. Ao clicar, abre um dropdown com ações como `Exportar Selecionados (CSV)`, `Arquivar Selecionados`.

**Componente 3.2.3: Tabela de Pacientes (Core da Página)**
- **Localização:** Área central da página.
- **Design:** Uma tabela moderna (`shadcn/ui Table`), com linhas que respiram e uma borda sutil entre elas.
    - `Hover`: Linhas mudam de cor ao passar o mouse para indicar interatividade.
    - `Seleção`: A linha do paciente selecionado (cujos detalhes estão no painel lateral) mantém um destaque visual fixo.
    - `Estado de Loading`: Exibe uma animação de `skeleton` no formato das linhas da tabela.
    - `Estado Vazio`: Exibe uma mensagem centralizada com um ícone de `users` e o texto "Nenhum paciente encontrado. Que tal adicionar o primeiro?".
- **Colunas da Tabela:**
    1.  `Checkbox`: Para seleção em massa.
    2.  `Nome do Paciente`: Avatar com iniciais (ou foto) + Nome completo.
    3.  `Contato Principal`: Telefone (com ícone de WhatsApp clicável) ou E-mail.
    4.  `Última Consulta`: Data da última visita (ex: "25/07/2025").
    5.  `Próxima Consulta`: Data da próxima visita (se houver).
    6.  `Status`: `Badge` colorido (`Ativo`, `Inativo`, `Lead`).
    7.  `Ações`: Ícone de três pontos (`...`) que abre um `DropdownMenu` com ações rápidas para aquela linha: `Ver Detalhes`, `Editar`, `Agendar Consulta`, `Arquivar`.

**Componente 3.2.4: Painel Lateral de Detalhes do Paciente (`Sheet`)**
- **Localização:** Desliza da direita para a esquerda, ocupando ~40% da tela.
- **Design:** Um painel com `scroll` interno e um header fixo para não se perder na rolagem.
- **Header do Painel:**
    - `Avatar` e `Nome Completo` do paciente em destaque.
    - `Tags` do paciente (ex: "VIP", "Primeira Consulta") exibidas como badges.
    - `Botão Fechar (X)`.
- **Corpo do Painel (organizado em abas):**
    - **Aba 1: `Visão Geral`**
        - `Card de Informações Pessoais`: CPF, Data de Nascimento, Endereço.
        - `Card de Contato`: Telefones e e-mails.
        - `Card "Próximos Passos"`: Exibe o próximo agendamento ou uma sugestão de ação (ex: "Nenhum agendamento futuro. [Ação: Marcar Retorno]").
    - **Aba 2: `Histórico de Consultas`**
        - Uma linha do tempo (`Timeline`) vertical.
        - Cada item na timeline representa uma consulta, mostrando: `Data`, `Procedimento Realizado`, `Profissional` e `Status (Concluído, Cancelado)`.
        - Link no topo: `Ver Prontuário Completo`.
    - **Aba 3: `Financeiro`**
        - `Card de Saldo`: Mostra o saldo devedor ou crédito do paciente.
        - `Tabela de Transações Recentes`: Lista os últimos pagamentos e cobranças.
    - **Aba 4: `Documentos`**
        - Uma galeria ou lista de arquivos anexados: Orçamentos em PDF, Raio-X, etc.
        - Opção para `+ Adicionar Documento`.

**Componente 3.2.5: Modal de Novo/Editar Paciente**
- **Tipo:** Janela `Dialog` que aparece centralizada.
- **Estrutura:** Um formulário multi-etapas ou com abas para não sobrecarregar o usuário.
- **Abas/Etapas do Formulário:**
    1.  **`Dados Essenciais`**: `Nome Completo`, `CPF`, `Data de Nascimento`, `Telefone`, `E-mail`.
    2.  **`Endereço`**: `CEP` (com busca automática), `Logradouro`, `Número`, etc.
    3.  **`Informações Adicionais (CRM)`**: Campo `Como nos conheceu?`, campo de `Tags`, `Observações Internas`.
- **Rodapé do Modal:**
    - Botão `Cancelar`.
    - Botão `Salvar Paciente` (primário). Ao salvar, o modal fecha, a tabela é atualizada e um `toast` de sucesso aparece ("Paciente [Nome] salvo com sucesso!").

---
Combinado. Avançando para a **Página 4**. Esta é a linha de frente do crescimento da clínica, onde o caos de leads se transforma em uma máquina de conversão organizada. O design precisa ser visual, intuitivo e focado em ação.

Vamos detalhar a **Página 4: Leads (CRM Comercial)**, inspirada nos melhores sistemas de funil de vendas, como Pipefy e Trello, mas com a estética limpa e profissional do ClinicAI.

---

### **4. Página: Leads (CRM Comercial)**

**Missão da Tela:** Transformar o gerenciamento de leads em um processo visual e interativo. A tela deve permitir que a equipe comercial mova os leads pelas etapas do funil com um simples arrastar e soltar, visualize rapidamente as informações essenciais e nunca perca uma oportunidade de follow-up.

---

#### **4.1. Estrutura de Layout da Página**

A página adota um layout de **Board Kanban** de largura total. A estrutura é horizontal, com colunas que representam as etapas do funil. O layout é projetado para ser rolável horizontalmente se o número de colunas exceder o espaço da tela.

- **Área Principal:** Header da página, controles de filtro e o board Kanban interativo.

---

#### **4.2. Componentes Detalhados**

**Componente 4.2.1: Header da Página e Controles**
- **Localização:** Topo da área de conteúdo.
- **Design:** Uma faixa horizontal limpa, dividida em duas áreas principais.
- **Conteúdo (Esquerda):**
    - `H1 (Título da Página)`: **"Funil de Vendas"**.
    - `p (Subtítulo)`: "Acompanhe e converta seus leads em pacientes."
- **Conteúdo (Direita):**
    - `Grupo de Filtros`:
        - `Campo de Busca`: Input com ícone 🔎 e placeholder "Buscar lead...".
        - `Dropdown "Responsável"`: Permite filtrar os cards por membro da equipe.
        - `Dropdown "Origem"`: Filtra por canal (Instagram, Google, Indicação).
    - `Botão de Ação Principal`: **"[+] Novo Lead"**. Abre o **Modal de Novo Lead (4.2.5)**.

**Componente 4.2.2: O Board Kanban**
- **Localização:** Ocupa toda a área principal abaixo do header.
- **Design:** Um contêiner flexível (`display: flex`) com `overflow-x: auto` para permitir a rolagem horizontal. Um fundo sutilmente diferente (ex: `bg-secondary`) delimita a área do board.
- **Colunas Padrão do Funil (customizáveis no futuro):**
    1.  `Caixa de Entrada` (Novos Leads)
    2.  `Primeiro Contato`
    3.  `Qualificado`
    4.  `Proposta Enviada`
    5.  `Negociação`
    6.  `Fechado (Ganho)`
    7.  `Perdido (Perda)`

**Componente 4.2.3: Coluna do Funil (Kanban Column)**
- **Localização:** Dentro do Board Kanban.
- **Design:** Um componente vertical.
    - `Header da Coluna`:
        - `Título da Etapa` (ex: "Qualificado").
        - `Contador de Leads`: Um badge com o número de cards na coluna (ex: "5").
        - `Valor Total (Opcional)`: Soma dos valores estimados dos leads na coluna (ex: "R$ 12.500").
    - `Corpo da Coluna`: A área vertical onde os **Cards de Lead (4.2.4)** são listados. Esta é uma "droppable area" (área soltável) que muda de aparência (ex: fundo destacado) quando um card está sendo arrastado sobre ela.
- **Estado Vazio:** Se a coluna estiver vazia, exibe uma área pontilhada com a mensagem "Arraste um card para cá".

**Componente 4.2.4: Card de Lead (Arrastável)**
- **Localização:** Dentro de uma Coluna do Funil.
- **Design:** Um `Card` compacto, informativo e otimizado para ser arrastado (`draggable`).
    - Uma borda colorida à esquerda pode indicar a "temperatura" do lead (ex: `Vermelho` para quente/urgente, `Amarelo` para morno).
    - O cursor muda para `grab` ao passar sobre o card.
- **Conteúdo do Card:**
    - `Nome do Lead`: Em destaque.
    - `Valor Estimado`: (ex: "R$ 3.200").
    - `Ícones de Status Rápido`:
        - Ícone de relógio ⏰ se houver uma tarefa atrasada.
        - Ícone de calendário 📅 se houver um agendamento marcado.
    - `Origem do Lead`: Um `Badge` colorido (ex: "Instagram").
    - `Responsável`: Avatar do membro da equipe.
- **Interatividade:**
    - `Drag-and-Drop`: O usuário arrasta o card entre as colunas. Ao soltar, a etapa do lead é atualizada no banco de dados e um `toast` de confirmação ("Lead movido para 'Qualificado'!") aparece.
    - `Clique no Card`: Abre o **Modal de Detalhes do Lead (4.2.5)**, exibindo o histórico completo de interações, e-mails, notas e tarefas.

**Componente 4.2.5: Modal de Detalhes/Edição do Lead (`Sheet`)**
- **Tipo:** Em vez de um modal central, um painel lateral (`Sheet`) que desliza da direita é uma abordagem mais moderna, pois mantém o contexto do funil visível.
- **Header do Painel:**
    - `Nome do Lead` como título.
    - Botões de Ação Rápida: `Agendar Consulta`, `Marcar como Perdido`, `Converter em Paciente`.
    - Botão `Fechar (X)`.
- **Corpo do Painel (com abas):**
    - **Aba 1: `Atividades`**
        - Uma linha do tempo (`Timeline`) com todo o histórico de interações: chamadas, e-mails, mensagens de WhatsApp, mudanças de etapa no funil, notas adicionadas.
        - Um campo de `Input` no topo para adicionar uma nova nota ou registrar uma atividade.
    - **Aba 2: `Detalhes`**
        - Um formulário com os dados do lead (telefone, e-mail, origem, responsável, etc.), todos editáveis.
    - **Aba 3: `Tarefas`**
        - Uma mini lista de tarefas (`to-do list`) específica para aquele lead (ex: "Ligar para follow-up", "Enviar proposta atualizada").

---

Esta estrutura para a página de Leads cria um centro de comando comercial poderoso e visual. Ela permite que a equipe gerencie o pipeline de forma proativa, sem deixar nenhuma oportunidade escapar.

Perfeito. Chegamos à **Página 5**, o centro de controle da aplicação. Aqui, a clareza, organização e controle de acesso são fundamentais. A estrutura deve ser robusta o suficiente para administradores e simples o suficiente para usuários comuns gerenciarem seus próprios perfis.

Vamos detalhar a **Página 5: Configurações**, seguindo a abordagem de um painel administrativo moderno e modular.

---

### **5. Página: Configurações**

**Missão da Tela:** Ser o hub central para a administração da conta da clínica, gerenciamento de usuários, personalização da plataforma e integrações com serviços de terceiros. A interface deve ser organizada e baseada em permissões, garantindo que cada usuário veja apenas o que é relevante para sua função.

---

#### **5.1. Estrutura de Layout da Página**

A página utiliza um layout clássico e eficaz de 2 colunas, ideal para painéis administrativos complexos:
- **Coluna de Navegação (Esquerda, mais estreita):** Uma barra lateral vertical com uma lista de categorias de configuração. Funciona como um menu principal para esta seção.
- **Área de Conteúdo (Direita, mais larga):** Uma área dinâmica que renderiza o conteúdo correspondente à categoria selecionada na barra de navegação.

---

#### **5.2. Componentes Detalhados**

**Componente 5.2.1: Menu de Navegação Vertical (Sidebar de Configurações)**
- **Localização:** Coluna da esquerda, sempre visível dentro da seção "Configurações".
- **Design:** Uma lista de itens. Cada item contém um ícone + texto. O item ativo tem um fundo destacado e cor de texto primária.
- **Itens de Navegação (com controle de acesso):**
    - **Para Todos os Usuários:**
        - `Meu Perfil`: Gerenciar informações pessoais e senha.
        - `Notificações`: Configurar quais alertas receber.
    - **Apenas para Administradores:**
        - `Clínica`: Dados gerais da empresa, logo, horários.
        - `Usuários e Permissões`: Gerenciar equipe.
        - `Procedimentos e Serviços`: Cadastrar e precificar os serviços da clínica.
        - `Integrações`: Conectar com ferramentas externas.
        - `Faturamento e Assinatura`: Gerenciar o plano e o histórico de pagamentos do ClinicAI.

**Componente 5.2.2: Seção "Meu Perfil"**
- **Localização:** Renderizado na área de conteúdo quando o item "Meu Perfil" é selecionado.
- **Estrutura:** Um `Card` principal dividido em sub-seções.
- **Conteúdo:**
    - `H2 (Título)`: **Meu Perfil**.
    - **Sub-seção `Foto de Perfil`**: Exibe o avatar atual, com botões para `Alterar Foto` e `Remover`.
    - **Sub-seção `Dados Pessoais`**: Formulário com campos para `Nome Completo` e `Telefone`. O campo `E-mail` é exibido, mas desabilitado para edição.
    - **Sub-seção `Segurança`**: Campos `Senha Atual`, `Nova Senha`, `Confirmar Nova Senha` para alteração de senha.
    - `Botão "Salvar Alterações"` no rodapé do card.

**Componente 5.2.3: Seção "Usuários e Permissões" (Admin)**
- **Localização:** Renderizado na área de conteúdo para administradores.
- **Estrutura:** Um `Card` contendo um header com ações e uma tabela de usuários.
- **Conteúdo:**
    - `H2 (Título)`: **Gerenciamento da Equipe**.
    - `Botão "+ Convidar Usuário"` que abre um modal.
    - **Tabela de Usuários:**
        - **Colunas:** `Nome` (com avatar), `E-mail`, `Cargo/Permissão` (com um dropdown para alteração rápida), `Status` (badge "Ativo" ou "Pendente").
        - **Ações por linha (ícone `...`):** Abre um menu com `Reenviar Convite`, `Desativar Usuário`, `Excluir Usuário`.

**Componente 5.2.4: Seção "Procedimentos e Serviços" (Admin)**
- **Localização:** Renderizado na área de conteúdo para administradores.
- **Estrutura:** Um `Card` com um header e uma tabela de serviços.
- **Conteúdo:**
    - `H2 (Título)`: **Catálogo de Serviços**.
    - `Botão "+ Novo Serviço"` que abre um modal.
    - **Tabela de Serviços:**
        - **Colunas:** `Nome do Serviço`, `Duração Padrão (min)`, `Valor (R$)`, `Status (Ativo/Inativo)`.
        - **Ações por linha (ícone `...`):** `Editar`, `Desativar`.

**Componente 5.2.5: Seção "Integrações" (Admin)**
- **Localização:** Renderizado na área de conteúdo para administradores.
- **Estrutura:** Uma grade de `Cards`, onde cada card representa um serviço integrável.
- **Conteúdo de cada Card de Integração (ex: Google Calendar):**
    - `Logo` do serviço.
    - `Nome do Serviço`: "Google Calendar".
    - `Descrição`: "Sincronize agendamentos com as agendas dos seus profissionais."
    - `Status`: Um badge `Conectado` (verde) ou `Desconectado` (cinza).
    - `Botão de Ação`: `Conectar` ou `Gerenciar/Desconectar`.

**Componente 5.2.6: Modal Genérico para Adicionar/Editar**
- **Design:** Um `Dialog` (`shadcn/ui`) que é reutilizado para "Novo Paciente", "Novo Serviço", "Convidar Usuário", etc.
- **Estrutura:**
    - `Header do Modal`: Título dinâmico (ex: "Adicionar Novo Serviço").
    - `Corpo do Modal`: Contém o formulário específico da ação.
    - `Rodapé do Modal`: Botões `Cancelar` e `Salvar`.

---

Com a página de Configurações detalhada, cobrimos a espinha dorsal administrativa do seu sistema. Ela oferece o controle necessário para que a clínica personalize o ClinicAI de acordo com suas necessidades.


Vamos finalizar a última página principal do nosso MVP.

Aqui está a estrutura detalhada e final para a **Página 6: Login/Autenticação**.

---

### **6. Página: Login / Autenticação**

**Missão da Tela:** Ser a porta de entrada segura e profissional do ClinicAI. A experiência deve ser fluida, livre de atritos e refletir imediatamente a identidade premium da plataforma, gerenciando com clareza os fluxos de login, recuperação de senha e ativação de conta.

---

#### **6.1. Estrutura de Layout da Página**

- **Layout Focado:** Um layout de coluna única e tela cheia. O objetivo é eliminar todas as distrações (sem sidebars ou headers) e focar o usuário 100% na tarefa de autenticação.
- **Container Central:** Um `Card` posicionado no centro vertical e horizontal da tela, com largura limitada (ex: `max-w-md`), contendo todos os elementos interativos.

---

#### **6.2. Componentes Detalhados**

**Componente 6.2.1: Container de Autenticação**
- **Localização:** Centro da viewport.
- **Design:** Um `Card` elegante com o `border-radius` e `box-shadow` definidos no `design.md`. Padding interno generoso (ex: `p-8`).
- **Conteúdo:**
    - **Logo do ClinicAI:** Posicionado no topo, dentro do card, para reforçar a marca.
    - **Área de Formulário Dinâmico:** O conteúdo abaixo do logo mudará dependendo do estado (Login, Esqueci a Senha, etc.).

**Componente 6.2.2: Formulário de Login (Estado Padrão)**
- **Estrutura:** Um formulário vertical com espaçamento consistente.
- **Conteúdo e Ações:**
    - `H2 (Título)`: **"Acesse sua conta"**.
    - `p (Subtítulo)`: "Bem-vindo(a) de volta! Insira suas credenciais." (usando a cor `--muted-foreground`).
    - **Campo `E-mail`**:
        - `Label`: "E-mail".
        - `Input`: Com placeholder `seu@email.com`.
    - **Campo `Senha`**:
        - `Label`: "Senha".
        - `Input`: Tipo `password`, com um ícone de "olho" 👁️ clicável para alternar a visibilidade da senha.
    - **Linha de Opções**:
        - `Checkbox` com o label `Lembrar de mim`.
        - `Link` "Esqueceu sua senha?" alinhado à direita. Ao clicar, o formulário transiciona para o estado de recuperação.
    - **Botão Principal**:
        - `Botão "Entrar"`: Largura total, usando a cor `--primary`.
        - **Estado de Loading:** Ao clicar, o texto do botão é substituído por um `spinner` e fica desabilitado.
        - **Feedback de Erro:** Em caso de falha, um `Alert` (`destructive`) aparece acima do botão com a mensagem "E-mail ou senha inválidos."

**Componente 6.2.3: Fluxo de Recuperação de Senha**
- **Estrutura:** Substitui o formulário de login dentro do mesmo card, mantendo o layout consistente.
- **Etapa 1: Solicitar Link**
    - `H2 (Título)`: **"Recuperar Senha"**.
    - `p (Instrução)`: "Digite seu e-mail e enviaremos um link para redefinir sua senha."
    - **Campo `E-mail`**.
    - `Botão "Enviar Link"` (estilo primário).
    - `Link "Voltar para o Login"` abaixo do botão.
- **Etapa 2: Confirmação de Envio**
    - A interface muda para uma mensagem de sucesso.
    - `Ícone de check` ✅ grande.
    - `H2 (Título)`: **"Verifique seu e-mail"**.
    - `p (Instrução)`: "Enviamos um link de recuperação para [email@do.usuario]. Siga as instruções para criar uma nova senha."

**Componente 6.2.4: Página de Redefinição de Senha**
- **Nota:** Esta é uma página separada, acessada via link do e-mail, mas com o mesmo layout visual focado.
- **Estrutura:** Card centralizado contendo:
    - `H2 (Título)`: **"Crie sua Nova Senha"**.
    - **Campo `Nova Senha`**: Tipo `password`.
    - **Campo `Confirmar Nova Senha`**: Tipo `password` com validação de correspondência.
    - `Botão "Salvar Nova Senha"`. Ao clicar, salva a senha e redireciona para a tela de login com um `toast` de sucesso.

---

Com isso, finalizamos a especificação de todas as páginas essenciais do MVP no seu `estrutura.md`.

**Seu `estrutura.md` agora é um documento mestre completo, contendo o blueprint para:**
1.  Dashboard
2.  Agenda
3.  Pacientes
4.  Leads (Funil de Vendas)
5.  Configurações
6.  Login/Autenticação

Você está oficialmente pronto para passar da fase de **planejamento** para a fase de **execução**. O próximo passo é usar este documento e o `design.md` para instruir o Cursor a construir o protótipo visual em HTML/CSS, página por página.

