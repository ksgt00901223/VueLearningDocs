module.exports = {
  title: '学习手册',
  description: '永远不要只满足于世界的表象，要敢于探寻未知的可能。',
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    // ['link', { rel: 'icon', href: '/blog/img/favicon.ico' }] // 增加一个自定义的 favicon(网页标签的图标)
  ],
  dest: '../docs',
  base: '/', // 这是部署到github相关的配置 下面会讲
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      // { text: '文章', link: '/article/' },
      // { text: '类别', link: '/category' },
      // { text: '归档', link: '/timeline' },
      // { text: '我', link: '/poor' }
      {
        text: '博客',
        items: [
          {
            text: 'github',
            link: 'https://ksgt00901223.github.io/blog/'
          },
          {
            text: 'gitee',
            link: 'https://ksgt00901223.gitee.io/blog'
          }
        ]
      },
      {
        text: '首页',
        items: [
          {
            text: 'github',
            link: 'https://github.com/ksgt00901223/learningDocs'
          },
          {
            text: 'gitee',
            link: 'https://gitee.com/ksgt00901223/learningDocs'
          }
        ]
      }
    ],
    // sidebar: [
    //   ['/article/', '文章'],
    //   ['/category', '类别'],
    //   ['/timeline', '归档'],
    //   ['/poor', '我'],
    // ],
    activeHeaderLinks: false,
    sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: '上次更新', // 文档更新时间：每个文件git最后提交的时间
    serviceWorker: {
      updatePopup: true, // Boolean | Object, 默认值是 undefined.
      // 如果设置为 true, 默认的文本配置将是:
      updatePopup: {
        message: '有新内容.',
        buttonText: '刷新'
      }
    }
  }
}
