import type { UserThemeConfig } from 'valaxy-theme-yun'
import { defineValaxyConfig } from 'valaxy'


// 这两行均需要安装对应的插件，详情请查看Valaxy开发文档
// import { addonTwikoo } from 'valaxy-addon-twikoo'  // 接入Twikoo评论系统
// import { addonMeting } from 'valaxy-addon-meting'  // 添加Meting音乐播放器

// 添加需要用到的图标
const safelist = [
  'i-ri-home-line',
]

/**
 * 用户配置
 */
export default defineValaxyConfig<UserThemeConfig>({
  // 站点配置参考 site.config.ts

  theme: 'yun',

  // 关键修改：base 属于 vite 配置的子项
  vite: {
    base: '/risan.github.io/'  // 放在这里即可解决类型错误
  },

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
