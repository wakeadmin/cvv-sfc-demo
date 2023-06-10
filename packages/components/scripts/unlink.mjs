import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const TARGET = path.resolve(__dirname, '../node_modules/vue');

if (fs.existsSync(TARGET)) {
  fs.unlinkSync(TARGET);
}
