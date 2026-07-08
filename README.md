# mealgenie-by-shahryar
🎯 Goal  MealGenie aims to make cooking easier and more flexible by turning available ingredients into creative meal ideas instantly.

## Deploying

This repo is set up so the app can be deployed on Cloudflare first and still stay compatible with a normal Node/VPS deployment later.

Cloudflare:
- Install dependencies with `npm install`.
- Run `npm run cf:preview` to test locally in the Cloudflare runtime.
- Run `npm run cf:deploy` to deploy.
- Use the same Clerk env vars from `.env.example` in Cloudflare.
- If you are not using the Prisma database yet, no database env is required for install/build.

Hostinger VPS:
- Use `npm install`, `npm run build`, then `npm run start`.
- Set `DATABASE_URL` before you enable Prisma-based features.
- The same Clerk env vars from `.env.example` apply here too.

Cloudflare config files:
- `wrangler.toml` for the Workers deployment target.
- `open-next.config.ts` for the OpenNext adapter settings.
