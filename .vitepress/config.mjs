import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'

export default defineConfig({
  srcExclude: ['farmingexperience.github.io/**'],
  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
    }
  },
  title: "Farming Experience",
  description: "Farming Experience is an adventure and farming based modpack that enhances vanilla Minecraft. Explore, build, farm, decorate, and cook with new items, blocks, and structures!",
  head: [
    ['link', { rel: 'icon', href: '/assets/farmingexperience_favicon.png' }],
    ['meta', { name: 'theme-color', content: '#5A821E' }],
    ['meta', { property: 'og:title', content: 'Farming Experience' }],
    ['meta', { property: 'og:description', content: 'Farming Experience is an adventure and farming based modpack that enhances vanilla Minecraft.' }],
    ['meta', { property: 'og:image', content: 'https://farmingexperience.github.io/assets/farmingexperience_1.png' }],
    ['meta', { name: 'twitter:card', content: 'summary' }]
  ],
  sitemap: {
    hostname: 'https://farmingexperience.github.io/'
  },
  themeConfig: {
    search: {
      provider: 'local'
    },
    logo: '/assets/farmingexperience_icon.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Wiki', link: '/wiki/about' },
      { text: 'News & Updates', link: '/posts/' }
    ],
    sidebar: {
      '/wiki/': [
        {
          text: 'Wiki',
          items: [
            { text: 'About', link: '/wiki/about' },
            { text: 'Installation', link: '/wiki/installation' },
            { text: 'Create a Server', link: '/wiki/create_a_server' },
            { text: 'Included Mods', link: '/wiki/included_mods' },
            { text: 'Feedback & Suggestions', link: '/wiki/feedback' },
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/axperty/farmingexperience' },
      { icon: 'discord', link: 'https://discord.gg/e2BQx4bbsU' }
    ],
    footer: {
      message: 'Not an official Minecraft product. Not approved by or associated with Mojang or Microsoft. All other trademarks and logos are property of their respective owners.',
      copyright: 'Copyright © 2026 Axperty.'
    }
  }
})
