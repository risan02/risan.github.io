import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: 'httpd://risann.cn',  //你网站的URL
  favicon: "",	// 网页图标链接
  lang: 'zh-CN',  //默认语言
  title: "Risan's Blog | Risan的小站",  //网站标题
  subtitle: 'Be water my friend',//网站副标题
  author: {
    name: 'Risan',//博主名称
    avatar: "/images/avatar.png",	//头像链接
    status: {
      emoji: '🤔'	,// 头像旁边的emoji
      message: 'emmmm'
    },
  },
  
  description: "Risan's blog",  //简介
  social: [
    {
      name: 'RSS',
      link: '/atom.xml',  //这个是博客自带的RSS订阅，尽量留着，方便其他博友为你订阅
      icon: 'i-ri-rss-line',
      color: 'orange',
    },
    {
      name: 'GitHub',
      link: '',  //这里填写你的GitHub地址，不需要的话删除此字段即可
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    {
      name: '网易云音乐',
      link: '',  //这里填写你的网易云音乐地址，不需要的话删除此字段即可
      icon: 'i-ri-netease-cloud-music-line',
      color: '#C20C0C',
    },
    {
      name: '哔哩哔哩',
      link: 'https://space.bilibili.com/268619071?spm_id_from=333.788.0.0',  //这里填写你的BiliBili地址，不需要的话删除此字段即可
      icon: 'i-ri-bilibili-line',
      color: '#FF8EB3',
    },
    {
      name: 'Twitter',
      link: '',  //这里填写你的Twitter地址，不需要的话删除此字段即可
      icon: 'i-ri-twitter-x-fill',
      color: 'black',
    },
    {
      name: 'E-Mail',
      link: 'mailto:risan2002@163.com', //这里在mailto后面填写你的Email地址，不需要的话删除此字段即可
      icon: 'i-ri-mail-line',
      color: '#8E71C1',
    },
  ],

  search: {
    enable: true,
  },
    comment: {
      enable: true
    },
    statistics: {
      enable: true,
      readTime: {
        /**
         * 阅读速度
         */
        speed: {
          cn: 300,
          en: 200,
        },
      },
    },

  sponsor: {
    enable: true,
    title: '我很可爱，请给我钱！',
    methods: [
      {
        name: '支付宝',
        url: '', //这里填写你的支付宝收款码图片链接
        color: '#00A3EE',
        icon: 'i-ri-alipay-line',
      },
      {
        name: '微信支付',
        url: '',//这里填写你的微信收款码图片链接
        color: '#2DC100',
        icon: 'i-ri-wechat-pay-line',
      },
    ],
  },
})