// src/data/portfolioData.js

export const personalInfo = {
  name: 'Thiago Carvalho',
  title: 'Full Stack Developer Sr.',
  location: 'Brasília, DF',
  company: 'TCDF',
  email: 'thiagob.j.carvalho@gmail.com',
  phone: '+5561982859870',
  linkedin: 'https://linkedin.com/in/thiagobjcarvalho',
  github: 'https://github.com/thiagobjcarvalho-cw',
  description: `Engenheiro de Software com mais de 10 anos de experiência sólida em tecnologias de ponta, 
    especializado em desenvolvimento Frontend e Full Stack. Domínio em VueJS, ReactJS, Angular e 
    API Platform, criando interfaces dinâmicas e soluções escaláveis para projetos complexos.`
}

export const experience = [
  {
    id: 1,
    period: 'Jul/2024 - Atual',
    role: 'Full Stack Developer',
    company: 'Tribunal de Contas do Distrito Federal - TCDF',
    location: 'Brasília, DF - Home Office',
    description: `Desenvolvedor Full Stack especializado na criação e gerenciamento de aplicações 
      robustas e escaláveis utilizando VueJS, API Platform e Vuetify para interfaces responsivas.`,
    achievements: [
      'Desenvolvimento Full Stack com VueJS e API Platform',
      'Interfaces ricas e responsivas com Vuetify',
      'Aplicações escaláveis para setor público',
      'Metodologias ágeis e DevOps'
    ],
    technologies: ['VueJS', 'API Platform', 'Vuetify', 'TypeScript', 'Symfony'],
    type: 'current'
  },
  {
    id: 2,
    period: 'Fev/2023 - Fev/2024',
    role: 'Analista de Desenvolvimento Sênior',
    company: 'Fretebras',
    location: 'Valparaíso de Goiás - Híbrido',
    description: `Atuação como analista desenvolvedor sênior em sistema de gestão de fretes, 
      focado em soluções para logística e transporte.`,
    achievements: [
      'Sistemas de gestão de fretes',
      'Desenvolvimento Frontend avançado',
      'Integração com APIs de logística',
      'Arquitetura de microserviços'
    ],
    technologies: ['Frontend Avançado', 'APIs Logística', 'Microservices'],
    type: 'past'
  },
  {
    id: 3,
    period: 'Jan/2022 - Out/2022',
    role: 'Analista Desenvolvedor Sr',
    company: 'SysMap Solutions',
    location: 'Brasília, DF - Presencial/Híbrido',
    description: `Analista Desenvolvedor Sr React atuando nas empresas Editora FTD e Renner, 
      desenvolvendo soluções frontend para grandes varejistas.`,
    achievements: [
      'Desenvolvimento ReactJS para Editora FTD',
      'Sistemas para Renner (varejo)',
      'Arquitetura frontend escalável',
      'Liderança técnica de equipes'
    ],
    technologies: ['ReactJS', 'Redux', 'TypeScript', 'Material-UI'],
    type: 'past'
  },
  {
    id: 4,
    period: 'Jun/2019 - Fev/2022',
    role: 'Analista Desenvolvedor',
    company: 'Coopersystem',
    location: 'Distrito Federal - Híbrido',
    description: `Analista desenvolvedor Sr. Frontend (ReactJS) atuando em cooperativa, 
      com projetos para diversos clientes do setor público e privado.`,
    achievements: [
      'Especialista Frontend ReactJS',
      'Projetos para setor público',
      'Metodologias ágeis',
      'Mentoria de desenvolvedores júnior'
    ],
    technologies: ['ReactJS', 'JavaScript ES6+', 'SASS', 'Webpack'],
    type: 'past'
  },
  {
    id: 5,
    period: 'Fev/2019 - Jun/2019',
    role: 'Desenvolvedor Web Frontend',
    company: 'Orbiter | Engenharia & Consultoria',
    location: '100% Home Office',
    description: `Desenvolvedor (VueJS) para empresa de internet via satélite, 
      focado em sistemas de pagamento e controle.`,
    achievements: [
      'Desenvolvimento com VueJS',
      'Sistemas de pagamento online',
      'Internet via satélite',
      'Trabalho remoto pioneiro'
    ],
    technologies: ['VueJS', 'Payment APIs', 'JavaScript'],
    type: 'past'
  }
]

