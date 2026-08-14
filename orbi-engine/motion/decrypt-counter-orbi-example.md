# Exemplo real: MOTION-HIGH "decrypt" + MOTION-MEDIUM counter (site atual da Órbi)
`decode()` em `site/index.html`: caracteres aleatórios travando progressivamente até o valor final (900ms), disparado por IntersectionObserver — usado nos pain cards. `runStep()`: contagem 00→valor via rAF (500ms) — usado nos steps do processo. Ambos com fallback `prefers-reduced-motion`.
