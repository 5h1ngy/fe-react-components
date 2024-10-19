import _ from "lodash";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { jsonX } from 'vite-plugin-jsonx';

import dynamicImport from 'vite-plugin-dynamic-import'
import path from 'path'

/** @type {import('vite').UserConfig} */
export default defineConfig({
  root: path.resolve(__dirname, 'src'),
  base: "./",
  publicDir: path.resolve(__dirname, 'public'),
  plugins: [
    react(),
    jsonX(),
    dynamicImport(),
    {
      name: "markdown-loader",
      transform(code, id) {
        if (id.slice(-3) === ".md") {
          // For .md files, get the raw content
          return `export default ${JSON.stringify(code)};`;
        }
      }
    },
  ],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src', 'components'),
      '@pages': path.resolve(__dirname, 'src', 'pages'),
      '@theme': path.resolve(__dirname, 'src', 'theme'),
      '@icons': path.resolve(__dirname, 'src', 'icons'),
    },
  }
})
