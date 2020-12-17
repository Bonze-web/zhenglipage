const path = require("path");
function resolve(dir) {
    return path.join(__dirname, dir);
}
module.exports = {
    lintOnSave: false,
    pluginOptions: {
        'style-resources-loader': {
          preProcessor: 'less',
          patterns: [path.resolve(__dirname, 'src/assets/less/page.less')]
        }
    },
    chainWebpack: config => {
        config.resolve.alias
          .set("@", resolve("src"))
          .set("assets", resolve("src/assets"))
    },
}