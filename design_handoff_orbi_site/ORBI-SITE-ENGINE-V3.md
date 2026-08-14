# ORBI SITE ENGINE V3
Consolidação completa e atualizada (V3) de todos os arquivos ORBI-*.md, para uso em outros projetos.

---

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

---

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

---

# ORBI ART DIRECTION SYSTEM
Camada obrigatória entre o Briefing e o Layout. Sem ela, o Design Engine escolhe componentes corretos mas produz sites genéricos — este arquivo define REGRAS OPERACIONAIS, executáveis a partir de um briefing, não conceitos descritivos.

## Onde isto entra no pipeline
```
Briefing → CONCEPT → ART DIRECTION → VISUAL STRATEGY → COMPOSITION → Layout → Components → Motion → Site
```
Nenhuma etapa de Layout/Components pode ser executada antes de CONCEPT, ART DIRECTION e COMPOSITION estarem escritos. Se pularem, revisar antes de continuar.

## 1. CONCEPT — como escrever um
Regra: o concept é uma direção visual concreta de 2–5 palavras, NUNCA um slogan/benefício. Formato operacional: `[qualidade sensorial] + [referência de linguagem visual] + [contexto/domínio]`.
- Teste de validade: se o concept pode ser lido em voz alta como frase de marketing ("cuidar da sua mente"), está errado — reescrever como direção ("calma editorial arquitetônica").
- Fonte do concept: cruzar PERSONALIDADE + NICHO do briefing, nunca só um dos dois.
- O concept determina, antes de qualquer outra escolha: 1 princípio composicional dominante (ex.: "espaço negativo extremo", "tipografia como estrutura", "assimetria editorial").

## 2. ART DIRECTION — decisões obrigatórias (nesta ordem)
1. **Composição dominante** — escolher 1 de: centrada / assimétrica / editorial em grid / narrativa vertical / monumental (ver ORBI-LAYOUT-LIBRARY para o layout correspondente).
2. **Escala** — definir se o site usa contraste de escala extremo (tipografia/imagem gigante vs. detalhe mínimo) ou escala contida e uniforme. Escolher UM, nunca meio-termo indeciso.
3. **Proporção** — proporção dominante das imagens/blocos (quadrada / retrato alongado / paisagem cinemática) — repetir a MESMA proporção em pelo menos 70% das imagens do site (consistência de grid visual).
4. **Ritmo** — alternância entre denso e vazio ao longo do scroll: mapear seção a seção (ex.: denso/denso/vazio/denso/vazio) — nunca densidade uniforme do topo ao fim.
5. **Densidade** — baixa/média/alta, travada pelo CONCEPT (calma → baixa; catálogo → média-alta).
6. **Assimetria** — decidir se o site usa alinhamento quebrado propositalmente em pelo menos 1 seção-chave (ligado à regra de Composition Break, seção 4 abaixo).
7. **Espaço negativo** — definir onde ele é MÁXIMO (1 ponto do site, geralmente hero ou seção de conceito) — não distribuir igualmente, concentrar.
8. **Relação fotografia×tipografia** — decidir se a tipografia sobrepõe a imagem, convive ao lado, ou a imagem é cortada pela tipografia (recorte). Escolher 1 relação e repetir.
9. **Comportamento das imagens** — estático, leve zoom, crop assimétrico, tratamento de cor (ligado a ORBI-IMAGE-DIRECTION).
10. **Elemento assinatura** — ver seção 3.
11. **Ponto de maior impacto visual** — identificar QUAL seção carrega o pico visual do site (nunca o hero por padrão — pode ser a seção 2 ou 3, decidido pelo CONCEPT).

## 3. SIGNATURE ELEMENT — regras
Todo site tem exatamente 1 (não 0, não 3+). Deve ser: memorável, coerente com o nicho, visualmente simples, repetível sutilmente ao longo do site.
**Proibido como base da assinatura:** glow, blur, gradiente, glassmorphism, partículas, animação isolada — esses são efeitos, não assinatura.
**Categorias válidas (escolher 1, derivar do CONCEPT):** tratamento tipográfico específico (ex. 1 palavra sempre em itálico/peso diferente) · enquadramento fotográfico fixo (ex. toda foto em plano 3/4 com o mesmo espaço negativo) · elemento geométrico proprietário (ex. 1 forma que aparece em escala variável) · linha/traço estrutural (ex. 1 régua fina que atravessa seções) · recorte de imagem consistente · sistema de numeração/marcação editorial próprio · proporção incomum repetida (ex. todas as imagens em 4:5) · 1 interação específica e exclusiva (não um hover genérico).
**Operacional:** depois de escolher, escrever 1 frase de regra de uso (ex.: "toda seção com foto usa crop vertical 4:5 com o rosto/produto deslocado 30% para a direita, nunca centralizado") e aplicar essa regra a TODAS as seções relevantes.

## 4. COMPOSITION BREAK — regra obrigatória
Pelo menos 1 seção "importante" (não a primeira nem a última) deve romper a estrutura convencional de card/grid. Opções operacionais: imagem monumental full-bleed sem card · tipografia oversized carregando o conteúdo sozinha · assimetria (bloco deslocado do grid) · sobreposição controlada (imagem+texto em camadas) · sequência horizontal (scroll ou lista, não grid) · composição vertical única · espaço negativo extremo (1 frase, resto vazio).
Checar contra ORBI-SECTION-LIBRARY: a seção escolhida para o break NUNCA pode ser da família "Card Grid" (S-02, B-01 em grade, PF-01) — escolher a variação B-02/A-01/PF-02/PF-03/CT-03 ou uma composição fora da biblioteca, desenhada especificamente para este site.

## 5. TYPOGRAPHY AS ARCHITECTURE
Em pelo menos 1 seção, avaliar a tipografia como estrutura, não conteúdo: ela pode substituir uma imagem (uma palavra gigante É o elemento visual da seção), marcar ritmo (números/labels como elementos gráficos recorrentes), ou criar contraste de escala com função (título gigante vs. legenda minúscula lado a lado, não por decoração). Regra: se a escala tipográfica de uma seção pode ser reduzida para "tamanho normal" sem perda de significado, ela não está funcionando como arquitetura — revisar.

## 6. IMAGE AS COMPOSITION
Antes de aprovar qualquer imagem, preencher (ver ORBI-IMAGE-DIRECTION para o vocabulário completo): enquadramento, distância de câmera, direção do olhar, espaço negativo reservado, iluminação, relação com o texto (sobrepõe/convive/recorta), posição na composição, proporção, comportamento em mobile. Nenhuma imagem entra no site como "placeholder de foto" — toda imagem tem essas 8 variáveis decididas ANTES de ser posicionada.

