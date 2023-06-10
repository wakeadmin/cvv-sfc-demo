import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import vue from '@vitejs/plugin-vue';
import vue2 from '@vitejs/plugin-vue2';

const VUE_VERSION = process.env.VUE_VERSION || '3';

console.log('VUE_VERSION', VUE_VERSION)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [VUE_VERSION === '3' ? vue() : vue2()],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'MyLib',
      // the proper extensions will be added
      fileName: 'my-lib',
    },
    outDir: VUE_VERSION === '3' ? 'dist/v3' : 'dist/v2',
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  resolve: {
    alias: [
      {
        find: 'vue',
        replacement: VUE_VERSION === '3' ? 'vue' : 'vue2',
      },
    ],
  },
});
