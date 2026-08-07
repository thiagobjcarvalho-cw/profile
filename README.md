# Profile — Portfólio Thiago Carvalho

Portfólio pessoal de **Thiago Carvalho** (Full Stack Developer Sênior, Brasília-DF).
Site estático single-page construído com **JavaScript puro + Vite** — sem framework,
sem dependências de runtime.

## Stack

| Camada | Tecnologia |
|---|---|
| Frontend | HTML + CSS + JS vanilla (sem framework, sem TypeScript) |
| Build | Vite 6 (`vite build` → `dist/`) |
| Servidor dev | Vite (`npm run dev`, porta 3000 strictPort) |
| Produção | Docker multi-stage (Node build → Nginx) ou `dist/` estático |
| Fontes | Bricolage Grotesque (Google Fonts) |
| Conteúdo | 9 experiências reais (TCDF → Exército), dados do currículo |

## Estrutura de arquivos

```
profile/
├── index.html            # Todo o CSS inline + markup semântico (hero, about, timeline, skills, contact)
├── src/
│   └── main.js           # JS vanilla: dados das experiências, typewriter, reveal, menu mobile
├── public/
│   └── assets/
│       └── profileThiago.jpg   # Retrato (copiado para dist/ no build)
├── docs/
│   ├── ThiagoCarvalho-Curriculo.html  # Currículo HTML (1 página, print compacto)
│   └── ThiagoCarvalho-Curriculo.pdf   # Currículo PDF baixável (1 página A4)
├── DESIGN.md             # Sistema visual: paleta, tipografia, layout, motion, a11y
├── PRODUCT.md            # Contexto de produto: público, propósito, princípios
├── STARTUP.md            # Como subir o projeto (dev, build, Docker)
└── vite.config.js        # Vite: host true, usePolling, porta 3000 strictPort
```

## Padrões de seção

Cada seção da página segue o mesmo padrão estrutural:

```
<section id="..." class="section [--alt]">
  <div class="container">
    <div class="section-head" data-reveal>
      <span class="kicker">Label da seção</span>
      <h2>Título da seção</h2>
      <p>Subtítulo/descrição</p>
    </div>
    ... conteúdo ...
  </div>
</section>
```

| Seção | id | Conteúdo |
|---|---|---|
| Hero | `#hero` | Retrato, nome, typewriter de cargo, resumo, CTAs (download PDF + âncora) e social |
| Sobre | `#about` | Resumo, formação, idiomas, cursos |
| Experiência | `#experience` | Timeline rail com 9 experiências reais (role, empresa, período, bullets) |
| Skills | `#skills` | 5 grupos de competências (Frontend, UI/Design System, Backend, Banco de Dados, Ferramentas) |
| Contato | `#contact` | 4 canais (email/LinkedIn/GitHub/WhatsApp) + card de download do PDF |
| Footer | — | Navegação espelhada + copyright |

## Responsividade

- **≥ 1024px**: hero em 2 colunas (texto 7fr / retrato 5fr), nav links no header
- **< 1024px**: hero empilha em 1 coluna, **retrato vem primeiro** (`.hero-portrait{order:-1}`), chips menores
- **< 820px**: nav vira hamburger (SVG inline, drawer com `aria-expanded`)
- **< 400px**: chips ainda menores (0.64rem)

Chips do hero (ordem fixa): `VueJS 3 → ReactJS → Angular → PHP → API Platform`.
`.hero-chips` é `position:absolute` no desktop (overlay na borda do retrato) e
`position:static` abaixo de 1024px — `align-items:center` evita esticamento vertical.

## Scripts

```bash
npm run dev       # servidor dev Vite na porta 3000 (strictPort)
npm run build     # build de produção → dist/
npm run preview   # serve o dist/ localmente (vite preview)
```

## Como subir

```bash
# Dev
cd ~/projects/codewave/profile
npm install
npm run dev       # → http://localhost:3000

# Produção (Docker multi-stage)
docker build -t profile .
docker run -d --name profile -p 8080:80 profile
```

## Fontes de verdade

- **Currículo** (`docs/ThiagoCarvalho-Curriculo.pdf`) — conteúdo do site deve espelhar o PDF (mesmas 9 experiências, mesmas skills).
- **Vault ObsidianPrime** — card do projeto: `03_Projetos/CodeWave/profile.md`; session states em `06_Session-States/WSL/`.
- **Dream Arch** — ritos de sessão em `~/.dream-arch/` (GATEWAY.md, git.md).

## Git

- Branch padrão: `main` (histórico de trabalho usa branches temáticas, ex: `redesign-impeccable`).
- `docs/` está no `.gitignore` — para versionar currículo use `git add -f docs/...`.
- Commits assinados com identidade repo-local (`thiagobjcarvalho-cw`), nunca global.
