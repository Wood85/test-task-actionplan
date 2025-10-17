import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

const aliasList = [
  'app',
  'components',
  'config',
  'lib',
  'styles',
  'services',
  'app-types',
  'utils'
];

const alias = aliasList.reduce(
  (acc, name) => {
    const dir = name === 'app-types' ? 'src/types' : `src/${name}`;
    acc[`@${name}`] = path.resolve(__dirname, dir);
    return acc;
  },
  {} as Record<string, string>
);

// https://vite.dev/config/
export default defineConfig({
  server: {
    fs: {}
  },
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']]
      }
    })
  ],
  resolve: {
    alias
  },
  css: {
    devSourcemap: true
  },
  build: {
    rollupOptions: {
      treeshake: true
    }
  }
});
