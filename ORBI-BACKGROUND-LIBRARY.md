# ORBI BACKGROUND LIBRARY
Independente da paleta vermelha da Órbi. Cada tipo aceita parâmetros: `primaryColor, secondaryColor, opacity, speed, intensity, position`. Priorizar CSS/SVG; JS/canvas só quando necessário (partículas).

**BG-GRADIENT** — gradiente linear/radial estático ou com shift lento de posição (`speed` = duração do ciclo, 8–20s). Uso: base de qualquer seção de conteúdo.

**BG-MESH** — múltiplos radiais sobrepostos com cores e posições diferentes, gerando "manchas" suaves (mesh gradient). `intensity` controla blur/tamanho das manchas. Uso: heroes que precisam de cor sem imagem.

**BG-GRAIN** — textura de ruído sutil (SVG `feTurbulence` ou PNG tileável) sobreposta a uma cor sólida, `opacity` baixa (3–8%). Uso: dar textura/premium a fundos sólidos, evita "flat demais".

**BG-GRID** — linhas finas formando grid, `opacity` baixa, `position` fixa ou com leve parallax. Uso: nichos tech/dados/arquitetura.

**BG-GLOW** — 1–2 pontos de luz radial (`primaryColor`) sobre fundo escuro/neutro, pode seguir cursor (`position: cursor`). Uso: destacar 1 seção ou card específico.

**BG-RADIAL-SPOT** — 1 radial único, grande, posicionado a um canto (`position`), sem repetição — mais discreto que BG-GLOW. Uso: hero com fundo sólido que precisa de profundidade mínima.

**BG-SPOTLIGHT** — cone de luz vertical/diagonal sobre fundo escuro, `intensity` controla contraste — dramático. Uso: heroes de produto/luxo.

**BG-ORBITAL** — elementos (pontos, anéis) girando em torno de um centro, `speed` controla rotação — assinatura visual da Órbi, reutilizável com qualquer `primaryColor`. Uso: marcas tech/espaciais/inovação.

**BG-PARTICLES** — pontos leves flutuando (CSS `@keyframes` em elementos posicionados, não canvas pesado, salvo pedido explícito de densidade alta). Uso: motion-high, marcas experimentais.

**BG-LINES** — linhas diagonais ou curvas sutis (SVG), estáticas ou com leve deslocamento. Uso: seções de dado/comparação, dá direção de leitura.

**BG-IMAGE** — foto/ilustração full-bleed com overlay de cor (`primaryColor` em modo multiply/overlay) para manter contraste de texto. Uso: heroes image-dominant.

**BG-VIDEO** — vídeo em loop com overlay de cor, mesmo princípio do BG-IMAGE, com fallback estático para mobile/performance. Uso: heroes imersivos (padrão atual Órbi).

**BG-ABSTRACT-CSS** — formas geométricas simples (círculos, blobs via `clip-path`) sobrepostas com blend modes, sem gradiente arco-íris. Uso: substituto leve de ilustração customizada.

## Regra de combinação
Cada seção usa no máximo 2 camadas de background (ex.: BG-GRADIENT + BG-GRAIN, ou BG-IMAGE + BG-GLOW). Nunca acumular 3+ efeitos na mesma seção — vira ruído visual.
