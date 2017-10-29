# webpack-多頁應用

> A modern multiple pages cli Webpack3 (based on [vue-cli](https://github.com/vuejs/vue-cli))

## 使用 budle 工具

1. [Webpack3](https://github.com/webpack/webpack)

#### Init Project

``` bash
$ npm install -g vue-cli
$ vue init Leeboyd/webpack-mutipages-scaffold new-project
$ cd new-project
$ npm install
```

## devServer

``` bash
# serve with hot reload at localhost:8080
npm run dev
```

visit [http://localhost:8080/good-ideas/view.html](http://localhost:8080/good-ideas/view.html)

## Build

``` bash
# build for production with minification
npm run build // Firstly
node server.js  // Secondly

```
Then visit the pages
[http://localhost:8081/good-ideas/view.html](http://localhost:8081/good-ideas/view.html)

## Root Folder Structure

```bash
├── src  # main folder
│   ├── assets  # common assets folder
│   │   ├── img
│   │   │   └── favicon.ico
│   │   ├── js
│   │   └── css
│   ├── components # common components folder (原預計使用 .vue components)
│   │   └── 
│   └── pages  # pages
│       ├── good-ideas  # good-ideas part (folder name can be customized)
│       │   └── view # view.html (folder name can be customized)
│       │       ├── app.js   # entry js (file name can't be customized unless you change the webpack.config.js)
│       │       ├── 
│       │       └── app.html # template html (file name can't be customized unless you change the webpack.config.js)
├── LICENSE
├── .babelrc          # babel config (es2015 default)
├── server.js         # port 8081
├── package.json
├── webpack.config.js
└── README.md
```

## 參考資料
- [vue-multiple-pages](https://github.com/Plortinus/vue-multiple-pages)
- [vue-cli](https://github.com/vuejs/vue-cli)