export const skills = [
  {
    category: 'Frontend Frameworks',
    icon: 'mdi-vuejs',
    color: 'primary',
    items: [
      'VueJS (Vue 2 & 3, Composition API, Vuetify)',
      'ReactJS (Hooks, Context, Redux)',
      'Angular (AngularJS, Angular 10+)',
      'TypeScript / JavaScript ES6+',
      'Material Design & Bootstrap',
      'CSS3, HTML5, SASS'
    ]
  },
  {
    category: 'Backend & APIs',
    icon: 'mdi-server',
    color: 'success',
    items: [
      'PHP (Laravel, MVC)',
      'API Platform (Symfony)',
      'RESTful APIs',
      'Node.js & Express',
      'Microservices Architecture',
      'Database Design & Integration'
    ]
  },
  {
    category: 'Databases & Storage',
    icon: 'mdi-database',
    color: 'info',
    items: [
      'PostgreSQL',
      'MySQL',
      'Oracle Database',
      'MongoDB',
      'Database Design & Optimization',
      'SQL Queries & Performance'
    ]
  },
  {
    category: 'Tools & DevOps',
    icon: 'mdi-tools',
    color: 'warning',
    items: [
      'Git & Version Control',
      'Docker & Containers',
      'CI/CD Pipelines',
      'Linux Server Administration',
      'Webpack & Build Tools',
      'Testing & Quality Assurance'
    ]
  },
  {
    category: 'Professional Skills',
    icon: 'mdi-account-tie',
    color: 'secondary',
    items: [
      'Software Architecture & Design',
      'Full Stack Development',
      'Agile Methodologies',
      'Code Review & Best Practices',
      'Technical Leadership',
      'Remote Work & Collaboration'
    ]
  },
  {
    category: 'Specialized Areas',
    icon: 'mdi-target',
    color: 'accent',
    items: [
      'Government Systems Development',
      'E-commerce Solutions',
      'Educational Platforms',
      'Financial Systems',
      'Logistics & Transportation',
      'Public Sector Solutions'
    ]
  }
]

export const projects = [
  {
    id: 1,
    title: 'Sistemas TCDF',
    description: `Desenvolvimento Full Stack de aplicações robustas e escaláveis para o Tribunal de 
      Contas do DF utilizando VueJS, API Platform e Vuetify para interfaces responsivas.`,
    technologies: ['VueJS', 'API Platform', 'Vuetify', 'TypeScript', 'Symfony'],
    icon: 'mdi-bank',
    color: 'primary',
    category: 'Government',
    featured: true
  },
  {
    id: 2,
    title: 'Sistema Fretebras',
    description: `Sistema de gestão de fretes desenvolvido como analista sênior, focado em 
      soluções para logística e transporte com interface moderna e responsiva.`,
    technologies: ['Frontend Avançado', 'APIs Logística', 'Gestão Fretes', 'Responsive Design'],
    icon: 'mdi-truck',
    color: 'success',
    category: 'Logistics',
    featured: true
  },
  {
    id: 3,
    title: 'Editora FTD & Renner',
    description: `Desenvolvimento ReactJS para grandes clientes como Editora FTD e Renner, 
      criando soluções frontend escaláveis para o setor educacional e varejo.`,
    technologies: ['ReactJS', 'Educação', 'E-commerce', 'Scalable Architecture'],
    icon: 'mdi-store',
    color: 'info',
    category: 'E-commerce',
    featured: true
  },
  {
    id: 4,
    title: 'Projetos Coopersystem',
    description: `Especialista Frontend ReactJS desenvolvendo soluções para diversos clientes 
      do setor público e privado, focado em qualidade e performance.`,
    technologies: ['ReactJS Expert', 'Setor Público', 'Metodologias Ágeis', 'High Performance'],
    icon: 'mdi-office-building',
    color: 'warning',
    category: 'Multiple',
    featured: false
  },
  {
    id: 5,
    title: 'Sistema Orbiter',
    description: `Desenvolvimento VueJS para empresa de internet via satélite, criando 
      sistemas de pagamento e controle com interface intuitiva e segura.`,
    technologies: ['VueJS', 'Payment System', 'Satellite Internet', 'Remote Work'],
    icon: 'mdi-satellite-variant',
    color: 'secondary',
    category: 'Telecommunications',
    featured: false
  },
  {
    id: 6,
    title: 'Sistemas Governamentais',
    description: `Desenvolvimento de sistemas críticos para órgãos governamentais utilizando 
      AngularJS e PHP, com foco em segurança e confiabilidade.`,
    technologies: ['AngularJS', 'PHP MVC', 'Government Systems', 'High Security'],
    icon: 'mdi-shield-account',
    color: 'accent',
    category: 'Government',
    featured: false
  }
]