## 7. VISUAL TENSION
Escolher pelo menos 1 par de tensão intencional (nunca mais de 2 — vira caos): grande×pequeno · cheio×vazio · serif×sans · imagem monumental×texto pequeno · alinhamento rígido×elemento deslocado · bloco denso×espaço negativo · escala extrema×detalhe mínimo. Escrever onde essa tensão aparece no site (1 seção específica) — tensão sem localização não foi decidida, foi acidente.

## 8. ATTENTION HIERARCHY
Definir antes de montar a página:
- **FOCO 01** — elemento que captura atenção primeiro (geralmente hero, mas nem sempre — pode ser o signature element).
- **FOCO 02** — elemento que conduz a leitura (a seção de composition break, ou a prova/estatística).
- **FOCO 03** — elemento que converte (CTA).
Regra: cada seção do site declara qual FOCO ela serve; se uma seção não serve nenhum dos 3, cortar ou fundir com outra.

## 9. ANTI-TEMPLATE CHECK (rodar antes de entregar)
1. "Se eu remover logo, nome da empresa e textos, o layout ainda parece pertencer a um projeto específico?" → se NÃO, revisar composição.
2. "Este layout poderia ser vendido como template para 50 empresas diferentes?" → se SIM, revisar.
3. "Existe uma decisão visual que não seria encontrada automaticamente em um template comum?" → se NÃO, revisar.
Rodar isso ANTES da checklist geral do ORBI-ANTI-GENERIC.md (que cobre sinais de execução; este cobre direção).

## 10. DESIGN QUALITY BAR
Correto/bonito/funcional/profissional = NÃO É SUFICIENTE. A barra é: memorável, específico, intencional, art-directed — cada decisão de composição precisa ser rastreável a uma linha do CONCEPT ou do ART DIRECTION, nunca "porque ficou bonito".

## 11. Regra anti-solução-fácil
Falta de originalidade NUNCA se resolve adicionando mais animação, mais cards, mais efeito, mais gradiente, mais sombra, mais elemento. Originalidade vem de: composição, direção de imagem, tipografia, proporção, ritmo, espaço negativo, assimetria, conceito, narrativa visual — se a revisão pós-Anti-Template-Check aponta genericidade, a correção é SEMPRE nessas 9 variáveis, nunca em motion/decoração.

## 12. SECTION COMPOSITION INDEPENDENCE (V3 — obrigatório)
Cada seção importante tem composição própria. Duas seções CONSECUTIVAS não podem compartilhar simultaneamente: mesma largura de conteúdo, mesmo alinhamento, mesma proporção texto/imagem, mesma estrutura, mesma densidade, mesmo ritmo visual. Se 2+ desses 6 atributos repetem entre seções vizinhas, é o sintoma de "miolo intercambiável" — trocar o vocabulário de composição da seção (ver lista de vocabulários abaixo), não só o conteúdo.
**Vocabulário de composição a alternar deliberadamente ao longo do site:** editorial · monumental · assimétrico · tipográfico · narrativo · visual (imagem pura) · lista · espaço negativo extremo · composição horizontal · composição vertical. Nenhum site usa o mesmo vocabulário em 2 seções consecutivas.

## 13. CONTENT → COMPOSITION (V3 — obrigatório)
Nunca escolher um componente "bonito" e encaixar o conteúdo dentro. Para cada seção, perguntar primeiro: **"o que este conteúdo precisa visualmente?"** — e só então escolher o vocabulário de composição (§12) e a variação em ORBI-SECTION-LIBRARY.
Guia de tradução conteúdo→composição:
- Lista de serviços → lista editorial (linha, não card em grid).
- Apresentação profissional/pessoa → retrato monumental + texto curto (não bio em card).
- Processo/etapas → sequência vertical, timeline ou narrativa visual (não grid de 4 ícones por padrão).
- FAQ → editorial expansível (texto corrido com destaques) — accordion dentro de card só se o volume de perguntas exigir.
- Declaração emocional/manifesto → espaço negativo extremo, 1 frase, nada mais.

## 14. MIDDLE-SCROLL TEST (V3 — validação obrigatória)
Ignorar hero e footer. Olhar SÓ o miolo do site. Perguntar: "este miolo ainda parece ter direção de arte específica?" Se NÃO → reprojetar pelo menos 2 seções do meio (trocar vocabulário de composição §12 e/ou Visual Intensity, ver ORBI-VISUAL-NARRATIVE-SYSTEM.md). Esta é a validação que a V2 não tinha — hero e composition break podem estar ótimos e o site ainda falhar aqui.

## 15. TEMPLATE REMOVAL TEST (V3 — validação obrigatória)
Remover mentalmente logo, nome, textos E cores — olhar só formas/composição. Perguntar: "isso poderia pertencer a qualquer empresa?" Se SIM → revisar. Mais estrito que o Anti-Template Check (§9, que ainda permite julgar com texto) — este remove cor também, testando a composição pura.

## 16. IMAGE / TYPOGRAPHY RELATIONSHIP (V3 — obrigatório avaliar 3 opções)
Toda fotografia importante avalia 3 relações antes de escolher (nunca ir direto para a opção A por padrão):
A) texto ao lado da imagem · B) texto sobreposto à imagem · C) texto separado, com a imagem em escala monumental isolada.
Escolher a que cria mais hierarquia/personalidade para aquele conteúdo específico — justificar a escolha por escrito no Decision Log (§17).

## 17. DESIGNER'S DECISION LOG (V3 — obrigatório, interno)
Antes de gerar qualquer código, produzir internamente (não precisa mostrar ao usuário, salvo pedido): CONCEPT · ART DIRECTION · VISUAL NARRATIVE (arco + VI por seção) · SIGNATURE · SECTION COMPOSITION MAP (vocabulário §12 + momento do arco + VI por seção) · IMAGE DIRECTION · TYPOGRAPHIC STRATEGY · MOTION STRATEGY · ATTENTION HIERARCHY. O código só é escrito depois que esse log existe por completo.

## 18. NO UNIFORM SCROLL (V3 — proibição)
Proibido todas as seções compartilharem mesmo padding, mesmo max-width, mesmo alinhamento, mesma proporção e mesma densidade. Cada seção define esses 5 atributos a partir do seu vocabulário de composição (§12) e da sua Visual Intensity (ORBI-VISUAL-NARRATIVE-SYSTEM.md) — nunca de um valor "padrão do site".

---

# ORBI VISUAL NARRATIVE SYSTEM
O site não é uma lista de seções bonitas — é uma progressão de intensidade visual com arco narrativo. Este arquivo é usado DEPOIS do Concept/Art Direction (ORBI-ART-DIRECTION-SYSTEM.md) e ANTES de montar o Section Composition Map (ORBI-SECTION-LIBRARY.md).

