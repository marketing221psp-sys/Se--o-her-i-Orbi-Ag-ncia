# ORBI CORE
Princípios universais, independentes de cor, fonte, nicho, logo ou marca. Todo projeto do ORBI SITE ENGINE herda isto; a identidade visual da Órbi (vermelho/preto/Anton/Orbitron) é UMA aplicação possível deste core, não o core em si.

## 01 Visual Hierarchy
Um elemento dominante por seção (tipografia OU imagem, nunca os dois competindo). Escala tipográfica com salto grande entre display e corpo (mín. 3:1). Nunca dois elementos do mesmo peso visual disputando atenção na mesma dobra.

## 02 Composition
Toda seção resolve uma única ideia. Espaço negativo é elemento de design, não sobra. Assimetria controlada > simetria perfeita quando o conteúdo permite. Alinhamento consistente por seção (não trocar centralizado/esquerda sem motivo).

## 03 Typography
Tipografia é elemento gráfico de composição, não só veículo de leitura. Mínimo 2 famílias (display + corpo), no máximo 3 (+ acento/números). Hierarquia clara: display, corpo, label/eyebrow, números.

## 04 Spacing
Sistema de espaçamento em escala (não valores soltos): xs/sm/md/lg/xl. Respiro entre seções sempre maior que respiro interno de um bloco. Mobile reduz a escala, nunca elimina o ritmo.

## 05 Grid
Container com largura máxima definida por seção (editorial: 900–1100px; produto/portfólio: 1200–1400px). Grids colapsam com propósito (3→2→1), nunca só encolhem proporcionalmente. Alternar layout em lista/grid entre seções vizinhas.

## 06 Image Direction
Toda imagem tem enquadramento, luz e propósito definidos antes de ser escolhida (ver ORBI-IMAGE-DIRECTION.md) — nunca "imagem de X" genérica. Tratamento consistente (cor, contraste, crop) entre todas as imagens do mesmo site.

## 07 Interaction
Todo hover/estado tem motivo funcional (indicar ação, revelar informação). Estados (hover/active/focus) sempre definidos, nunca deixados ao default do navegador.

## 08 Motion
Motion comunica algo (dado revelado, hierarquia, transição) — nunca decorativo puro. Um efeito "assinatura" por página no máximo; o resto é entrance/hover discreto. Sempre com fallback para `prefers-reduced-motion`.

## 09 Depth
Profundidade construída por contraste de tom, escala e espaçamento — não por blur/glass genérico. Camadas (fundo/conteúdo/destaque) sempre claras visualmente, mesmo sem sombra.

## 10 Responsive Design
Mobile-first na leitura do conteúdo, não só no CSS: o que é 1ª prioridade no desktop é 1ª prioridade no mobile. Breakpoints definidos pelo conteúdo (onde ele quebra mal), não por dispositivos padrão.

## 11 Performance
CSS/SVG antes de imagem pesada ou canvas. Lazy-load de tudo abaixo da dobra. Sem frameworks/dependências desnecessárias — HTML/CSS/JS direto sempre que resolver.

## 12 Accessibility
Contraste mínimo AA em texto sobre fundo. Toda animação com alternativa estática. Áreas de toque ≥44px no mobile. Links/botões com estado de foco visível.

## 13 Anti-Generic Rules
Ver ORBI-ANTI-GENERIC.md para a checklist completa — regra-mãe: se o padrão aparece em qualquer template genérico de IA/no-code, buscar uma variação estrutural antes de aceitar.

## 14 Art Direction Precedence
Nenhum projeto escolhe Layout, Hero ou Componentes antes de definir CONCEPT + ART DIRECTION + COMPOSITION (ver ORBI-ART-DIRECTION-SYSTEM.md). Um site tecnicamente correto mas sem essa camada é considerado incompleto pelo Engine — "bonito e funcional" não é a barra de qualidade; "memorável, específico, intencional" é.
