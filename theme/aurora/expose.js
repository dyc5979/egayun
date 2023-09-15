var ExposeConfig = {
  extraMenus: [
    {
      groupTitle: '其他项目', // 大标题文本 （如需支持多语言，请在zh-CN.js、zh-TW.js、en-US.js中配置多语言文本）
      groupLinks: [
        {
          menuTitle: '加入TG群组-未开放', // 标题文本
          menuIcon: 'wechat-logo', // 图标：https://phosphoricons.com/ 自选
          menuPath: '', // 链接地址
          needSubscribe: false, // true：需要订阅后才能查看 false：无需订阅即可查看
          isExternal: true // true：打开新窗口 false：内嵌
        },
        {
          menuTitle: 'IOS共享账号-未开放',
          menuIcon: 'book-open-text',
          menuPath: '',
          needSubscribe: true,
          isExternal: false
        }
      ]
    }
  ]
}