## Arco obrigatório
```
INTRODUÇÃO → DESENVOLVIMENTO → CONTRASTE → CLÍMAX → RESOLUÇÃO → CONVERSÃO
```
Cada seção do site é mapeada para 1 destes 6 momentos — nunca duas seções consecutivas no mesmo momento do arco.

## Visual Intensity — escala obrigatória
Toda seção recebe uma nota de 1 a 5 (Visual Intensity 01–05), combinando densidade + escala + contraste + movimento:
- **VI-01** — quase vazia, 1 frase/elemento, silêncio visual.
- **VI-02** — leve, texto curto + 1 elemento de apoio, respiro generoso.
- **VI-03** — média, composição de 2 elementos com hierarquia clara.
- **VI-04** — alta, imagem monumental ou tipografia grande dominando.
- **VI-05** — pico do site, o momento de maior impacto (CLÍMAX) — usar no máximo 1x.

## Regra de variação (obrigatória)
A sequência de Visual Intensity do site NUNCA pode ser monotônica (ex.: 3,3,3,3,3) nem so crescente/decrescente linear. Precisa ter pelo menos 1 queda depois de um pico (ex.: 2,3,2,5,2,3 — pico no meio, respiro depois) — é o que cria a sensação de "narrativa", não de lista.

## Mapeamento arco × intensidade (referência, não fórmula rígida)
- INTRODUÇÃO → VI-01 ou VI-02 (hero contido é aceitável aqui).
- DESENVOLVIMENTO → VI-02 ou VI-03 (apresenta conteúdo, ainda construindo).
- CONTRASTE → mudança deliberada de VI em relação à seção anterior (se anterior era baixa, esta sobe; se era alta, esta cai) — é aqui que mora a regra "Section Composition Independence" (ORBI-ART-DIRECTION-SYSTEM.md §12).
- CLÍMAX → VI-04 ou VI-05, é o Composition Break e/ou o Signature System em seu ponto mais forte — geralmente NÃO é o hero.
- RESOLUÇÃO → queda proposital para VI-01/02, depois do pico — dá ao leitor um respiro antes de converter.
- CONVERSÃO → VI-02 ou VI-03, claro e direto, nunca compete em intensidade com o clímax.

## Operacional
Ao montar o Section Composition Map, escrever ao lado de cada seção: `[MOMENTO DO ARCO] · VI-0X`. Se duas seções vizinhas tiverem o mesmo momento OU a mesma VI, revisar — é o sintoma exato que causou o "miolo intercambiável" na auditoria.

---

# ORBI LAYOUT LIBRARY
12 padrões de composição estrutural. Cada site escolhe 1 layout dominante + pode misturar seções de outros.

Pré-requisito: o layout dominante só é escolhido DEPOIS do CONCEPT e da ART DIRECTION (ORBI-ART-DIRECTION-SYSTEM.md) — a composição dominante decidida ali (centrada/assimétrica/editorial/narrativa/monumental) filtra qual LAYOUT-XX é compatível, não o contrário. Todo layout escolhido precisa acomodar 1 seção de Composition Break (seção 4 do Art Direction System) fora do padrão card/grid.
Regra V3: o LAYOUT-XX escolhido é a moldura geral do site, mas cada seção dentro dele ainda escolhe seu próprio vocabulário de composição (ORBI-ART-DIRECTION-SYSTEM.md §12) — um LAYOUT-02 (Editorial Asymmetric), por exemplo, não obriga TODA seção a ser "texto esquerda + imagem direita"; a independência de composição por seção vale mesmo dentro de um layout coerente.

**LAYOUT-01 — Editorial Centered.** Tudo centralizado, coluna única, título grande + texto curto abaixo. Sensação: manifesto, clareza. Hero: tipografia centrada. Seções: bloco único por vez. Densidade: baixa. Mobile: mantém centralização, reduz escala. Nichos: consultoria, marca pessoal, serviços premium.

**LAYOUT-02 — Editorial Asymmetric.** Título à esquerda ocupando 60%, imagem/dado à direita 40%, alinhamento quebrado propositalmente entre seções. Sensação: sofisticação, autoria. Hero: split assimétrico. Seções: texto+imagem alternando lado. Densidade: média. Mobile: empilha texto sobre imagem. Nichos: arquitetura, design, moda.

**LAYOUT-03 — Split Hero.** Metade tipografia/CTA, metade imagem full-height, repetido como padrão de seção. Sensação: direto, comercial. Hero: 50/50. Seções: alternam lado a cada bloco. Densidade: média-alta. Mobile: imagem topo, texto abaixo. Nichos: imobiliária, tecnologia, e-commerce.

**LAYOUT-04 — Immersive Image.** Imagem/vídeo full-bleed dominando >70% da viewport em quase toda seção, texto sobreposto mínimo. Sensação: cinematográfico. Hero: full-bleed. Seções: galeria de blocos imersivos. Densidade: baixa (poucas palavras). Mobile: crop vertical da imagem. Nichos: hotelaria, gastronomia, moda, estética.

**LAYOUT-05 — Typography Dominant.** Sem imagens (ou quase), tipografia gigante carrega todo peso visual, cor de fundo sólida como "imagem". Sensação: ousado, confiante. Hero: wordmark gigante. Seções: blocos de texto com escala variável. Densidade: baixa. Mobile: escala reduz mas mantém domínio do texto. Nichos: agências, tech, eventos, cultura (é o layout mais próximo do site atual da Órbi).

**LAYOUT-06 — Product Focus.** Grid de produto/serviço centralizado, cards grandes com imagem dominante e pouco texto, navegação por categoria. Sensação: catálogo premium. Hero: produto hero único. Seções: grid de produtos, comparação, especificação. Densidade: média-alta. Mobile: carrossel/scroll horizontal. Nichos: e-commerce, joalheria, marcas de produto.

**LAYOUT-07 — Minimal Luxury.** Muitíssimo espaço negativo, poucas palavras por seção, imagens pequenas e precisas, paleta neutra. Sensação: exclusividade. Hero: quase vazio, 1 frase + 1 imagem pequena. Seções: 1 ideia por scroll inteiro. Densidade: muito baixa. Mobile: mantém vazio, nunca comprime. Nichos: joalheria, alta gastronomia, hotelaria 5 estrelas, clínicas premium.

**LAYOUT-08 — Grid Editorial.** Grid modular tipo revista (colunas desiguais, blocos de tamanhos variados), mistura texto/imagem/dado na mesma grade. Sensação: dinâmico, editorial moderno. Hero: bloco de grid com destaque. Seções: mosaico. Densidade: média-alta. Mobile: grid colapsa em pilha ordenada por importância. Nichos: portfólio criativo, agências, educação.

**LAYOUT-09 — Narrative Scroll.** Site conta uma história linear, cada seção avança um capítulo, transições marcam progresso (barra, número, contador). Sensação: jornada, storytelling. Hero: abertura de capítulo 0. Seções: sequenciais, ritmo texto curto+imagem+dado. Densidade: baixa-média por seção, alta no total. Mobile: mesma sequência, ritmo mais compacto. Nichos: ONGs, startups, marcas com propósito, saúde.

