# Handoff: Site Orbi Agência

## Overview
Landing page de uma agência de criação de sites (Orbi Agência), focada em gerar leads via WhatsApp. Estética vermelho-e-preto, futurista/"espacial". Fluxo: Hero → Portfólio → Por que a Orbi (dor/estatísticas) → Serviços → Como funciona (processo) → Serviços complementares → Contato/CTA final. Inclui também o **ORBI SITE ENGINE**: um sistema de design/direção de arte reutilizável (não específico da Órbi) para gerar outros sites a partir de um briefing, sem depender de referências externas.

## About the Design Files
Os arquivos deste pacote são **referências de design em HTML** — um protótipo estático que mostra visual, copy e comportamento pretendidos, não código de produção para copiar direto. A tarefa é **recriar este design no ambiente/stack real do projeto de destino** (React, Vue, Next, etc. — ou a stack mais adequada, se nenhuma existir ainda), usando os padrões e bibliotecas já estabelecidos ali.

## Fidelity
**Alta fidelidade (hifi).** `site/index.html` é HTML/CSS/JS inline puro (sem framework), com cores, tipografia, espaçamento e interações finais — deve ser recriado pixel a pouco no stack de destino, preservando exatamente cores, fontes, espaçamentos e microinterações descritos abaixo.

## Screens / Views
Página única (`site/index.html`), 7 seções em scroll vertical + 1 botão flutuante:

### 1. Hero
- **Purpose:** primeira impressão + CTA de orçamento.
- **Layout:** full-viewport, vídeo de fundo (`heroVid`, loop, mudo) + overlay radial vermelho multiply + vinheta linear no topo. Nav fixa no topo (logo esquerda, menu central, CTA pill direita). Conteúdo central: H1 gigante, subtítulo, 2 CTAs, stats.
- **Components:**
  - Nav: logo (anel + ponto + satélite orbitando, `orbA` 3.5s) + wordmark "Orbi"/"AGÊNCIA" (Orbitron) + menu (`Serviços`, `Portfólio`, `Processo`) + CTA pill branco "Solicitar Orçamento →" (bg `#fff`, texto `#c50200`, `border-radius:999px`, `padding:15px 26px`, font Orbitron 700 14px).
  - H1: "Decole" com "co" em stroke-only (`-webkit-text-stroke:2px #fff`, `color:transparent`), font Anton, `clamp(64px,20vw,340px)`, `line-height:0.9`, uppercase.
  - Subtítulo: "Criamos sites que colocam a sua marca em órbita." Archivo 500, `clamp(17–22px)`.
  - CTA row: "Quero meu site →" (pill branco/vermelho) + "Ver portfólio" (outline branco transparente, `border:1.5px solid rgba(255,255,255,.55)`).
  - Stats: "+200 Sites criados" / "5–7 dias Para entregar" / "100% Responsivo", Orbitron 800 34px + label uppercase 13px, divisores verticais `1px` `rgba(255,255,255,.28)`.
- **Content/copy:** exatamente o texto acima, em português.

### 2. Portfólio ("Demonstração de sites")
- **Layout:** fundo `linear-gradient(#150000→#0d0101)`, container 1240px, grid 3 colunas (`orbi-grid-2`).
- **Components:** 3 cards com preview real via iframe lazy-loaded (thumbnail 16:10, `border-radius:18px`, spinner de loading até o iframe carregar) + título (Orbitron 700 21px) + tag de tipo de site. Cards: Clínica Odontológica, Clínica de Estética, Advocacia — cada um link externo para o site real.

### 3. "Por que a Orbi" (dor/estatísticas)
- **Layout:** centralizado, container 900px. H2 "Seu cliente decide em 3 segundos" (Anton, `clamp(38–72px)`).
- **Components:** grid 3 cards ("pain cards") com: número grande (Orbitron 800, cor `#ff2d2d`) com efeito de "decodificação" de caracteres ao entrar em viewport (900ms), anel cônico holográfico animado na borda (hover acelera 5s→1.8s), glow radial que segue o cursor. Textos: "75% julgam a credibilidade..." / "24h seu site trabalha..." / "7 dias é tudo que você espera...". CTA final "Quero um site que vende →".

### 4. Serviços
- **Layout:** lista vertical full-width (não grid de cards), container 1180px.
- **Components:** 5 linhas (`orbi-serv-row`): nó orbital pulsante à esquerda (anel + ponto + satélite girando), título (Archivo 700, `clamp(21–29px)`) + descrição, seta vermelha à direita. Linha de "scan" desliza sob a linha no hover. Itens: Sites institucionais, Landing pages, Lojas virtuais, Manutenção mensal, Automações de WhatsApp.

### 5. Processo ("Como funciona")
- **Layout:** grid 4 colunas (2 no tablet, 1 no mobile), container 1180px.
- **Components:** 4 steps numerados (00→valor, contador animado 500ms ao entrar em viewport), Orbitron 800 `clamp(40–52px)` cor `#ff2d2d`, + título/descrição. Steps: Briefing, Design, Desenvolvimento, No ar.

