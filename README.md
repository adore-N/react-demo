# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 介绍
适合想用`react，ts`写法开发手机端h5的项目基于`react17.0.1`。状态管理`react-redux`。路由是`react-router`。

### 手机适配方案
适配上我选择了`viewport`的方案可参考
[如何在Vue项目中使用vw实现移动端适配](https://www.w3cplus.com/mobile/vw-layout-in-vue.html)

[再聊移动端页面的适配](https://www.w3cplus.com/css/vw-for-layout.html)

### ui组建
项目引入的组件库是
[antd-mobile](https://mobile.ant.design/zh)

### 数据请求
这边对[axios](https://github.com/axios/axios)中的post以及get等方法进行了一些封装。以及拦截器做好了配置，只需加入一些特定的处理。常用的`loading`已经加入。我们项目中还会选择在拦截器中做统一报错处理。

### 脚手架修改问题
1. 加入了env 应用,修改了env.js。匹配多环境。
2. webpack.config.js 对proxy修改，弃用creat-react-app自带的。将需要proxy的放到 `config/proxy.js`中。


# 记录几个问题
## 一、safair浏览器兼容问题
### 1.input 去掉默认样式。
```css
 input {
   border: 0px;
   outline: none;
 }
```
### 2.image 显示不出 因为Viewport Units Buggyfill的原因。
```css
  img {
    content: normal !important;
  }
```

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run start
```

### Compiles and minifies for production
```
yarn run build
```

### Compiles and minifies for sit
```
yarn run build:sit
```

### Compiles and minifies for uat
```
yarn run build:uat
```

