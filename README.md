# vuework

> lzwvue

sass的安装
1、安装sass的依赖包
npm install --save-dev sass-loader
//sass-loader依赖于node-sass
npm install --save-dev node-sass

解决 $ npm install node-sass --save-dev 失败的问题

$  npm install --save node-sass --registry=https://registry.npm.taobao.org --disturl=https://npm.taobao.org/dist --sass-binary-site=http://npm.taobao.org/mirrors/node-sass

2、在build文件夹下的webpack.base.conf.js的rules里面添加配置

{
  test: /\.sass$/,
  loaders: ['style', 'css', 'sass']
}
3、在APP.vue中修改style标签

<style lang="scss">
4、然后运行项目
$ npm run dev

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
