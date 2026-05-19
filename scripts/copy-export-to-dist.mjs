import { cp, rm, stat, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = process.cwd();
const outDir = resolve(root, 'out');
const distDir = resolve(root, 'dist');

try {
  const outStats = await stat(outDir);

  if (!outStats.isDirectory()) {
    throw new Error('Next export output exists but is not a directory.');
  }

  await rm(distDir, { force: true, recursive: true });
  await cp(outDir, distDir, { recursive: true });

  await writeFile(
    resolve(distDir, '.htaccess'),
    `DirectoryIndex index.html
ErrorDocument 404 /404.html

<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/css text/javascript application/javascript application/json application/xml image/svg+xml
</IfModule>

<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
</IfModule>
`,
  );

  console.log('Static export copied from out/ to dist/. Netlify publish directory: dist/.');
} catch (error) {
  console.error('Failed to prepare dist/ for Netlify.');
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
}
