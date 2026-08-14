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