**LAYOUT-10 — Full Bleed.** Cada seção é um bloco de cor/imagem que ocupa 100vw x 100vh, transição abrupta entre seções (sem gradiente de transição). Sensação: impacto, confiança. Hero: bloco de abertura. Seções: blocos de cor alternada. Densidade: baixa. Mobile: cada bloco vira uma tela cheia rolável. Nichos: tech, eventos, entretenimento (é o padrão mais próximo do site atual da Órbi na alternância de fundo).

**LAYOUT-11 — Modular.** Sistema de blocos reutilizáveis de tamanho padronizado (cards, tiles) organizados em grid flexível, fácil de escalar para catálogos grandes. Sensação: organizado, escalável. Hero: bloco modular com CTA. Seções: tiles configuráveis. Densidade: média. Mobile: tiles em coluna única mantendo proporção. Nichos: SaaS, educação, marketplace, serviços B2B com múltiplas ofertas.

**LAYOUT-12 — Experimental.** Quebra grid convencional: elementos sobrepostos, rotação sutil, alinhamento propositalmente "errado", tipografia como forma gráfica. Sensação: autoral, ousado, memorável. Hero: composição não-retangular. Seções: cada uma com regra própria (dentro do Core). Densidade: variável. Mobile: recomposição manual por seção (não é grid que colapsa automaticamente). Nichos: moda de vanguarda, arte, música, marcas jovens.

---

# ORBI HERO LIBRARY
10 famílias de hero. Escolha 1 por site, conforme ORBI-DESIGN-ENGINE.

Pré-requisito: o hero é o candidato mais forte a carregar o SIGNATURE ELEMENT do site (ORBI-ART-DIRECTION-SYSTEM.md §3) — mas não é automático: verificar primeiro se o "ponto de maior impacto visual" (§2.11) é o hero ou outra seção. Se for outra seção, o hero pode ser deliberadamente mais contido (ex. HERO-08 Minimal) para não competir com o pico visual real do site.

**HERO-01 Centered Typography.** Estrutura: eyebrow + H1 centralizado + subtítulo curto + 1–2 CTA + prova social opcional. Hierarquia: tipografia > tudo. CTA: pill dominante + outline secundário. Imagem: nenhuma ou textura de fundo sutil. Motion: reveal + 1 detalhe (ex. cursor/glow). Mobile: reduz escala, mantém centralização. (Base do hero atual da Órbi.)

**HERO-02 Split.** Estrutura: 50/50 texto (esquerda) / imagem ou vídeo (direita). Hierarquia: equilibrada. CTA: abaixo do texto, alinhado à esquerda. Imagem: still de produto/pessoa, alto contraste. Motion: entrada com leve parallax ou fade. Mobile: imagem topo 40% viewport, texto abaixo.

**HERO-03 Image Dominant.** Estrutura: imagem/vídeo full-bleed, texto sobreposto pequeno em canto. Hierarquia: imagem > texto. CTA: single, discreto. Imagem: editorial, alta produção. Motion: zoom lento na imagem, texto fade-in. Mobile: crop vertical mantendo foco da imagem.

**HERO-04 Editorial.** Estrutura: título grande alinhado a um lado + parágrafo editorial ao lado + linha fina de metadata (data, categoria, autor). Hierarquia: texto como matéria de revista. CTA: link sublinhado, não botão. Imagem: opcional, pequena, como legenda visual. Motion: reveal por linha de texto. Mobile: empilha na ordem título→parágrafo→metadata.

**HERO-05 Product.** Estrutura: produto centralizado grande (foto ou 3D), specs/preço ao lado, CTA de compra. Hierarquia: produto > preço > CTA. Imagem: still de produto isolado, sombra real. Motion: rotação/leve flutuação do produto. Mobile: produto topo, specs em accordion.

**HERO-06 Asymmetric.** Estrutura: título ocupa 2/3 em diagonal visual, elemento gráfico/dado no canto oposto. Hierarquia: tensão entre dois pontos focais. CTA: próximo ao título. Imagem: elemento gráfico abstrato ou número grande. Motion: entrada com deslocamento leve dos dois blocos em direções opostas. Mobile: resolve a assimetria em pilha vertical simples.

**HERO-07 Fullscreen Immersive.** Estrutura: vídeo/imagem 100vh com overlay de cor da marca, texto mínimo centrado ou no rodapé do hero. Hierarquia: atmosfera > mensagem. CTA: 1, minimalista. Imagem: vídeo em loop ou still cinematográfico. Motion: overlay sutil animado (gradiente lento). Mobile: vídeo trocado por still leve (performance). (Base do hero atual da Órbi.)

**HERO-08 Minimal.** Estrutura: 1 frase curta + 1 CTA, nada mais, muito espaço negativo. Hierarquia: quase vazio de propósito. CTA: único, discreto. Imagem: nenhuma. Motion: nenhum ou fade único. Mobile: idêntico, apenas reduz escala.

**HERO-09 Interactive.** Estrutura: elemento que responde ao cursor/scroll (partícula, distorção de texto, objeto 3D) como protagonista, texto de apoio pequeno. Hierarquia: interação > texto. CTA: aparece após interação inicial ou fixo discreto. Imagem: gerada/3D. Motion: alto, cursor-driven. Mobile: troca interação por animação automática (sem hover).

**HERO-10 Experimental.** Estrutura: elementos sobrepostos/rotacionados, tipografia recortada por imagem, sem grid convencional. Hierarquia: definida por camadas z, não por posição. CTA: integrado à composição, não isolado. Imagem: tratada graficamente (duotone, recorte). Motion: entrada em camadas com timing escalonado. Mobile: recomposição manual, não colapso automático.

---

# ORBI SECTION LIBRARY
Variações estruturais por categoria de conteúdo — objetivo: nenhum site repete "hero → 3 cards → 3 cards → depoimentos → CTA". Escolher variações DIFERENTES entre seções vizinhas do mesmo site.

Regra adicional (ORBI-ART-DIRECTION-SYSTEM.md §4): pelo menos 1 seção do fluxo — nunca a primeira nem a última — deve ser um Composition Break, ou seja, NÃO pode vir das variações "Card Grid" (S-02, B-01 em grade, PF-01, C-01). Marcar explicitamente no fluxo escolhido qual seção cumpre esse papel antes de montar a página.

Regra V3 (Content → Composition, §13): a escolha de variação para CADA seção nasce da pergunta "o que este conteúdo precisa visualmente?", nunca da variação mais comum. Guia rápido: serviços → prefira S-01 (lista) a S-02 (grid) por padrão; apresentação de pessoa → prefira A-02 tratado como retrato monumental a um card de bio; processo → prefira PR-02/PR-03 a PR-01 quando a marca não for tech; FAQ → prefira F-02 (editorial) a F-01 (accordion em card) quando o volume for baixo.

