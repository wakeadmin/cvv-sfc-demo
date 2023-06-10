import { switchVersion } from './utils.mjs';

const version = process.argv[2];

if (version === '2') {
  switchVersion(2);
  console.log(`[component] Switched for Vue 2`);
} else {
  switchVersion(3);
  console.log(`[component] Switched for Vue 3`);
}
