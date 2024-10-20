import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { DevTools } from '@guiiai/core'
import Vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import VueRouter from 'unplugin-vue-router/vite'
import { defineConfig } from 'vite'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${join(__dirname, 'src')}/`,
    },
  },
  plugins: [
    VueRouter(),
    Vue(),
    UnoCSS(),
    DevTools(),
  ],
})