Regra V3 (Section Composition Independence, §12): ao montar o fluxo completo, anotar ao lado de cada seção o vocabulário de composição (editorial/monumental/assimétrico/tipográfico/narrativo/visual/lista/espaço-negativo/horizontal/vertical) + a Visual Intensity (ORBI-VISUAL-NARRATIVE-SYSTEM.md) — nenhuma seção pode repetir AMBOS os valores da seção imediatamente anterior.

## Problem / Pain
- **P-01 Stat Grid** — 3 estatísticas grandes em cards com dado central + 1 frase (padrão atual Órbi).
- **P-02 Single Statement** — 1 frase de dor gigante, sem cards, sozinha na tela.
- **P-03 Before/After List** — lista de 2 colunas "sem vs com [marca]", sem números.

## Benefits
- **B-01 Icon Row** — lista horizontal com ícone+título+descrição, sem bordas de card (padrão "serviços" atual Órbi).
- **B-02 Alternating Split** — cada benefício alterna texto/imagem, um por scroll.
- **B-03 Numbered List** — lista numerada tipográfica grande, sem ícone, só número+texto.

## Services
- **S-01 Horizontal List** — linha completa por serviço, nó/indicador à esquerda, seta à direita (padrão atual Órbi).
- **S-02 Card Grid** — grid clássico de cards com imagem de topo, para catálogos maiores (5+ serviços).
- **S-03 Tab/Accordion** — categorias em abas, conteúdo expande — bom quando há muito texto por serviço.

## About
- **A-01 Manifesto** — bloco de texto único, editorial, sem foto de equipe.
- **A-02 Split Story+Photo** — texto de um lado, foto real da equipe/fundador do outro.
- **A-03 Timeline** — linha do tempo horizontal ou vertical de marcos.

## Process
- **PR-01 Step Grid** — grid de N passos numerados, contador animado (padrão atual Órbi).
- **PR-02 Vertical Timeline** — passos em coluna única com linha conectora vertical, mais editorial.
- **PR-03 Diagram** — passos ligados por um diagrama/fluxo visual (setas, não grid).

## Portfolio / Gallery
- **PF-01 Grid Preview** — grid de cards com preview real (thumbnail/iframe), padrão atual Órbi.
- **PF-02 Full Bleed Slider** — 1 case por tela, imagem grande, navegação por seta/scroll.
- **PF-03 Masonry Editorial** — grid irregular tipo mosaico, tamanhos variados por relevância do case.

## Testimonials
- **T-01 Single Featured** — 1 depoimento grande em destaque por vez (carrossel ou fixo).
- **T-02 Grid Cards** — grid de citações curtas em cards, sem foto.
- **T-03 Video/Photo Wall** — mosaico de fotos/vídeos de clientes reais com citação curta sobreposta.

## Statistics
- **ST-01 Counter Row** — números grandes lado a lado com contador animado.
- **ST-02 Comparison Bars** — barras/gráfico simples comparando antes/depois ou mercado.
- **ST-03 Single Hero Stat** — 1 número gigante ocupando quase a seção toda, resto é legenda.

## Comparison
- **C-01 Table** — tabela clássica de comparação de planos/opções.
- **C-02 Side Cards** — 2–3 cards lado a lado sem tabela, com checklist.
- **C-03 Narrative Comparison** — texto corrido "diferente de X, nós Y", sem grid.

## Pricing
- **PC-01 Card Tiers** — cards de planos lado a lado, 1 destacado.
- **PC-02 Single Price Anchor** — 1 preço/pacote único em destaque, sem grid de opções.
- **PC-03 Custom Quote** — sem preço fixo, CTA para orçamento com bullets de o que está incluso.

## FAQ
- **F-01 Accordion** — lista clássica expansível.
- **F-02 Two Column List** — perguntas e respostas visíveis lado a lado, sem interação.
- **F-03 Chat-style** — pergunta/resposta em bolhas, estilo conversa.

## CTA
- **CT-01 Full Bleed Band** — faixa de cor de destaque full-width, título + botão.
- **CT-02 Split with Image** — CTA ao lado de imagem/produto.
- **CT-03 Minimal Inline** — CTA como continuação de texto, sem bloco visual separado.

## Contact
- **CO-01 Direct Link** — CTA direto para WhatsApp/e-mail, sem formulário (padrão atual Órbi).
- **CO-02 Form** — formulário completo com campos qualificadores.
- **CO-03 Map + Info** — endereço/mapa + horários + contato, para negócios físicos.

---

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

---

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

---

# ORBI TYPOGRAPHY DIRECTION SYSTEM
Anton/Orbitron/Archivo são A ESCOLHA DA ÓRBI, não obrigatória para clientes. Cada família abaixo define display/body/accent/numbers/labels por personalidade.

**TYPE-01 Editorial** — Display: serifada expressiva (ex. Fraunces, Playfair). Body: sans humanista (ex. Inter, Source Sans). Accent: itálico da serifada. Numbers: sans com tabular figures. Labels: sans uppercase tracked. Uso: revista, marca pessoal, cultura.

**TYPE-02 Luxury** — Display: serifada fina de alto contraste (ex. Canela, Times-like refinada). Body: sans leve, tracking levemente aberto. Accent: versalete. Numbers: serifada fina. Labels: uppercase tracking extremo, peso leve. Uso: joalheria, hotelaria 5 estrelas, moda premium.

**TYPE-03 Technology** — Display: geométrica condensada/tech (ex. Orbitron-like, Space Grotesk). Body: grotesca neutra (ex. Inter, Archivo). Accent: monoespaçada para dados/código. Numbers: display tech com tabular figures. Labels: uppercase tracked, peso médio-alto. Uso: SaaS, IA, infraestrutura (é a base do sistema atual da Órbi).

**TYPE-04 Brutalist** — Display: grotesca pesada, condensada, sem suavização (ex. Anton, Archivo Black). Body: mesma família em peso regular. Accent: mesma família em outline/stroke. Numbers: display, sem separação de peso. Labels: uppercase, peso igual ao body. Uso: agências ousadas, streetwear, música (é a base tipográfica atual da Órbi).

**TYPE-05 Corporate** — Display: sans grotesca séria (ex. Söhne, Helvetica Now). Body: mesma família, peso regular. Accent: peso bold da mesma família (sem 3ª fonte). Numbers: tabular, mesma família. Labels: uppercase discreto. Uso: B2B, financeiro, jurídico.

