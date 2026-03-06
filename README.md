This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Railway

Para fazer deploy no [Railway](https://railway.app/):

1. Faça login/crie sua conta no Railway.
2. Clique em "New Project" e conecte seu repositório do GitHub.
3. O Railway detecta Next.js automaticamente. Certifique-se que os scripts no `package.json` estão assim:
	- `build`: `next build`
	- `start`: `next start`
4. O Railway irá rodar `npm run build` e depois `npm start`.
5. Se precisar de variáveis de ambiente, adicione-as na aba "Variables" do Railway.

Pronto! O deploy será feito automaticamente a cada push no GitHub.
