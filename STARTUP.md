# STARTUP — Profile

## Stack
- Frontend: HTML + CSS + JS vanilla (sem framework) via Vite 6
- Backend: Nenhum
- Database: Nenhum

## Como levantar

### Dev (Vite, porta 3000 strictPort)
```bash
cd ~/projects/codewave/profile
npm install
npm run dev
```
Acesso: http://localhost:3000

### Build de produção
```bash
npm run build     # gera dist/ (JS bundlado + avatar copiado)
npm run preview   # serve o dist/ localmente
```

### Docker (produção)
```bash
docker build -t profile .
docker run -d --name profile -p 8080:80 profile
```
Dockerfile multi-stage: Node build (`npm run build`) → Nginx. Porta interna 80.

## Porta
- Dev: 3000 (strictPort)
- Container (nginx): 80 (EXPOSE) → host 8080

## Branch atual
main

## Status de build
- [x] Build gerado (dist/)
- [x] node_modules presente
- [x] Dockerfile pronto (multi-stage produção)
- [ ] docker-compose.yml pronto