**TYPE-06 Medical/Clean** — Display: sans humanista arredondada mas contida (ex. Söhne, General Sans). Body: mesma família ou par mais leve. Accent: peso médio, nunca condensado agressivo. Numbers: sans clean com boa legibilidade. Labels: uppercase leve, cor suave. Uso: clínicas, saúde, bem-estar.

**TYPE-07 Creative/Portfolio** — Display: expressiva/variável (peso ou largura variável, ex. fontes display autorais). Body: grotesca neutra para não competir. Accent: display em tamanho reduzido como assinatura. Numbers: grotesca. Labels: minúsculas, sem tracking pesado (quebra convenção uppercase de propósito). Uso: portfólio criativo, design, arte.

**TYPE-08 Fashion** — Display: serifada de revista de moda ou sans ultra-condensada (contraste extremo de peso). Body: sans fina, bastante espaço entre linhas. Accent: display em itálico ou peso ultra-fino. Numbers: display. Labels: uppercase muito tracked, peso fino. Uso: moda, beleza, editorial de estilo.

**TYPE-09 Restaurant/Hospitality** — Display: serifada com caráter (ex. algo com toque artesanal, não script cheesy) ou grotesca quente. Body: sans humanista confortável para menus/textos longos. Accent: serifada em itálico para citações/pratos. Numbers: sans clean para preços. Labels: uppercase discreto ou minúsculo elegante. Uso: gastronomia, hotelaria boutique.

**TYPE-10 Architecture/Studio** — Display: grotesca condensada precisa (ex. Neue Haas, PP Neue Montreal). Body: mesma família, tracking neutro. Accent: peso light da mesma família em escala grande (não itálico). Numbers: grotesca com tabular figures. Labels: uppercase preciso, tracking médio. Uso: arquitetura, design de interiores, estúdios.

**TYPE-11 Minimalist** — Display: sans neutra em peso regular (nunca black/bold gritando) — a hierarquia vem do tamanho, não do peso. Body: mesma família, peso regular ou light. Accent: itálico ou peso levemente diferente da mesma família (nunca 3ª fonte). Numbers: mesma família. Labels: minúsculo, tracking sutil. Uso: minimal luxury, clínicas premium, marcas silenciosas.

## Regra de escolha
Ligar TYPE-XX ao POSICIONAMENTO do briefing (ORBI-DESIGN-ENGINE), nunca à preferência estética isolada. Máximo 3 famílias tipográficas ativas em qualquer site (display, body, +1 opcional).

---

# ORBI COLOR DIRECTION SYSTEM
Vermelho/preto é a paleta da Órbi, não a regra. Toda paleta nova segue esta estrutura de papéis.

## Papéis obrigatórios
- **dominant** — 1 cor saturada/marcante, usada com moderação (CTA, acentos, ícones-chave).
- **background** — 1–2 tons de base (nunca preto/branco puro — sempre com leve matiz da dominant ou neutro quente/frio).
- **surface** — variação sutil do background para cards/blocos (5–10% de diferença de luminosidade).
- **text** — cor de alto contraste sobre o background (não necessariamente preto/branco puro).
- **muted** — text em opacidade/luminosidade reduzida para hierarquia secundária.
- **accent** — 2ª cor, usada ainda mais raramente que a dominant (estados, categorias, 1 detalhe).
- **border** — neutro de baixo contraste, só visível de perto.

## Regras de contraste
Texto principal sobre background: mínimo AA (4.5:1). CTA: texto sempre no tom mais extremo disponível (branco puro ou o tom mais escuro da paleta) sobre a dominant, nunca dominant-sobre-dominant. Nunca mais de 2 cores saturadas simultâneas na mesma tela.

## Como decidir a paleta pelo briefing
- **Nicho clínico/saúde/premium feminino** → off-white + vinho/bordô + preto suave (texto). Dominant discreta, muted alto.
- **Tech/SaaS/infra** → 1 cor elétrica (azul, verde, violeta) sobre quase-preto ou quase-branco puro, alto contraste, poucos tons intermediários.
- **Gastronomia/hospitalidade** → tons terrosos/quentes (creme, marrom, verde oliva), dominant desaturada, muita luz.
- **Jurídico/corporate/B2B sério** → azul-marinho ou verde-escuro + neutros, sem cor vibrante como dominant (accent discreto só).
- **Moda/beleza** → preto ou off-white extremo + 1 cor de assinatura da marca, alto contraste tipográfico compensando a paleta contida.
- **Arquitetura/estúdio** → cinza-quente + preto + 1 cor mineral (terracota, verde-musgo), superfícies quase monocromáticas.

## Anti-regra
Nunca aceitar "gradiente roxo-azul-rosa" como dominant por padrão — é a assinatura genérica de IA (ver ORBI-ANTI-GENERIC.md). Se o cliente não define cor, derivar da personalidade+nicho, nunca do "que está na moda".

---

# ORBI IMAGE DIRECTION SYSTEM
Substitui a busca por referência no Pinterest. Toda imagem do site é definida por direção, não por palavra-chave.

## Variáveis a definir sempre
1. **Tipo de fotografia** — editorial, still de produto, documental/candid, retrato posado, arquitetura/ambiente.
2. **Enquadramento** — close-up, plano médio, plano geral, detalhe macro.
3. **Distância/ângulo de câmera** — frontal, 3/4, lateral, de cima, ao nível do olho.
4. **Iluminação** — natural suave, dura/dramática, estúdio neutro, golden hour, artificial fria.
5. **Profundidade** — fundo desfocado (bokeh), fundo nítido contextual, fundo isolado (still).
6. **Composição** — regra dos terços, centralizada, espaço negativo à esquerda/direita/topo para texto.
7. **Tratamento de cor** — natural, dessaturado, alto contraste, duotone na cor dominant, preto e branco.
8. **Proporção** — quadrada, retrato, paisagem, full-bleed vertical (hero mobile).
9. **Posição do sujeito/produto** — centrado, deslocado para dar espaço a headline, em ação vs. estático.
10. **Uso do espaço negativo** — reservar lado/topo para tipografia sobreposta sempre que a imagem for de hero.

## Fórmula de direção
`[tipo de fotografia] + [enquadramento] + [ângulo] + [iluminação] + [profundidade/fundo] + [tratamento de cor] + [composição/espaço negativo]`

## Exemplo (clínica odontológica premium)
Em vez de "imagem de dentista": *"fotografia editorial clínica, plano médio lateral, altura dos olhos, iluminação natural suave vinda de janela lateral, fundo arquitetônico minimalista desfocado, tons neutros levemente quentes, composição com espaço negativo à esquerda para headline, sujeito com expressão serena, sem sorriso forçado de banco de imagem."*

