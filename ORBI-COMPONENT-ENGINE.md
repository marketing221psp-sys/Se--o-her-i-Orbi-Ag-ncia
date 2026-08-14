# ORBI COMPONENT COMBINATION ENGINE
Como combinar LAYOUT + HERO + SECTION + BACKGROUND + MOTION sem gerar incompatibilidade visual.

## Sintaxe
```
LAYOUT-XX + HERO-XX + [SECTION-XX, SECTION-XX, ...] + BG-XX + MOTION-LEVEL
```
Exemplo: `LAYOUT-07 + HERO-08 + [P-02, B-03, A-01, CT-03] + BG-GRAIN + MOTION-LIGHT` = site minimal luxury, hero vazio, seções de 1 ideia por vez, textura sutil, motion mínimo.

## Regras de compatibilidade

**Densidade deve ser consistente.** LAYOUT-07 (Minimal Luxury) nunca combina com MOTION-HIGH ou seções tipo Grid/Mosaico (PF-03, S-02) — quebra a sensação de vazio. LAYOUT-11 (Modular) e LAYOUT-06 (Product Focus) pedem densidade média-alta — evitar HERO-08 (Minimal) neles.

**Motion deve casar com personalidade do layout.** LAYOUT-10 (Full Bleed) e LAYOUT-04 (Immersive Image) pedem motion de background/imagem (BG-VIDEO, zoom lento) mais do que motion de cursor. LAYOUT-12 (Experimental) é o único que aceita MOTION-HIGH com cursor-interaction sem soar deslocado.

**Hero e Layout devem compartilhar eixo de composição.** HERO-02/06 (Split/Asymmetric) combinam com LAYOUT-02/03 (Editorial Asymmetric/Split Hero) — mesma lógica de divisão de tela. HERO-01/08 (Centered/Minimal) combinam com LAYOUT-01/05/07 (Centered/Typography/Minimal Luxury). Não misturar um hero split com um layout centralizado nas seções seguintes — quebra o ritmo de alinhamento (Core 02).

**Background por camada, não por seção isolada.** Escolher 1 BG "de base" (usado em 70% das seções) + no máximo 1 BG "de destaque" (usado 1–2 vezes, ex. hero ou CTA final) — nunca uma paleta de 5 backgrounds diferentes no mesmo site.

**Seções vizinhas nunca repetem a mesma variação estrutural** (ex. não usar duas seções "Card Grid" em sequência) — forçar leitura da ORBI-SECTION-LIBRARY por variação, não por categoria isolada.

## Attention Hierarchy e Composition Break na combinação
Antes de combinar LAYOUT+HERO+SECTION, confirmar que FOCO 01/02/03 (ORBI-ART-DIRECTION-SYSTEM.md §8) estão atribuídos a elementos específicos da combinação — nenhum componente entra na combinação sem servir a um dos 3 focos. A seção marcada como Composition Break (§4) precisa estar na lista de SECTION-XX da combinação; se a lista só contém variações "Card Grid", a combinação é inválida e deve ser revisada antes de montar o layout.

## Section Composition Independence na combinação (V3)
Ao listar as SECTION-XX da combinação, anexar a cada uma seu vocabulário de composição (ORBI-ART-DIRECTION-SYSTEM.md §12) e sua Visual Intensity (ORBI-VISUAL-NARRATIVE-SYSTEM.md). A combinação é inválida se duas seções vizinhas repetirem vocabulário E intensidade simultaneamente — trocar a variação da seção antes de aprovar.

## Checklist antes de fechar uma combinação
1. Densidade do layout, hero e seções é coerente? (todos baixos, ou todos médios — sem picos)
2. O nível de motion escolhido está entre os aceitos para esse layout?
3. Existe no máximo 1 efeito-assinatura no site inteiro?
4. Nenhuma seção estrutural repete a variação da seção anterior?
5. O background de base aparece em toda seção de conteúdo (não some no meio)?
Se qualquer resposta for "não", revisar antes de aplicar.
