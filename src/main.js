/* ============================================================
   Thiago Carvalho — Portfólio
   Vanilla JS: dados do currículo real (docs/ThiagoCarvalho-Curriculo.pdf)
   ============================================================ */

/* ---------- Dados: experiências (fonte: currículo PDF) ---------- */
const EXPERIENCES = [
  {
    period: '07/2024 – 04/08/2026',
    role: 'Full Stack Developer',
    company: 'Tribunal de Contas do Distrito Federal (TCDF)',
    location: 'Brasília, DF',
    current: true,
    bullets: [
      'Desenvolvimento e manutenção de aplicações Full Stack utilizando VueJS (Composition API), API Platform e Vuetify para interfaces ricas e responsivas.',
      'Atuação em projetos institucionais de gestão pública, com foco em escalabilidade e qualidade de código.'
    ]
  },
  {
    period: '02/2023 – 02/2024',
    role: 'Analista de Desenvolvimento Sênior',
    company: 'Fretebras',
    location: 'Valparaíso de Goiás, GO',
    current: false,
    bullets: [
      'Desenvolvimento de funcionalidades para plataforma de logística e frete, atuando no Frontend com foco em performance e experiência do usuário.'
    ]
  },
  {
    period: '01/2022 – 10/2022',
    role: 'Analista Desenvolvedor Sr. (ReactJS)',
    company: 'SysMap Solutions',
    location: 'Brasília, DF',
    current: false,
    bullets: [
      'Atuação como Analista Desenvolvedor Sr. em projetos ReactJS para os clientes Editora FTD e Renner.'
    ]
  },
  {
    period: '06/2019 – 02/2022',
    role: 'Analista Desenvolvedor Sr. Frontend (ReactJS / Angular10)',
    company: 'Coopersystem',
    location: 'Brasília, DF (Cooperativa)',
    current: false,
    bullets: [
      'Desenvolvimento de sistemas na fábrica de software para o IPEA com tecnologia ReactJS.',
      'Atuação em contrato com o Banco do Brasil na área de seguros de vida, com Angular 10, AngularJS, Java e Maven.'
    ]
  },
  {
    period: '02/2019 – 06/2019',
    role: 'Desenvolvedor Frontend (VueJS)',
    company: 'Orbiter — Engenharia & Consultoria',
    location: 'Home Office',
    current: false,
    bullets: [
      'Criação de sistema de controle de pagamento com VueJS e manutenção de sistema legado em AngularJS e Bootstrap, no setor de internet via satélite.'
    ]
  },
  {
    period: '11/2017 – 10/2018',
    role: 'Analista Desenvolvedor (AngularJS)',
    company: 'Transoft – Soluções para Transportes',
    location: 'Núcleo Bandeirantes, DF',
    current: false,
    bullets: [
      'Criação de sistema de controle de ocorrências por meio de recortes de vídeo, com AngularJS e Bootstrap.'
    ]
  },
  {
    period: '08/2015 – 07/2017',
    role: 'Desenvolvedor Frontend (AngularJS)',
    company: 'Datainfo Soluções em TI — Ministério das Relações Exteriores (MRE)',
    location: 'Brasília, DF',
    current: false,
    bullets: [
      'Criação de arquitetura e sistemas de controle de documentos sensíveis, com AngularJS, Material Design, PHP (Apigility) e PostgreSQL.'
    ]
  },
  {
    period: '04/2014 – 08/2015',
    role: 'Desenvolvedor PHP (MVC)',
    company: 'Indra Brasil — Ministério da Educação (MEC)',
    location: 'Brasília, DF',
    current: false,
    bullets: [
      'Desenvolvimento e manutenção dos sistemas SISU Gestão 2, SGB e ISF, com PHP (Zend Framework), jQuery, Oracle e WordPress.'
    ]
  },
  {
    period: '03/2010 – 03/2014',
    role: 'Desenvolvedor PHP (MVC)',
    company: 'Exército Brasileiro — Quartel General do Exército',
    location: 'Brasília, DF',
    current: false,
    bullets: [
      'Desenvolvimento de sistemas de gestão militar com PHP (Zend Framework), jQuery, Oracle e Joomla.'
    ]
  }
];

