// vite.config.ts
import legacy from 'file:///Users/joacoiannuzzi/dev/food-waste-app/app/node_modules/@vitejs/plugin-legacy/dist/index.mjs';
import react from 'file:///Users/joacoiannuzzi/dev/food-waste-app/app/node_modules/@vitejs/plugin-react/dist/index.mjs';
import checker from 'file:///Users/joacoiannuzzi/dev/food-waste-app/app/node_modules/vite-plugin-checker/dist/esm/main.js';
import tsconfigPaths from 'file:///Users/joacoiannuzzi/dev/food-waste-app/app/node_modules/vite-tsconfig-paths/dist/index.mjs';
import { defineConfig } from 'file:///Users/joacoiannuzzi/dev/food-waste-app/app/node_modules/vite/dist/node/index.js';

var vite_config_default = defineConfig({
  plugins: [
    tsconfigPaths(),
    react(),
    legacy(),
    checker({
      // e.g. use TypeScript check
      typescript: true,
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  },
});
export { vite_config_default as default };
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvam9hY29pYW5udXp6aS9kZXYvZm9vZC13YXN0ZS1hcHAvYXBwXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvam9hY29pYW5udXp6aS9kZXYvZm9vZC13YXN0ZS1hcHAvYXBwL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9qb2Fjb2lhbm51enppL2Rldi9mb29kLXdhc3RlLWFwcC9hcHAvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgbGVnYWN5IGZyb20gJ0B2aXRlanMvcGx1Z2luLWxlZ2FjeSc7XG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgY2hlY2tlciBmcm9tICd2aXRlLXBsdWdpbi1jaGVja2VyJztcbmltcG9ydCB0c2NvbmZpZ1BhdGhzIGZyb20gJ3ZpdGUtdHNjb25maWctcGF0aHMnO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHRzY29uZmlnUGF0aHMoKSxcbiAgICByZWFjdCgpLFxuICAgIGxlZ2FjeSgpLFxuICAgIGNoZWNrZXIoe1xuICAgICAgLy8gZS5nLiB1c2UgVHlwZVNjcmlwdCBjaGVja1xuICAgICAgdHlwZXNjcmlwdDogdHJ1ZSxcbiAgICB9KSxcbiAgXSxcbiAgdGVzdDoge1xuICAgIGdsb2JhbHM6IHRydWUsXG4gICAgZW52aXJvbm1lbnQ6ICdqc2RvbScsXG4gICAgc2V0dXBGaWxlczogJy4vc3JjL3NldHVwVGVzdHMudHMnLFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW1ULE9BQU8sWUFBWTtBQUN0VSxPQUFPLFdBQVc7QUFDbEIsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxhQUFhO0FBQ3BCLE9BQU8sbUJBQW1CO0FBRzFCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLGNBQWM7QUFBQSxJQUNkLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLFFBQVE7QUFBQTtBQUFBLE1BRU4sWUFBWTtBQUFBLElBQ2QsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLE1BQU07QUFBQSxJQUNKLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxJQUNiLFlBQVk7QUFBQSxFQUNkO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
