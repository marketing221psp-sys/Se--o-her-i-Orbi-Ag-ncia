# ORBI DESIGN SYSTEM v1.0
Extraído de `site/index.html`. Nenhuma alteração foi feita no projeto nesta etapa.

---

## 1. ORBI VISUAL DNA
Agência de tecnologia com estética "espacial/holográfica": vermelho intenso sobre preto quase absoluto, tipografia condensada agressiva (Anton) + tech display (Orbitron), micro-interações de "scan"/"órbita" em vez de glassmorphism genérico. Sensação: painel de comando futurista, não SaaS pastel.

## 2. COLOR SYSTEM
**Primary (vermelho Orbi):** `#e60d00` (marca/base), `#ff2408` (hero radial hot-spot), `#ff2d2d` / `#ff2d2d` (acentos de UI, ícones, textos destaque), `#c50200` (texto sobre branco em CTAs).
**Secondary/Gradiente vermelho profundo:** `#b60300` → `#6d0100` → `#240000` (hero radial), `#8a0300` → `#4a0100` → `#1c0000` (overlay multiply).
**Background (preto avermelhado, nunca preto puro):** `#150000`, `#0d0101`, `#0c0101`, `#0a0101`, `#080101`, `#0f0101`, `#140202`.
**Surface (cards):** `rgba(255,255,255,0.015–0.09)` sobre fundo escuro; ícones complementares em `#f4f2f1` (única superfície clara fora do hero/CTA).
**Text:** branco `#ffffff` (títulos), `rgba(255,255,255,0.55–0.85)` (corpo/legenda, escala decrescente por hierarquia).
**Border:** `rgba(255,255,255,0.09–0.28)`.
**Glow/Accent:** `rgba(255,45,45,0.12–0.9)` (glow de hover, ring holográfico), `#25D366` (WhatsApp, único verde — só no botão flutuante).
**Cores de serviços complementares (categoria, não-brand):** azul `#4a90e2`, verde `#2ecc71`, vermelho da marca `#e60d00`, verde WhatsApp `#25d366`, laranja `#ff6b35` — usadas SÓ nos 5 ícones da seção "Depois do site", nunca em texto/CTA.

## 3. TYPOGRAPHY SYSTEM
**Fontes:** Anton (display, títulos H1/H2 — uppercase, `font-weight:400`, tracking negativo `-0.01em`), Orbitron 600/800 (tech/numérico — logo, stats, CTAs de destaque, contadores), Archivo 500/600/700 (corpo e UI).
**Escala:**
- H1 hero: `clamp(64px, 20vw, 340px)`, `line-height:0.9`
- H2 seção: `clamp(38–40px, 5–5.2vw, 68–72px)`, `line-height:0.95–0.98`
- H3 card/step: 20–29px, weight 700
- Eyebrow/label: 12–13px, `letter-spacing:0.22–0.28em`, uppercase, cor `#ff2408`/`#ff2d2d`
- Corpo: 15–20px, `line-height:1.45–1.6`
- Números grandes (stats/steps): `clamp(34–52px)`, Orbitron 800

## 4. SPACING SYSTEM
- Seção (desktop): `padding: 96px 56px` → mobile `56px` (`.orbi-sec` media query)
- Container max-width: `900–1240px` (varia por seção; hero sem cap)
- Gap grid padrão: `20–24px` (cards), `30px` (steps)
- Título → descrição: `16–24px`
- Bloco eyebrow → H2: `16–22px`
- Hero: label→CTA `40px`, CTA→stats `54px`

## 5. GRID & LAYOUT SYSTEM
- Portfólio/Serviços: grid 3 col → `orbi-grid-2`/`.orbi-mini` colapsa 3→2→1 conforme breakpoint
- Complementares: grid 5 col → 3 col (1080px) → 2 col (520px)
- Processo: grid 4 col → 2 col (900px) → 1 col (520px)
- Breakpoints usados: `1080px`, `900px`, `860px`, `560px`, `520px`
- Hero: coluna única centralizada, sem grid assimétrico [NECESSITA DEFINIÇÃO: variação assimétrica ainda não existe no projeto]

## 6. LINGUAGEM DE LAYOUT
Composição é **vertical e centrada** nas seções institucionais (hero, dor, complementares, processo) e **horizontal/lista** na seção de serviços (linhas full-width com nó orbital, não cards) — é essa alternância lista-vs-grid que evita a sensação de "template de cards repetidos". Hierarquia construída por escala tipográfica extrema (Anton gigante) contra texto secundário pequeno e opaco. Ritmo vertical marcado por mudança de tom de fundo entre seções (nunca cor sólida idêntica duas vezes seguidas). Densidade baixa: 1 ideia por seção, textos curtos.

