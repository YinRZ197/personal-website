import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages 子路径部署：仓库名为 personal-website，
  // 站点 URL 为 https://yinzr197.github.io/personal-website/
  // 需让构建产物的资源路径带上前缀，否则部署后 JS/CSS 404、页面白屏。
  base: '/personal-website/',
})
