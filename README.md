# SvelteKit, Drizzle and Lucia

## Code History

The code in this repo is base on the following:

- https://medium.com/@anasmohammed361/drizzle-orm-with-sveltekit-8aecbc8cc39d
- https://youtu.be/E9J2VXd-bzE?si=1hBwymPY1xxHzK1_
- https://youtu.be/UMpKaZy0Rpc?si=zCwl9I1fHAWHpdB8

Background:

- Supreforms - https://youtu.be/MiKzH3kcVfs?si=o5CmBLJ4Dx9tBzcR

## Creation History

```bash
npm create svelte@latest sveltekit-auth-lucia
cd sveltekit-auth-lucia/
npm i
git init && git add -A && git commit -m "Initial commit"
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npx shadcn-svelte@latest init
```

```bash
npm install mode-watcher
npx shadcn-svelte@latest add button
npx shadcn-svelte@latest add card
npx shadcn-svelte@latest add input
npx shadcn-svelte@latest add label
npx shadcn-svelte@latest add textarea
npm i -D sveltekit-superforms zod
```

```bash
npm i drizzle-orm
npm i -D drizzle-kit
npm i -D dotenv
npm i -D pg
npm run db:push
npm run db:studio
## above setups and db with table and displays it, below query
npm i @vercel/postgres
```
