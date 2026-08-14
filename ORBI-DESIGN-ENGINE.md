# ORBI DESIGN DIRECTION ENGINE
Sistema de decisão: transforma um briefing em direção visual completa, sem referência externa.

## Pipeline (obrigatório, nesta ordem)
```
Briefing → CONCEPT → ART DIRECTION → VISUAL NARRATIVE → VISUAL STRATEGY → COMPOSITION → Layout → Components → Motion → Site
```
As etapas Concept/Art Direction/Visual Narrative/Composition são executadas pelo ORBI-ART-DIRECTION-SYSTEM.md + ORBI-VISUAL-NARRATIVE-SYSTEM.md e vêm SEMPRE antes de qualquer escolha de Layout/Hero/Componente abaixo. "Visual Strategy" = a síntese de 1 parágrafo que conecta Concept+Art Direction+Visual Narrative às escolhas de Layout/Tipografia/Cor que seguem; "Composition" = o Section Composition Map completo (Composition Break + arco narrativo + Visual Intensity + vocabulário de composição por seção, ver ORBI-ART-DIRECTION-SYSTEM.md §12–13 e ORBI-VISUAL-NARRATIVE-SYSTEM.md) decidido por escrito antes de montar a página — é o Designer's Decision Log (ORBI-ART-DIRECTION-SYSTEM.md §17).

## Entradas
NICHO · PÚBLICO · OBJETIVO · POSICIONAMENTO · PERSONALIDADE · NÍVEL DE SOFISTICAÇÃO · COR PRINCIPAL (se dada) · TIPO DE CONTEÚDO · TIPO DE IMAGEM · INTENSIDADE DE MOTION desejada.

## Como cada entrada decide a saída

**NICHO** → filtra Hero/Layout compatíveis (ORBI-LAYOUT-LIBRARY / ORBI-HERO-LIBRARY, coluna "nichos compatíveis") e o tom de Image Direction.

**PÚBLICO** (idade, gênero, classe, B2B/B2C) → decide densidade visual (mais jovem/B2C = mais motion e cor; B2B/executivo = mais espaço negativo e menos animação) e formalidade do copy.

**OBJETIVO** (lead / venda direta / institucional / awareness) → decide se entra seção de dor/estatística, quantos CTAs e onde repetem, se há preço visível.

**POSICIONAMENTO** (premium / acessível / técnico / humano) → decide TYPE-XX (ORBI-TYPOGRAPHY-SYSTEM) e paleta base (ORBI-COLOR-SYSTEM).

**PERSONALIDADE** (ex.: sofisticada, ousada, calorosa, técnica) → decide intensidade de motion (LIGHT/MEDIUM/HIGH) e tratamento de imagem (frio/quente, contraste alto/baixo).

**SOFISTICAÇÃO** → decide densidade de detalhes de UI (quanto menos genérico o público exige, mais detalhe de motion/composição justificado).

**COR PRINCIPAL** → se o cliente já tem uma, construir a paleta a partir dela (ORBI-COLOR-SYSTEM); se não, derivar da personalidade+nicho.

**TIPO DE CONTEÚDO** (muito texto / pouco texto / catálogo / storytelling) → decide LAYOUT-XX dominante.

**TIPO DE IMAGEM** disponível (foto real do cliente / stock / nenhuma) → decide se o hero é image-dominant ou typography-dominant.

**INTENSIDADE DE MOTION** → seleciona o nível da ORBI-MOTION-LIBRARY.

## Saída (sempre nesta ordem)
1. Direção visual (1 frase resumo, ex.: "editorial sofisticado, tons terrosos, tipografia serifada, motion mínimo")
2. Layout dominante (ORBI-LAYOUT-LIBRARY)
3. Tipografia (ORBI-TYPOGRAPHY-SYSTEM)
4. Paleta (ORBI-COLOR-SYSTEM)
5. Hero (ORBI-HERO-LIBRARY)
6. Fluxo de seções (ORBI-SECTION-LIBRARY, com variação por seção)
7. Backgrounds (ORBI-BACKGROUND-LIBRARY)
8. Motion (ORBI-MOTION-LIBRARY, nível)
9. Direção de imagem (ORBI-IMAGE-DIRECTION)
10. CTA (texto, quantidade, posição)
11. Densidade visual (baixa/média/alta)

## Regra de ouro
Nunca pular etapa. Nunca decidir cor antes de decidir personalidade/posicionamento. Nunca escolher hero antes de decidir layout dominante. Nunca escolher layout antes de escrever Concept + Art Direction + Composition Break + Attention Hierarchy. Nunca montar 2 seções vizinhas sem checar Section Composition Independence (ORBI-ART-DIRECTION-SYSTEM.md §12) e a variação de Visual Intensity (ORBI-VISUAL-NARRATIVE-SYSTEM.md).
