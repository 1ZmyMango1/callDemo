const port = 9090

module.exports = {
  // 默认部署在服务器根目录，不是根目录调整样式
  publicPath: '/',
  // 文件打包路径
  outputDir:'dist',
  // 文件打吧路径下的静态资源放置目录
  assetsDir:'assets',
  // 指定生成的 index.html 的输出路径 (相对于 outputDir)
  indexPath:'index.html',
  // 生成静态资源文件是否加hash命名
  filenameHashing:true,
  // 构建多页面应用，页面的配置
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'test',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },
  // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码
  lintOnSave: process.env.NODE_ENV !== 'production',
  // 开发环境服务器设置
  devServer: {
    port: port,
    open: true,
    hot:true,
    overlay: {
      warnings: false,
      errors: true
    },
    // 配置跨域处理
    disableHostCheck: true,
    proxy: {
      '/api': {
        target: 'http://121.40.224.41:58/',
        changeOrigin: true,
        ws: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        // pathRewrite: {
        //   ['^' + process.env.VUE_APP_BASE_API]: ''
        // }
      }
    }
  }

  //   // 改变主题颜色
  // css: {
  //   loaderOptions: {
  //     less: {
  //       // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
  //       lessOptions: {
  //         modifyVars: {
  //           // 直接覆盖变量
  //           'text-color': '#F55E68',
  //           'border-color': '#F55E68',
  //           // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
  //           hack: `true; @import "your-less-file-path.less";`,
  //         },
  //       },
  //     },
  //   },
  // },
}