import { switchVersion, loadModule } from './utils.mjs';

const Vue = loadModule('vue');

if (!Vue || typeof Vue.version !== 'string') {
  console.warn('[component] Vue is not found. Please run "npm install vue" to install.');
} else if (Vue.version.startsWith('2.')) {
  switchVersion(2);
} else if (Vue.version.startsWith('3.')) {
  switchVersion(3);
} else {
  console.warn(`[component] Vue version v${Vue.version} is not suppported.`);
}
