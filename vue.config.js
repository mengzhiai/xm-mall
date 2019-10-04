const path = require("path");


module.exports = {
    publicPath: './', // 默认'/'，部署应用包时的基本 URL
    outputDir: 'dist', // 'dist', 生产环境构建文件的目录
    assetsDir: '', // 相对于outputDir的静态资源(js、css、img、fonts)目录
    lintOnSave: false,
    runtimeCompiler: true, // 是否使用包含运行时编译器的 Vue 构建版本
    productionSourceMap: false, // 生产环境的 source map
    devServer: {
        // overlay: {
        //   warnings: true,
        //   errors: true
        // },
        open: true,
        host: 'localhost',
        port: 8080,
        https: false,
        hotOnly: false,
        proxy: {
            '/api': {
                target: "http://localhost:3000",
                changeOrigin: true,
                ws: true, // proxy websockets
                pathRewrite: { //重写路径
                    "^/api": ''
                }
            }
        }
    }
};