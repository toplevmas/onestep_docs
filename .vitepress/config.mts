import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/doc/', // 使用相对路径
  title: "爬山虎采集器",
  description: "爬山虎采集器的文档",
  themeConfig: {
    logo: { src: 'logo.png', width: 24, height: 24 },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
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
          { text: '采集多级页面', link: '/multi_page' },
          { text: '采集分页', link: '/pages' },
          { text: '下载图片文件', link: '/download' },
          { text: '自定义值', link: '/definedata' },
          { text: '数据处理', link: '/dataproc' },
          { text: '数据过滤', link: '/filter' },
          { text: '取值属性', link: '/attribute' },
          { text: '页面动作', link: '/action' },
          { text: 'POST请求', link: '/post' },
          { text: '批量生成网址', link: '/urls' },
          { text: '计划任务', link: '/sched' },
          { text: 'XPath选择器', link: '/xpath' },

        ]
      }, {
        text: '数据',
        base: 'guide/',
        items: [
          { text: '数据管理', link: '/data' },
          { text: '导出到文本', link: '/export_to_file' },
          { text: '导出到数据库', link: '/export_to_db' },
          { text: '导出到API', link: '/export_to_api' },

        ]
      }
    ],
  }
})