export const testimonials = [
  {
    id: 1,
    name: 'Marina Silva',
    role: 'Product Manager',
    company: 'DEXTRA',
    avatar: 'M',
    text: `Thiago é um tech lead excepcional. Sua capacidade de liderar equipes internacionais 
      e entregar soluções complexas é impressionante. Sempre focado em qualidade e performance.`,
    rating: 5
  },
  {
    id: 2,
    name: 'Carlos Eduardo',
    role: 'Desenvolvedor Senior',
    company: 'COOPERSYSTEM',
    avatar: 'C',
    text: `Trabalhar com Thiago foi uma experiência incrível. Ele domina tanto a parte técnica quanto 
      a liderança, sempre disposto a ensinar e compartilhar conhecimento com a equipe.`,
    rating: 5
  },
  {
    id: 3,
    name: 'Ana Santos',
    role: 'Gestora de TI',
    company: 'MRE',
    avatar: 'A',
    text: `A arquitetura criada pelo Thiago para nossos sistemas governamentais foi fundamental 
      para o sucesso do projeto. Profissional dedicado e extremamente competente.`,
    rating: 5
  }
]

export const education = [
  {
    id: 1,
    degree: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
    institution: 'Grupo Projeção',
    period: '2008 - 2011',
    status: 'Concluído',
    type: 'academic'
  },
  {
    id: 2,
    degree: 'Full Stack Developer Sr.',
    institution: 'Frontend & Backend Especialista',
    period: '10+ anos',
    status: 'Experiência Profissional',
    type: 'professional'
  },
  {
    id: 3,
    degree: 'Symfony & API Platform',
    institution: 'Desenvolvimento de APIs Robustas',
    period: '5+ anos',
    status: 'Especialização',
    type: 'specialization'
  },
  {
    id: 4,
    degree: 'DevOps & CI/CD',
    institution: 'Docker, Git, Github, Deployment',
    period: '5+ anos',
    status: 'Competência Técnica',
    type: 'technical'
  }
]

export const socialLinks = [
  {
    name: 'LinkedIn',
    icon: 'mdi-linkedin',
    url: 'https://linkedin.com/in/thiagobjcarvalho',
    color: '#0077B5'
  },
  {
    name: 'GitHub',
    icon: 'mdi-github',
    url: 'https://github.com/thiagobjcarvalho-cw',
    color: '#333333'
  },
  {
    name: 'Email',
    icon: 'mdi-email',
    url: 'mailto:thiagob.j.carvalho@gmail.com',
    color: '#EA4335'
  },
  {
    name: 'WhatsApp',
    icon: 'mdi-whatsapp',
    url: 'https://wa.me/5561982859870',
    color: '#25D366'
  }
]

export const stats = [
  {
    id: 1,
    value: '10+',
    label: 'Anos de Experiência',
    icon: 'mdi-calendar-check',
    color: 'primary'
  },
  {
    id: 2,
    value: '50+',
    label: 'Projetos Entregues',
    icon: 'mdi-rocket-launch',
    color: 'success'
  },
  {
    id: 3,
    value: '15+',
    label: 'Tecnologias Dominadas',
    icon: 'mdi-code-tags',
    color: 'info'
  },
  {
    id: 4,
    value: '100%',
    label: 'Dedicação aos Projetos',
    icon: 'mdi-heart',
    color: 'accent'
  }
]

export const navigationItems = [
  { id: 'hero', label: 'Início', icon: 'mdi-home' },
  { id: 'about', label: 'Sobre', icon: 'mdi-account' },
  { id: 'experience', label: 'Experiência', icon: 'mdi-briefcase' },
  { id: 'skills', label: 'Skills', icon: 'mdi-code-tags' },
  { id: 'projects', label: 'Projetos', icon: 'mdi-folder-multiple' },
  { id: 'testimonials', label: 'Depoimentos', icon: 'mdi-comment-quote' },
  { id: 'contact', label: 'Contato', icon: 'mdi-email' }
]