## 7. COMPONENT LIBRARY
**NAVIGATION** — NAV-01: nav fixa translúcida sobre o hero, logo+órbita animada, menu central, CTA pill branco à direita; colapsa em wrap no mobile.
**HERO** — HERO-01: full-bleed video/gradiente vermelho + overlay multiply + vinheta preta no topo, H1 gigante Anton com uma palavra em stroke-only, subtítulo curto, 2 CTAs (preenchido + outline), stats com divisores verticais.
**BUTTON** — CTA-01 (pill branco, texto vermelho, usado em CTAs primários), CTA-02 (outline branco transparente, secundário), CTA-03 (pill nav compacto).
**CARD** — CARD-01 "pain card": borda sutil + gradient wash + anel holográfico cônico animado no hover + glow que segue o cursor + número que "decodifica" caracteres ao entrar em viewport.
**SERVICE ROW** — SERV-ROW-01: lista horizontal (não grid), nó orbital pulsante à esquerda, linha de "scan" que desliza embaixo no hover, seta à direita — usado para serviços principais (5 itens).
**MINI ICON CARD** — CARD-02: ícone SVG line-art em chip claro (`#f4f2f1`) + label + descrição curta — usado para serviços complementares.
**STATS/COUNTER** — STAT-01: número Orbitron + label uppercase pequena; STEP-01: número gigante que conta de 00 até o valor final ao entrar em viewport.
**LOGO** — LOGO-01: anel + ponto central + satélite orbitando (`orbA` 3.5s), reaproveitado no footer em escala menor.
**FLOATING CTA** — WA-01: botão WhatsApp fixo, verde único da paleta, pulso de sombra contínuo.
**FOOTER** — FOOTER-01: logo + colunas de links + copyright, borda superior fina.
**FORMS** — [NECESSITA DEFINIÇÃO: site não tem formulário, só links diretos para WhatsApp/e-mail]
**TESTIMONIALS / PRICING / BADGE** — [NECESSITA DEFINIÇÃO: não existem no projeto atual]
**MOBILE COMPONENTS** — mesmos componentes com padding reduzido, grids colapsados, label do WhatsApp escondido, ícones step sem linha conectora.

## 8. BACKGROUND LIBRARY
**BG-01 (Hero):** radial vermelho multi-stop (`#ff2408→#240000`) + vídeo com blend multiply + vinheta linear no topo. Cinematic, alta intensidade — só na seção de abertura e no CTA final.
**BG-02 (Seções escuras):** gradiente linear vertical entre tons de preto-vermelho quase pretos (`#150000→#080101`), sutil, para leitura longa.
**BG-03 (Glow radial de seção):** `radial-gradient(120% 80% at 50% -10%, rgba(255,45,45,0.1), transparent 55%)` sobre BG-02 — usado em Serviços e Complementares para dar profundidade sem competir com conteúdo.
**BG-04 (Holo ring/glow de card):** conic-gradient animado (`holoSweep`, 5s→1.8s no hover) + radial glow que segue cursor via custom properties `--gx/--gy`. Alta sofisticação, uso pontual (só pain cards).
Performance: `content-visibility:auto` nas seções abaixo da dobra; sem partículas/canvas — tudo CSS.

## 9. ORBI MOTION SYSTEM
- MOTION-01 Reveal on scroll: fade+translateY 28px, IntersectionObserver, stagger 90ms por índice — entrada padrão de qualquer bloco.
- MOTION-02 Counter/odometer: contagem 00→valor em 500ms via rAF, disparado 1x por IntersectionObserver — usado em steps.
- MOTION-03 Decrypt/glitch number: caracteres aleatórios travando progressivamente até o valor final (900ms) — só nos pain cards, dá tom "dado técnico revelado".
- MOTION-04 Holo ring hover: acelera de 5s→1.8s de rotação + glow radial seguindo cursor.
- MOTION-05 Service row reveal: linha de scan desliza (`scaleX`) + corpo do texto entra lateral, sequencial por linha.
- MOTION-06 Icon hover: `scale(1.1)` + sombra, 300ms `cubic-bezier(0.16,1,0.3,1)`.
- MOTION-07 Orbit satellite: rotação linear infinita 3.5–4.5s no logo e nos nós de serviço.
- MOTION-08 WA pulse: box-shadow pulsante contínuo, 2.6s.
Quando NÃO usar: nunca duas animações contínuas competindo na mesma viewport; sempre respeitar `prefers-reduced-motion`; nada de parallax/scroll-jacking (não usado hoje, evitar).

