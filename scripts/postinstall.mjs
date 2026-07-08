import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { spawnSync } from 'node:child_process';

const schemaPath = resolve(process.cwd(), 'prisma', 'schema.prisma');

if (!existsSync(schemaPath)) {
  process.exit(0);
}

if (!process.env.DATABASE_URL && process.env.PRISMA_GENERATE !== '1') {
  process.exit(0);
}

const result = spawnSync('npx', ['prisma', 'generate'], {
  stdio: 'inherit',
  shell: true,
});

process.exit(result.status ?? 0);