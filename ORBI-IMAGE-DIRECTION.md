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
