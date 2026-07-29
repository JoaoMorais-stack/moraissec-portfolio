# Portfólio MoraisSec

Portfólio profissional bilíngue de João Morais, com foco em Pentest, Red Team e segurança ofensiva. O projeto usa Next.js e está preparado para publicação na Vercel.

## Conteúdo editável

- `app/page.tsx`: textos em português e inglês, projetos e links.
- `app/globals.css`: identidade visual e comportamento responsivo.
- `app/layout.tsx`: título, descrição e metadados de compartilhamento.
- `public/`: logo, currículos e imagem de prévia social.

## Execução local

Requer Node.js 22.13 ou mais recente.

```powershell
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Validação

```powershell
npm run build
npm test
```

## Publicação na Vercel

Importe este repositório na Vercel e mantenha o preset de framework como Next.js. O comando padrão `npm run build` gera a versão de produção.

Antes de cada publicação pública, revise os arquivos da pasta `public` e confirme que os currículos não contêm dados pessoais que você não deseja divulgar.
