# mealgenie-by-shahryar
🎯 Goal  MealGenie aims to make cooking easier and more flexible by turning available ingredients into creative meal ideas instantly.

## Deploying

This repo is set up so the app can be deployed on Cloudflare first and still stay compatible with a normal Node/VPS deployment later.

Cloudflare:
- Install dependencies with `npm install`.
- In the Cloudflare dashboard, set the build command to `npm run cf:build`.
- In the Cloudflare dashboard, set the deploy command to `npm run cf:deploy`.
- Run `npm run cf:preview` locally to test in the Cloudflare runtime.
- Use the same Clerk env vars from `.env.example` in Cloudflare.
- If you are not using the Prisma database yet, no database env is required for install/build.

The error you pasted happens when Cloudflare runs a plain `next build` and then calls `wrangler deploy` without the compiled OpenNext output. The `cf:build` step creates the `.open-next` bundle that `cf:deploy` needs.

Hostinger VPS:
- Use `npm install`, `npm run build`, then `npm run start`.
- Set `DATABASE_URL` before you enable Prisma-based features.
- The same Clerk env vars from `.env.example` apply here too.

Cloudflare config files:
- `wrangler.toml` for the Workers deployment target.
- `open-next.config.ts` for the OpenNext adapter settings.