### 6. Serviços complementares ("Depois do site")
- **Layout:** centralizado, container 1100px, grid 5 colunas (3 no tablet, 2 no mobile).
- **Components:** 5 itens ícone+texto: chip claro `#f4f2f1` 96×96px `border-radius:24px` com borda 2px colorida por categoria, contendo ícone SVG line-art (`stroke-width:2`); abaixo, título (15px 600) + descrição curta (13px, `rgba(255,255,255,.55)`) explicando o serviço em linguagem de "tirar a dor do cliente". Hover: ícone `scale(1.1)` + sombra. Itens e cores: Manutenção `#4a90e2`, SEO `#2ecc71`, Google Ads `#e60d00`, Automação WhatsApp `#25d366`, Email Marketing `#ff6b35`.

### 7. Contato ("Bora decolar?")
- **Layout:** fundo radial vermelho igual ao hero, container 1240px.
- **Components:** H2 "Bora decolar?" (Anton `clamp(48–104px)`), parágrafo, CTA pill "Solicitar orçamento →". Footer: logo mini + colunas "Contato" (WhatsApp, e-mail, Instagram) e "Menu" (Serviços/Portfólio/Contato) + copyright.

### Botão flutuante WhatsApp
Fixo `bottom:22px; right:22px`, círculo verde `#25D366`, ícone SVG do WhatsApp, label "Resposta rápida" (escondido no mobile), pulso de sombra contínuo (`waPulse`, 2.6s).

## Interactions & Behavior
- **Reveal on scroll:** todo elemento com `data-reveal`/`.reveal` entra com fade + `translateY(28px)`, via IntersectionObserver, stagger 90ms por índice.
- **Counters:** steps do processo contam 00→valor final em 500ms (rAF) ao entrar em viewport.
- **Decrypt numbers:** pain cards mostram caracteres aleatórios travando progressivamente até o valor final (900ms).
- **Holo ring + cursor glow:** anel cônico gira continuamente (5s), acelera no hover (1.8s); glow radial segue a posição do cursor dentro do card via custom properties CSS (`--gx/--gy`).
- **Service row scan:** ao entrar em viewport, linha de "scan" desliza (`scaleX`) sob cada linha de serviço, sequencialmente.
- **Portfolio iframes:** carregam sob demanda (lazy, 1 por vez via fila) quando o card entra na viewport, com spinner até o `load`.
- **Hover states:** todos os CTAs/links usam seletores `[data-hv="N"]` com estilos de hover dedicados (mudança de bg/cor/shadow).
- **Vídeo do hero:** autoplay, muted, loop, com fallback de retomada se pausar/stalled.
- **Performance:** seções abaixo da dobra usam `content-visibility:auto` (não afeta visual, só performance).
- **Reduced motion:** toda animação tem fallback estático via `prefers-reduced-motion`.
- **Responsivo:** breakpoints em 1080px, 900px, 860px, 560px, 520px — grids colapsam (3→2→1 col), paddings de seção reduzem de 96px para 56px, tipografia reduz via `clamp`.

## State Management
Página estática, sem state de aplicação. Único estado runtime: flags de "mounted"/"loaded" por iframe de portfólio (controle de carregamento lazy) e classes `.in`/`.reveal` para animação de entrada — pode ser reimplementado com hooks simples (`useInView`/IntersectionObserver) no framework de destino.

## Design Tokens
Ver `ORBI-SITE-ENGINE-V3.md` (seções COLOR SYSTEM, TYPOGRAPHY SYSTEM, tokens CSS em ORBI-CORE) para o sistema completo e reutilizável. Resumo aplicado neste site:
- **Cores:** primary `#e60d00` / `#ff2408` (hero) · accent `#ff2d2d` · CTA text `#c50200` · backgrounds `#150000…#080101` (nunca preto puro) · texto `#fff` / `rgba(255,255,255,.55–.85)` · WhatsApp `#25D366` · ícones complementares: azul `#4a90e2`, verde `#2ecc71`, vermelho `#e60d00`, verde WhatsApp `#25d366`, laranja `#ff6b35`.
- **Tipografia:** display Anton 400 (H1/H2), tech/números Orbitron 600/800, corpo Archivo 500/600/700. Escala: H1 `clamp(64,20vw,340px)`, H2 `clamp(38–40,5vw,68–72px)`, corpo 15–20px.
- **Espaçamento:** seção `padding:96px 56px` desktop / `56px` mobile. Containers 900–1240px.
- **Radius:** pill `999px` (CTAs), `12–24px` (cards/ícones).
- **Sombra/glow:** `0 14px 34px rgba(0,0,0,.5)` (hover ícone), `rgba(255,45,45,0.12–0.9)` (glow vermelho).

## Assets
- Vídeo de hero: `https://res.cloudinary.com/ldxkye73/video/upload/Television_powers_on_red_glow_202608071445_c2jprj.mp4` (externo, Cloudinary).
- Favicon/apple-touch-icon: SVG inline (círculo vermelho + anel branco), embutido como data-URI no `<head>`.
- Ícones de serviços complementares: SVG line-art inline (sem arquivo externo).
- 3 sites de portfólio linkados via iframe (URLs Netlify de clientes reais).

## Files
- `site/index.html` — página completa (HTML/CSS/JS inline, ~51KB, sem dependências externas além de Google Fonts e o vídeo do Cloudinary).
- `ORBI-SITE-ENGINE-V3.md` — sistema de design/direção de arte consolidado (Core, Art Direction, Visual Narrative, Layout/Hero/Section/Motion/Background Library, Typography/Color System, Image Direction, Component Engine, Anti-Generic checklist, One-Shot Prompt) — útil se o próximo projeto for outro site do "ORBI SITE ENGINE", não só esta página específica.
