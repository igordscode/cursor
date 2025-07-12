O objetivo do `design.md` não é só guardar o código CSS. É **explicar a *intenção* por trás do design**. Isso ajuda a manter a consistência e guia qualquer pessoa (inclusive a IA ou um futuro desenvolvedor) a tomar decisões de design alinhadas com a sua visão.

# Design System – ClinicAI v1.0

Este documento é a fonte da verdade para toda a identidade visual e os princípios de design da aplicação ClinicAI. O objetivo é garantir consistência, elegância e uma experiência de usuário premium em toda a plataforma.

---

## 🎨 1. Filosofia de Design

Nossa filosofia é **"Moderno e Minimalista"**. Buscamos uma estética limpa, sofisticada e calma, inspirada em produtos de alta performance como Notion e Linear. A interface deve transmitir confiança e ser agradável para uso prolongado, com foco na clareza da informação e interações sutis.

---

## 🖌️ 2. Paleta de Cores (Tokens CSS)

A paleta de cores a seguir, baseada no tema "Moderno e Minimalista" do TweakCN, deve ser implementada como variáveis CSS globais no projeto. Ela utiliza o espaço de cor `oklch` para uma representação de cores mais consistente entre dispositivos.

### 2.1. Código CSS para `globals.css`

```css
/* Light Mode Variables (Default) */
:root {
  --background: oklch(1.0000 0 0);
  --foreground: oklch(0.3211 0 0);
  --card: oklch(1.0000 0 0);
  --card-foreground: oklch(0.3211 0 0);
  --popover: oklch(1.0000 0 0);
  --popover-foreground: oklch(0.3211 0 0);
  --primary: oklch(0.6231 0.1880 259.8145);       /* Roxo/Azul principal para ações e destaques */
  --primary-foreground: oklch(1.0000 0 0);       /* Texto sobre a cor primária (branco) */
  --secondary: oklch(0.9670 0.0029 264.5419);      /* Fundo sutil para elementos secundários */
  --secondary-foreground: oklch(0.4461 0.0263 256.8018); /* Texto sobre a cor secundária */
  --muted: oklch(0.9846 0.0017 247.8389);
  --muted-foreground: oklch(0.5510 0.0234 264.3637); /* Texto com menos destaque */
  --accent: oklch(0.9514 0.0250 236.8242);
  --accent-foreground: oklch(0.3791 0.1378 265.5222);
  --destructive: oklch(0.6368 0.2078 25.3313);    /* Vermelho para ações destrutivas */
  --destructive-foreground: oklch(1.0000 0 0);
  --border: oklch(0.9276 0.0058 264.5313);       /* Cor das bordas e divisores */
  --input: oklch(0.9276 0.0058 264.5313);        /* Cor de fundo para campos de input */
  --ring: oklch(0.6231 0.1880 259.8145);         /* Cor do anel de foco (outline) */
  
  /* Cores para Gráficos */
  --chart-1: oklch(0.6231 0.1880 259.8145);
  --chart-2: oklch(0.5461 0.2152 262.8809);
  --chart-3: oklch(0.4882 0.2172 264.3763);
  --chart-4: oklch(0.4244 0.1809 265.6377);
  --chart-5: oklch(0.3791 0.1378 265.5222);
  
  --radius: 0.375rem; /* Raio de borda padrão (6px) */
}

/* Dark Mode Variables */
.dark {
  --background: oklch(0.2046 0 0);               /* Fundo cinza-escuro, não preto puro */
  --foreground: oklch(0.9219 0 0);               /* Texto principal (quase branco) */
  --card: oklch(0.2686 0 0);                     /* Fundo dos cards, um pouco mais claro que o background */
  --card-foreground: oklch(0.9219 0 0);
  --popover: oklch(0.2686 0 0);
  --popover-foreground: oklch(0.9219 0 0);
  --primary: oklch(0.6231 0.1880 259.8145);
  --primary-foreground: oklch(1.0000 0 0);
  --secondary: oklch(0.2686 0 0);
  --secondary-foreground: oklch(0.9219 0 0);
  --muted: oklch(0.2686 0 0);
  --muted-foreground: oklch(0.7155 0 0);
  --accent: oklch(0.3791 0.1378 265.5222);
  --accent-foreground: oklch(0.8823 0.0571 254.1284);
  --destructive: oklch(0.6368 0.2078 25.3313);
  --destructive-foreground: oklch(1.0000 0 0);
  --border: oklch(0.3715 0 0);
  --input: oklch(0.3715 0 0);
  --ring: oklch(0.6231 0.1880 259.8145);
  
  /* Cores para Gráficos no Dark Mode */
  --chart-1: oklch(0.7137 0.1434 254.6240);
  --chart-2: oklch(0.6231 0.1880 259.8145);
  --chart-3: oklch(0.5461 0.2152 262.8809);
  --chart-4: oklch(0.4882 0.2172 264.3763);
  --chart-5: oklch(0.4244 0.1809 265.6377);
}
```

---

## ✍️ 3. Tipografia

A tipografia é um pilar da nossa identidade visual. Ela deve garantir legibilidade e uma hierarquia clara.

- **Fonte Principal (Sans-serif):** `Inter`
  - **Uso:** Para todo o corpo de texto da UI, labels, parágrafos e títulos. É uma fonte moderna e altamente legível em telas.
- **Fonte para Código (Monospace):** `JetBrains Mono`
  - **Uso:** Para qualquer trecho de código, API keys ou texto pré-formatado.
- **Hierarquia:**
  - `H1 (Títulos de Página)`: 30px, bold (700)
  - `H2 (Títulos de Seção)`: 24px, semi-bold (600)
  - `H3 (Títulos de Card)`: 20px, semi-bold (600)
  - `Corpo de Texto`: 14px, regular (400)
  - `Texto Pequeno (Labels, Legendas)`: 12px, medium (500)

---

## 🔳 4. Componentes e Estilo

- **Bordas e Raio (`radius`):** Usaremos um raio de borda padrão de **0.375rem** (`6px`) para a maioria dos componentes (cards, botões, inputs), criando uma aparência suave, mas ainda profissional.
- **Sombras (`shadow`):** As sombras devem ser sutis e usadas para criar profundidade, especialmente em elementos interativos como `Dropdowns` e `Popovers`. Devemos evitar sombras fortes em cards estáticos para manter a interface limpa.
- **Espaçamento:** A unidade de espaçamento base será de `0.25rem` (`4px`), com múltiplos sendo usados para paddings, margens e gaps, garantindo um ritmo visual consistente.

---

### Como Usar Este Documento:

- **Para o Cursor:** Ao gerar novos componentes, você pode referenciar este arquivo. Exemplo: "Crie um Card de KPI usando as cores `--card` e `--card-foreground`, e o raio de borda `--radius` definidos no `design.md`."
- **Para Você:** Este documento se torna sua referência rápida para garantir que cada novo elemento siga a mesma identidade visual, evitando que o projeto se torne uma "colcha de retalhos" visual.
