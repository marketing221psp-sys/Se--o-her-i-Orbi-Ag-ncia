# ORBI MOTION LIBRARY
Motion sempre com função. Classificado por nível de intensidade; escolher 1 nível dominante por site (ORBI-DESIGN-ENGINE decide o nível).

## MOTION-LIGHT (padrão institucional/B2B/premium)
- Entrance: fade + translateY 20–28px, stagger leve.
- Hover: mudança de cor/opacidade só, sem transform.
- Scroll: nenhum efeito além do reveal on-enter.
- Image: nenhum tratamento animado.
- Typography: nenhuma.
- Cursor: nenhum.
- Background: estático.
- Interaction: estados simples (:hover, :focus) sem timing customizado.
Uso: nichos conservadores (jurídico, saúde sério, corporate, luxury minimal).

## MOTION-MEDIUM (padrão geral, maioria dos sites)
- Entrance: fade+translate com stagger por índice (como no site atual da Órbi).
- Hover: scale 1.05–1.1 + shadow, ou underline animado.
- Scroll: contadores numéricos (odômetro), IntersectionObserver-driven.
- Image: leve zoom no hover (scale 1.03–1.08).
- Typography: nenhuma ou highlight de palavra ao entrar em viewport.
- Cursor: glow que segue o cursor em 1 elemento de destaque no máximo.
- Background: gradiente com movimento lento (8–15s de ciclo).
- Interaction: linha de "scan"/underline deslizante no hover de listas.
Uso: agências, serviços, e-commerce, tech, estética — a maioria dos casos.

## MOTION-HIGH (padrão para marcas ousadas/experimentais)
- Entrance: entradas em camadas com timing escalonado, elementos vindo de direções diferentes.
- Hover: transformações compostas (rotate+scale+shadow), morphing de forma.
- Scroll: scroll-driven animation (elemento muda com progresso do scroll), não só on-enter.
- Image: parallax real, distorção sutil, duotone que muda com hover.
- Typography: caracteres decodificando (efeito "glitch"/HUD, como os pain cards da Órbi), ou letras que se separam/juntam.
- Cursor: elementos que reagem à posição do cursor (magnetic buttons, glow, distorção).
- Background: partículas leves, ruído animado, formas orbitais.
- Interaction: microinterações compostas (múltiplos elementos reagem ao mesmo hover).
Uso: moda, arte, música, tech experimental, marcas jovens — nunca em nichos conservadores.

## Regra de aplicação
Motion nunca aparece "porque pode": cada efeito precisa responder a uma das funções — revelar hierarquia, indicar interatividade, comunicar dado, ou reforçar identidade (1 efeito-assinatura por site, do nível escolhido). Sempre com fallback `prefers-reduced-motion`.