## 10. DESIGN PRINCIPLES
1. Vermelho é protagonista, preto é palco — nunca 50/50.
2. Um Anton gigante por seção como âncora visual, tudo mais é suporte.
3. Movimento tem função (revelar dado, indicar hover) — nunca decorativo puro.
4. Alternar formato de lista entre seções (linha vs grid vs texto) evita repetição.
5. Superfícies escuras variam de tom a cada seção — nunca dois blocos idênticos consecutivos.
6. Uma única cor "estranha" por contexto (verde WhatsApp) sinaliza função, não decoração.
7. Texto curto, direto, sem jargão de vendas — frases de dor/objeção reais.
8. CTA sempre pill branco/vermelho — nunca gradientes ou sombras coloridas nos botões.
9. Ícones line-art finos, nunca preenchidos ou 3D-fake.
10. Profundidade vem de glow/holo sutil, nunca de blur/glass genérico.
11. Responsivo por regra `!important` dedicada por seção, preservando a hierarquia, não só encolhendo.

## 11. ORBI DIFFERENTIATORS
Incomum para "site de agência": serviços em **lista horizontal com nó orbital**, não em cards de ícone repetidos; números que **decodificam** como HUD; anel cônico holográfico com glow por cursor nos cards de dor; uma palavra do H1 em **stroke-only** (contorno vazado) dentro do próprio wordmark, ligado ao nome "Órbita". O footer replica o logo em miniatura reforçando marca sem repetir CTA.
Partes ainda genéricas: a seção "Como funciona" é um 4-step grid convencional; os cards de portfólio são thumbnails de iframe padrão de agência. Ambos funcionam mas não têm assinatura visual própria ainda — candidatos a evolução futura.

## 12. VARIATION SYSTEM
- **HERO-01** (atual: video + radial vermelho) / **HERO-02** [NECESSITA DEFINIÇÃO: variação estática sem vídeo, ex. imagem produto] / **HERO-03** [variação com layout assimétrico texto+mockup].
- **CARD-01** (pain, holo ring) / **CARD-02** (mini ícone, atual) / **CARD-03** [NECESSITA DEFINIÇÃO: card de depoimento/prova social].
- **BG-01→04** (existentes) / **BG-05** [NECESSITA DEFINIÇÃO: variação para seção de preços/planos].
- **CTA-01→03** (existentes) cobrem os casos de uso atuais.
Regra geral: toda variação nova mantém paleta vermelho/preto + Anton/Orbitron/Archivo + motion vocabulary (reveal, orbit, holo) — varia composição/arranjo, não o DNA.

## 13. ORBI DESIGN TOKENS
```
--orbi-color-primary: #e60d00;
--orbi-color-primary-bright: #ff2408;
--orbi-color-accent: #ff2d2d;
--orbi-color-cta-text: #c50200;
--orbi-color-bg-1: #150000;
--orbi-color-bg-2: #0c0101;
--orbi-color-bg-3: #080101;
--orbi-color-surface: rgba(255,255,255,0.04);
--orbi-color-border: rgba(255,255,255,0.1);
--orbi-color-text: #ffffff;
--orbi-color-text-muted: rgba(255,255,255,0.62);
--orbi-color-whatsapp: #25D366;
--orbi-font-display: 'Anton', sans-serif;
--orbi-font-tech: 'Orbitron', sans-serif;
--orbi-font-body: 'Archivo', sans-serif;
--orbi-radius-sm: 12px;
--orbi-radius-md: 18px;
--orbi-radius-lg: 24px;
--orbi-radius-pill: 999px;
--orbi-space-xs: 8px;
--orbi-space-sm: 16px;
--orbi-space-md: 24px;
--orbi-space-lg: 56px;
--orbi-space-xl: 96px;
--orbi-container: 1240px;
--orbi-transition-fast: .25s ease;
--orbi-transition-normal: .5s cubic-bezier(0.16,1,0.3,1);
--orbi-ease: cubic-bezier(0.16,1,0.3,1);
```

## 14. NICHE ADAPTATION SYSTEM
Trocar sempre: **cor primária** (manter 1 cor saturada dominante sobre preto/quase-preto — nunca clarear o fundo todo) e **fonte display** se o nicho pedir tom menos "tech" (ex. odontologia/estética → serif condensada em vez de Anton, mantendo Orbitron ou trocando por sans geométrica para números). Densidade/animação: reduzir motion (sem holo/scan) para nichos conservadores (advocacia, B2B sério); manter para nichos jovens/tech/estética. CTA e linguagem: sempre 1 CTA pill dominante + 1 outline; copy de dor específica do nicho substitui as 3 estatísticas do "Por que a Orbi". Imagens: nichos com produto físico (restaurantes, imobiliárias) precisam de fotografia real full-bleed no hero em vez de vídeo abstrato — style ainda determinado pela paleta e motion system.

