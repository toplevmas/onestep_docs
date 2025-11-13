import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/doc/', // 使用相对路径
  title: "爬山虎采集器",
  description: "爬山虎采集器的文档",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'FAQ', link: '/' },
      { text: '采集指南', link: '' }
    ],
 lastUpdated: {
      text: '最后更新于'
    },
    sidebar: [
      {
        text: '开始',
        base: 'guide/',
        items: [
          { text: '概述', link: '/index' },
          { text: '软件安装', link: '/install' },
          { text: '软件界面', link: '/views' },
          { text: '创建第一个任务', link: '/start' }
        ]
      },
       {
        text: '采集指南',
        base: 'guide/',
        items: [
          { text: '采集需要登陆的网站', link: '/needlogin' },
          { text: '采集列表数据', link: '/list' },
          { text: '采集列表+详情页', link: '/multi_page' },
          { text: '采集分页', link: '/pages' },
          { text: '下载图片和附件', link: '/download' },
          { text: '数据处理', link: '/dataproc' },
          { text: '数据过滤', link: '/filter' },
          { text: '使用POST请求', link: '/post' },
          { text: '批量生成网址', link: '/urls' },
          { text: '在页面上自动点击', link: '/action' },
          { text: 'JSON数据采集', link: '/json' },
          { text: '请求截取', link: '/multi_page' },
          { text: '计划任务', link: '/sched' },
          { text: '预置任务', link: '/multi_page' },

        ]
      }, {
        text: '数据导出',
        base: 'guide/',
        items: [
          { text: '导出到文本', link: '/export_to_file' },
          { text: '导出到数据库', link: '/export_to_db' },
          { text: '导出到API', link: '/export_to_api' },

        ]
      }
    ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
