import type { UserThemeConfig } from 'valaxy-theme-yun'
import { defineValaxyConfig } from 'valaxy'


// 这两行均需要安装对应的插件，详情请查看Valaxy开发文档
// import { addonTwikoo } from 'valaxy-addon-twikoo'  // 接入Twikoo评论系统
// import { addonMeting } from 'valaxy-addon-meting'  // 添加Meting音乐播放器
// add icons what you will need

const safelist = [
  'i-ri-home-line',
]

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts

  // 保留你的Vite配置（关键：GitHub Pages路径和编码设置）
  vite: {
    base: '/risan.github.io/', // 基础路径配置
    // 解决编码问题：指定服务器响应头
    server: {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
      },
    },
    // 构建配置
    build: {
      chunkSizeWarningLimit: 1000,
    },
  },

  theme: 'yun',

  themeConfig: {
    banner: {
      enable: true,
      title: '無限进步',
    },
    pages: [
      {
        name: '网络世界的小伙伴们',
        url: '/links/',
        icon: 'i-ri-open-arm-line',
        color: 'hotpink',
      },
      {
        name: '感情故事',
        url: '/girls/',
        icon: 'i-ri-heart-3-line',
        color: 'hotpink',
      },
      {
        name: '分类',
        url: '/categories/',
        icon: 'i-ri-apps-line',
        color: 'dodgerblue',
      },
      {
        name: '标签',
        url: '/tags/',
        icon: 'i-ri-bookmark-3-line',
        color: 'dodgerblue',
      },
    ],
    colors: {
      primary: "#D69B54",
    },
    footer: {
      since: 2023,
      powered: true,
      beian: {
        enable: true,
        icp: '',
      },
    },
    bg_image: {
      enable: false,
      url: "",
      dark: "",
    },
    fireworks: {  
      enable: true,
      colors: ['#FFE57D', '#FFCD88', '#E6F4AD']
    },
  },
  unocss: { safelist },
  siteConfig: {
    comment: {
      enable: true
    },
  },
  // 设置 valaxy-addon-twikoo 配置项
  // addons: [
  //   addonTwikoo({ 
  //     envId: '', // 自建服务地址
  //   }),
  // ],
})