## 15. ORBI DESIGN ENGINE
Entrada → Saída:
1. Nicho + público → define paleta secundária (1 cor de destaque) e intensidade de motion.
2. Objetivo (lead/venda/institucional) → define se a seção de dor/estatísticas entra e qual CTA domina.
3. Personalidade da marca → define fonte display (Anton = agressivo/tech; alternativa condensada = premium/sóbrio).
4. Paleta → sempre fundo quase-preto + 1 cor saturada; nunca multi-cor sólida.
5. Imagens → hero video/foto real conforme nicho; ícones sempre line-art SVG, nunca PNG 3D genérico.
6. Componentes → puxar da biblioteca (seção 7) por categoria de conteúdo, nunca inventar novo padrão sem necessidade.
7. Backgrounds → BG-02 como base de toda seção de conteúdo, BG-03 opcional para profundidade, BG-01/04 reservados a hero e CTA de maior impacto.
8. Motion → reveal (MOTION-01) sempre; contador/decrypt (02/03) só em dados/prova; holo (04) só em card de destaque, no máximo 1 seção.
9. Conteúdo → frases curtas de dor real > estatística genérica > CTA de ação, repetido a cada 2 seções no máximo.
10. QA final → checar contraste texto sobre fundo escuro, `prefers-reduced-motion`, e que nenhuma seção repete o tom de fundo da anterior.

## 16. ANTI-GENERIC SYSTEM
Proibido por padrão: glassmorphism (blur+borda branca translúcida), gradiente arco-íris/roxo-azul (assinatura de IA genérica), ícones repetidos em cards idênticos sem variação de layout, cards com "sombra + borda esquerda colorida", mais de 2 cores de fundo por página, animação sem gatilho de propósito, imagens de banco óbvias (mãos apertando, "team high-five"). Priorizar: 1 cor de destaque forte, motion com significado (dado revelado, hover funcional), tipografia como elemento gráfico principal, alternância lista/grid, espaço negativo generoso entre seções.

## 17. INTERNAL REFERENCE SYSTEM
Referência rápida por composição:
```
ORBI: HERO-01 + BG-01 + MOTION-07
ORBI: CARD-01 + BG-03 + MOTION-04 + MOTION-03
ORBI: SERV-ROW-01 + MOTION-05 + MOTION-07
ORBI: CARD-02 + MOTION-06
ORBI: STEP-01 + MOTION-02
ORBI: WA-01 + MOTION-08
```
Basta citar a combinação (ex. "usa CARD-01 + BG-03") para eu aplicar a composição exata.

## CLAUDE EXECUTION RULES
- Reutilizar componente existente sempre que o conteúdo se encaixar numa categoria já mapeada (seção 7); só criar novo componente se nenhuma variação servir.
- Variar composição (ordem, proporção, densidade), nunca a paleta core ou a tipografia sem pedido explícito.
- Nunca introduzir glassmorphism, gradiente multi-cor ou ícone 3D-fake — vai contra a seção 16.
- Preservar identidade: fundo nunca preto puro (`#000`) nem cinza neutro — sempre preto-com-vermelho da escala BG.
- Motion: no máximo 1 efeito "assinatura" (holo/decrypt) por página; reveal padrão em tudo o mais.
- Responsividade: replicar o padrão de breakpoints existente (1080/900/860/560/520px) e usar `!important` só dentro de media queries dedicadas, como já é feito.
- Performance: preferir CSS/SVG a imagens pesadas; usar `content-visibility:auto` em seções longas; lazy-load qualquer iframe/vídeo.
- Evitar código desnecessário: reaproveitar os data-hv hover states e classes já existentes antes de criar novos seletores.
- Qualquer referência a "ORBI: X + Y" (seção 17) deve ser lida como especificação de composição, não texto literal para a página.

---

## RECOMMENDATIONS FOR ORBI v2.0
(Não implementado — apenas sugestões.)
- Criar HERO-02/03 sem depender de vídeo (fallback estático mais rápido em conexões fracas).
- Desenvolver um CARD-03 de prova social/depoimento reaproveitando o holo ring.
- Padronizar um componente de formulário leve (hoje 100% dependente de link externo do WhatsApp).
- Definir uma variação de "Como funciona" com identidade própria (hoje é o componente mais genérico do sistema).
- Formalizar um BG-05 para uma futura seção de planos/preços.
