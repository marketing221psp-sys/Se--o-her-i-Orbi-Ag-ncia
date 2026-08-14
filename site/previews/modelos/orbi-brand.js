(() => {
  const whatsapp = 'https://wa.me/5511945243736?text=Ol%C3%A1%2C%20vim%20por%20um%20modelo%20da%20Orbi%20e%20quero%20uma%20p%C3%A1gina%20para%20minha%20empresa.';
  const replacements = [
    [/opera[cç][aã]o\s+p[aá]gina\s+no\s+ar/gi, 'Orbi'],
    [/opera[cç][aã]o\s+p\.n\.a/gi, 'Orbi'],
    [/\bP\.N\.A\b/g, 'ORBI'],
    [/posicionamento\s+digital/gi, 'Orbi'],
    [/edi[cç][aã]o\s+ninja/gi, 'Orbi'],
    [/\bLP\s+Pronta\b/gi, 'Orbi'],
    [/\bStayFlow\b/gi, 'Orbi'],
    [/\bSocial\s+IA\s+Pro\b/gi, 'Orbi'],
    [/psic[oó]loga\s+cl[ií]nica/gi, 'Orbi'],
    [/consultoria\s+de\s+IA\s+para\s+empresas/gi, 'Orbi'],
    [/kit\s+p[aá]gina\s+no\s+ar/gi, 'Orbi'],
    [/gestor\s+de\s+tr[aá]fego/gi, 'Orbi'],
    [/gestor[_\s-]*lucrativo/gi, 'orbi_web'],
    [/nome\s+do\s+produto/gi, 'Orbi'],
    [/sua\s+marca/gi, 'Orbi']
  ];

  const replaceText = (text) => replacements.reduce((value, [from, to]) => value.replace(from, to), text);

  document.title = 'Orbi — Modelo demonstrativo';
  const robots = document.createElement('meta');
  robots.name = 'robots';
  robots.content = 'noindex, nofollow';
  document.head.appendChild(robots);

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const tag = node.parentElement && node.parentElement.tagName;
      return tag === 'SCRIPT' || tag === 'STYLE' ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
    }
  });
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach((node) => { node.nodeValue = replaceText(node.nodeValue); });

  document.querySelectorAll('a[href]').forEach((link) => {
    const label = (link.textContent || '').trim().toLowerCase();
    if (/quero|agendar|diagn[oó]stico|acessar|entrar|consulta|conversa|contato|fale conosco/.test(label)) {
      link.href = whatsapp;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    }
  });

  const style = document.createElement('style');
  style.textContent = `
    .orbi-template-badge { position: fixed; z-index: 2147483647; top: 14px; left: 14px; display: inline-flex; align-items: center; gap: 8px; padding: 9px 12px; border-radius: 999px; color: #fff; background: #c50200; box-shadow: 0 8px 24px rgba(0,0,0,.25); font: 800 11px/1 Arial,sans-serif; letter-spacing: .12em; text-decoration: none; }
    .orbi-template-badge::before { content: ''; width: 8px; height: 8px; border: 2px solid currentColor; border-radius: 50%; }
    @media (max-width: 600px) { .orbi-template-badge { top: 10px; left: 10px; padding: 8px 10px; font-size: 9px; } }
  `;
  document.head.appendChild(style);

  const badge = document.createElement('a');
  badge.className = 'orbi-template-badge';
  badge.href = whatsapp;
  badge.target = '_blank';
  badge.rel = 'noopener noreferrer';
  badge.textContent = 'ORBI · MODELO';
  badge.setAttribute('aria-label', 'Falar com a Orbi pelo WhatsApp');
  document.body.appendChild(badge);
})();
