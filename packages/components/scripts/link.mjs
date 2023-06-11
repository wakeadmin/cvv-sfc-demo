import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);

const VUE_VERSION_FROM_ARG = process.argv[2];
const VUE_VERSION = VUE_VERSION_FROM_ARG || process.env.VUE_VERSION || '3';
const VUE3_MODULE = 'vue3';
const VUE2_MODULE = 'vue2';

const VUE_MODULE = path.dirname(require.resolve((VUE_VERSION === '3' ? VUE3_MODULE : VUE2_MODULE) + '/package.json'));
const TARGET = path.resolve(__dirname, '../node_modules/vue');

if (fs.existsSync(TARGET)) {
  fs.unlinkSync(TARGET);
}
fs.symlinkSync(VUE_MODULE, TARGET);

console.log(`[component] link switch to ${VUE_VERSION}`);