## IMAGE PROMPT GENERATOR
Template para gerar prompt de geração de imagem quando não houver foto real disponível:
```
[tipo de fotografia], [enquadramento], [ângulo de câmera], [descrição do sujeito/produto sem clichê],
iluminação [tipo], fundo [descrição + nível de desfoque], paleta [cores da marca em termos de tom, não hex],
composição com espaço negativo em [posição] para elemento de texto, tratamento [cor/contraste],
proporção [ratio], estilo fotográfico (não ilustração/3D), sem watermark, sem texto embutido.
```
Regra: nunca gerar prompt com termos genéricos ("beautiful", "professional", "high quality") sem as variáveis acima — eles não decidem nada.

## Image as Composition (obrigatório antes de aprovar qualquer imagem)
Nenhuma imagem entra no site como "espaço reservado para foto". Antes de posicionar, preencher as 10 variáveis desta seção (tipo/enquadramento/ângulo/iluminação/profundidade/composição/cor/proporção/posição/espaço negativo) MAIS: relação com o texto (sobrepõe / convive ao lado / recorta o texto) e comportamento em mobile. Se qualquer campo ficar em branco, a imagem não está pronta para entrar na composição — voltar ao ORBI-ART-DIRECTION-SYSTEM.md §6.

## Photography as Art Direction (V3 — obrigatório para toda imagem importante)
Ampliação do vocabulário acima. Para toda fotografia central de uma seção, decidir explicitamente estes 11 campos antes de escolher/gerar a imagem: **SUBJECT** (quem/o quê) · **ENVIRONMENT** (onde) · **CAMERA DISTANCE** · **CAMERA HEIGHT** · **FRAMING** · **SUBJECT POSITION** (no quadro) · **NEGATIVE SPACE** (onde e quanto) · **LIGHTING** · **COLOR TREATMENT** · **EMOTIONAL STATE** (do sujeito, se houver pessoa) · **RELATION TO TYPOGRAPHY**.
Rejeitar qualquer direção que se reduza a uma keyword genérica ("foto de psicóloga em consultório"). Exemplo aceitável: *"retrato editorial 3/4 de uma mulher adulta em consultório residencial sofisticado, enquadrada no terço direito, luz lateral natural entrando por janela ampla, fundo arquitetônico desfocado, expressão serena sem sorriso publicitário, espaço negativo à esquerda destinado à tipografia."*

## Image / Typography Relationship (V3 — avaliar 3 opções, nunca ir direto para a A)
Antes de posicionar uma foto importante, avaliar por escrito:
A) texto ao lado da imagem · B) texto sobreposto à imagem · C) texto separado, imagem em escala monumental isolada.
Escolher a opção que gera mais hierarquia/personalidade PARA AQUELE conteúdo específico — nunca a opção A por ser a mais fácil de implementar.

## Regra anti-stock
Nunca aprovar imagem com: sorriso genérico de banco de imagem, aperto de mão/"team high-five", pessoa isolada em fundo branco sem contexto, composição perfeitamente simétrica sem espaço para texto. Se só houver stock disponível, priorizar still de produto/ambiente sobre pessoas genéricas.

---

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

---

# ORBI ANTI-GENERIC ENGINE
Checklist de avaliação — rodar mentalmente antes de entregar qualquer site do ORBI SITE ENGINE.

## ANTI-TEMPLATE CHECK (rodar PRIMEIRO, antes da checklist de execução abaixo)
Vem do ORBI-ART-DIRECTION-SYSTEM.md §9 — cobre direção, não execução:
1. "Se eu remover logo, nome da empresa e textos, o layout ainda parece pertencer a um projeto específico?" → NÃO = revisar composição.
2. "Este layout poderia ser vendido como template para 50 empresas diferentes?" → SIM = revisar.
3. "Existe uma decisão visual que não seria encontrada automaticamente em um template comum?" → NÃO = revisar.
Se qualquer resposta falhar, a correção é em CONCEPT/ART DIRECTION/COMPOSITION (ORBI-ART-DIRECTION-SYSTEM.md) — nunca adicionar motion/efeito/gradiente para compensar (ver §11 daquele arquivo).

## MIDDLE-SCROLL TEST (V3 — rodar SEGUNDO, específico para o miolo do site)
Ignorar hero e footer. Olhar só as seções do meio. Perguntar: "este miolo ainda parece ter direção de arte específica?" Se NÃO → reprojetar pelo menos 2 seções do meio, trocando vocabulário de composição (ORBI-ART-DIRECTION-SYSTEM.md §12) e Visual Intensity (ORBI-VISUAL-NARRATIVE-SYSTEM.md), não adicionando decoração. Esta validação existe porque hero e composition break podem estar ótimos e o miolo ainda ser genérico — foi exatamente a falha da V2.

## TEMPLATE REMOVAL TEST (V3 — rodar TERCEIRO, mais estrito, remove cor também)
Remover mentalmente logo, nome, textos E cores — olhar só formas/composição pura. Perguntar: "isso poderia pertencer a qualquer empresa?" Se SIM → revisar.

## Sinais de alerta (bloquear/revisar se presente)
- [ ] Hero previsível: título centralizado + subtítulo + botão, SEM nenhum elemento de composição próprio (sem eyebrow, sem stat, sem imagem/motion definidos por direção).
- [ ] Cards repetitivos: 3+ cards idênticos em ícone+título+texto sem variação de layout entre seções vizinhas (ver ORBI-SECTION-LIBRARY antes de aceitar).
- [ ] Excesso de gradiente: gradiente roxo→azul→rosa (ou qualquer gradiente multi-hue "genérico de IA") como fundo dominante.
- [ ] Excesso de glassmorphism: blur + borda branca translúcida em mais de 1 componente.
- [ ] Excesso de rounded cards: todo componente com o mesmo `border-radius` grande e sombra suave idêntica — sem variação de shape (ORBI CORE 02/09 exigem contraste de composição).
- [ ] Cards com borda esquerda colorida — assinatura clássica de template genérico.
- [ ] Stock photo óbvia (ver checklist em ORBI-IMAGE-DIRECTION, seção anti-stock).
- [ ] Seções repetidas na mesma variação estrutural (2x "Card Grid" seguidas, por ex.).
- [ ] CTA repetitivo: mesmo texto de botão repetido 3+ vezes sem variação de contexto.
- [ ] Hierarquia fraca: título e corpo com pesos/tamanhos próximos, sem salto claro (Core 01 exige mín. 3:1).
- [ ] Excesso de texto: parágrafos longos onde uma frase resolveria (Core 02 — 1 ideia por seção).
- [ ] Excesso de animação: 3+ efeitos de motion diferentes na mesma dobra.
- [ ] Falta de personalidade: qualquer elemento poderia pertencer a qualquer outro site do mesmo nicho sem alteração — se sim, faltou uma decisão de direção (voltar ao ORBI-DESIGN-ENGINE).