/* ---------- Dados: skills (fonte: currículo PDF) ---------- */
const SKILL_GROUPS = [
  {
    title: 'Frontend',
    icon: '<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>',
    skills: ['VueJS 3', 'ReactJS', 'Angular / AngularJS', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3']
  },
  {
    title: 'UI / Design System',
    icon: '<path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/>',
    skills: ['Vuetify', 'Material Design', 'Bootstrap']
  },
  {
    title: 'Backend',
    icon: '<rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>',
    skills: ['PHP (Laravel)', 'PHP (Zend)', 'PHP (Apigility)', 'API Platform', 'Java']
  },
  {
    title: 'Banco de Dados',
    icon: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>',
    skills: ['Oracle', 'PostgreSQL', 'MySQL']
  },
  {
    title: 'Ferramentas',
    icon: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
    skills: ['Docker', 'Git', 'GitHub', 'CI/CD']
  }
];

/* ---------- Typewriter ---------- */
const ROLES = [
  'Full Stack Developer Sênior',
  'Especialista em VueJS 3',
  'Expert em ReactJS',
  'Angular / AngularJS',
  'API Platform Master'
];

function startTypewriter() {
  const el = document.getElementById('typewriter');
  if (!el) return;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) { el.textContent = ROLES[0]; return; }

  let roleIndex = 0, charIndex = 0, deleting = false;
  (function tick() {
    const current = ROLES[roleIndex];
    el.textContent = current.substring(0, charIndex);
    let delay = deleting ? 40 : 110;
    if (!deleting && charIndex === current.length) { delay = 1800; deleting = true; }
    else if (deleting && charIndex === 0) { deleting = false; roleIndex = (roleIndex + 1) % ROLES.length; delay = 350; }
    charIndex += deleting ? -1 : 1;
    setTimeout(tick, delay);
  })();
}

/* ---------- Render timeline ---------- */
function renderTimeline() {
  const wrap = document.getElementById('timeline');
  if (!wrap) return;
  wrap.innerHTML = EXPERIENCES.map((exp, i) => {
    const bullets = exp.bullets.map(b => `<li>${b}</li>`).join('');
    const current = exp.current ? ' current' : '';
    return `
      <li class="tl-item${current}" data-reveal>
        <span class="tl-dot" aria-hidden="true"></span>
        <div class="tl-head">
          <h3 class="tl-role">${exp.role}</h3>
          <span class="tl-period">${exp.period}</span>
        </div>
        <p class="tl-company">${exp.company}</p>
        <p class="tl-location">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          ${exp.location}
        </p>
        <ul class="tl-bullets">${bullets}</ul>
      </li>`;
  }).join('');
}

/* ---------- Render skills ---------- */
function renderSkills() {
  const wrap = document.getElementById('skills-grid');
  if (!wrap) return;
  wrap.innerHTML = SKILL_GROUPS.map((group, i) => `
    <article class="skill-cat" data-reveal>
      <h3>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${group.icon}</svg>
        ${group.title}
      </h3>
      <div class="skill-tags">
        ${group.skills.map(s => `<span class="skill-tag">${s}</span>`).join('')}
      </div>
    </article>
  `).join('');
}

/* ---------- Mobile menu ---------- */
function initMobileMenu() {
  const btn = document.querySelector('.hamburger');
  const nav = document.getElementById('mobile-nav');
  if (!btn || !nav) return;
  btn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    btn.querySelector('svg').innerHTML = open
      ? '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>'
      : '<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>';
  });
  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      nav.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      btn.setAttribute('aria-label', 'Abrir menu');
      btn.querySelector('svg').innerHTML = '<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>';
    });
  });
}

/* ---------- Reveal on scroll ---------- */
function initReveal() {
  const els = document.querySelectorAll('[data-reveal]');
  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    els.forEach(el => el.classList.add('is-visible'));
    return;
  }
  // Reveal imediato de tudo que já está no viewport (carga inicial):
  // não depende do IO, funciona em headless/renderizadores pausados.
  els.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight * 1.2) {
      el.classList.add('is-visible');
    }
  });
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => {
    if (!el.classList.contains('is-visible')) io.observe(el);
  });

  // Fallback de segurança: se algo no viewport ainda não revelou em 2.5s
  // (IO travado, aba oculta, renderizador headless), revela tudo para nunca
  // deixar conteúdo invisível.
  setTimeout(() => {
    els.forEach(el => {
      if (!el.classList.contains('is-visible') &&
          el.getBoundingClientRect().top < window.innerHeight * 1.2) {
        el.classList.add('is-visible');
      }
    });
  }, 2500);
}

/* ---------- Boot ---------- */
document.addEventListener('DOMContentLoaded', () => {
  renderTimeline();
  renderSkills();
  startTypewriter();
  initMobileMenu();
  initReveal();
});
