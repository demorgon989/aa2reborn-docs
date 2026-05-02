import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AA2Reborn Docs",
  base: '/',
  description: "AA2Reborn Docs",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'Documentation',
        items: [
          { text: 'Game installation', link: '/game-installation' },
          { text: 'Setting up a dedicated server', link: '/server-docs' }
        ]
      }
    ],
  }
})