## Regra de aprovação
Um site só passa se, olhando para ele, for possível dizer pelo menos 2 decisões de composição que NÃO viriam de um gerador genérico (ex.: alternância de layout de seção, 1 motion com propósito claro, 1 escolha tipográfica fora do padrão Inter/Roboto default, 1 direção de imagem específica e não-clichê).

## Diferença de Consistência x Repetição
Consistência = mesma paleta, tipografia, tom de motion, princípios do Core em todo o site.
Repetição = mesma estrutura de seção, mesmo hero, mesmo ritmo, mesma composição repetidos sem variação.
O ORBI SITE ENGINE exige a primeira e proíbe a segunda.

---

# ORBI ONE-SHOT SITE PROMPT
Cole isto (ou referencie este arquivo) + o briefing (ORBI-CLIENT-BRIEF.md) para gerar um site novo em uma mensagem.

```
Use o ORBI SITE ENGINE (arquivos ORBI-CORE.md, ORBI-ART-DIRECTION-SYSTEM.md, ORBI-VISUAL-NARRATIVE-SYSTEM.md,
ORBI-DESIGN-ENGINE.md, ORBI-LAYOUT-LIBRARY.md, ORBI-HERO-LIBRARY.md, ORBI-SECTION-LIBRARY.md,
ORBI-MOTION-LIBRARY.md, ORBI-BACKGROUND-LIBRARY.md, ORBI-TYPOGRAPHY-SYSTEM.md, ORBI-COLOR-SYSTEM.md,
ORBI-IMAGE-DIRECTION.md, ORBI-COMPONENT-ENGINE.md, ORBI-ANTI-GENERIC.md) para criar um site completo
a partir deste briefing:

[BRIEFING NO FORMATO ORBI-CLIENT-BRIEF.md]

Execute nesta ordem, sem pular etapa:
1. Escreva o CONCEPT (ORBI-ART-DIRECTION-SYSTEM.md §1) — direção visual concreta de 2–5 palavras,
   nunca um slogan. Valide com o teste de leitura em voz alta.
2. Decida a ART DIRECTION completa (§2, 11 decisões: composição dominante, escala, proporção, ritmo,
   densidade, assimetria, espaço negativo, relação foto×tipografia, comportamento de imagem,
   elemento assinatura, ponto de maior impacto visual).
3. Construa a VISUAL NARRATIVE (ORBI-VISUAL-NARRATIVE-SYSTEM.md): mapeie o arco INTRODUÇÃO→
   DESENVOLVIMENTO→CONTRASTE→CLÍMAX→RESOLUÇÃO→CONVERSÃO e atribua Visual Intensity (01–05) a cada
   seção, garantindo variação não-monotônica.
4. Defina o SIGNATURE SYSTEM (§3/§5 revisado) — escolha a forma mais apropriada (composição,
   tratamento fotográfico, tipografia, proporção, sistema editorial, interação, elemento geométrico,
   ritmo ou navegação) — nunca baseado em glow/blur/gradiente/glassmorphism/partículas/animação
   isolada. A assinatura precisa continuar perceptível se o logo for removido.
5. Marque a seção de COMPOSITION BREAK (§4) e a ATTENTION HIERARCHY (§8: FOCO 01/02/03).
6. Rode o ORBI-DESIGN-ENGINE (nicho, público, objetivo, posicionamento, personalidade, sofisticação)
   só agora, já filtrado pela Art Direction e Visual Narrative.
7. Para CADA seção do fluxo, pergunte primeiro "o que este conteúdo precisa visualmente?" (Content →
   Composition, §13) antes de escolher a variação em ORBI-SECTION-LIBRARY — nunca a variação mais
   comum por padrão.
8. Monte o SECTION COMPOSITION MAP: para cada seção, anote vocabulário de composição (§12: editorial/
   monumental/assimétrico/tipográfico/narrativo/visual/lista/espaço-negativo/horizontal/vertical) +
   momento do arco + Visual Intensity. Nenhuma seção repete AMBOS (vocabulário e intensidade) da
   seção imediatamente anterior (Section Composition Independence, §12).
9. Escolha 1 LAYOUT dominante (ORBI-LAYOUT-LIBRARY) compatível com a composição decidida no passo 2 —
   lembrando que o layout é a moldura geral, não obriga toda seção a repetir a mesma estrutura.
10. Escolha TYPE-XX (ORBI-TYPOGRAPHY-SYSTEM) pelo posicionamento — NÃO usar Anton/Orbitron/Archivo
    por padrão. Avalie Typography as Architecture (§5).
11. Construa a paleta (ORBI-COLOR-SYSTEM) a partir da cor dada ou da personalidade+nicho — NÃO usar
    vermelho/preto por padrão.
12. Escolha 1 HERO (ORBI-HERO-LIBRARY) — confirme se ele carrega o pico visual ou se o clímax está em
    outra seção (normalmente está).
13. Para cada fotografia importante, rode Photography as Art Direction (ORBI-IMAGE-DIRECTION.md:
    SUBJECT/ENVIRONMENT/CAMERA DISTANCE/CAMERA HEIGHT/FRAMING/SUBJECT POSITION/NEGATIVE SPACE/
    LIGHTING/COLOR TREATMENT/EMOTIONAL STATE/RELATION TO TYPOGRAPHY) e avalie as 3 relações
    imagem×tipografia (A/B/C) antes de escolher — nunca ir direto para "texto ao lado".
14. Escolha 1 par de VISUAL TENSION (§7) e localize em qual seção ele aparece.
15. Escolha o nível de motion (ORBI-MOTION-LIBRARY) e aplique só com propósito (Core 08) — motion
    nunca compensa falta de direção de arte (§11).
16. Construa o site (Design Component único, inline styles, conforme as regras do ambiente),
    respeitando No Uniform Scroll (§18: padding/max-width/alinhamento/proporção/densidade variam
    por seção, nunca um valor padrão do site).
17. Aplique responsividade seguindo Core 10 (conteúdo decide breakpoint, não dispositivo padrão).
18. Rode nesta ordem: ANTI-TEMPLATE CHECK (§9) → MIDDLE-SCROLL TEST (§14, olhando só o miolo) →
    TEMPLATE REMOVAL TEST (§15, removendo cor também) → checklist geral ORBI-ANTI-GENERIC.md.
    Corrija qualquer falha voltando à Art Direction/Visual Narrative, nunca adicionando efeito.
19. Rode o checklist do ORBI-COMPONENT-ENGINE, incluindo a validação de Section Composition
    Independence.
20. Entregue com CONCEPT, SIGNATURE e o resumo de 1 frase da direção visual (para eu validar contra
    o briefing). O Designer's Decision Log completo (§17) fica interno, salvo pedido explícito de vê-lo.

Regra inegociável: o resultado não pode parecer "site da Órbi com outra cor" — deve parecer um site
original construído com os princípios do ORBI CORE, não com a pele visual da Órbi.
```

---

