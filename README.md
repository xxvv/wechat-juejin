# 微信小程序-掘金文章

> 使用了腾讯云服务器，参数已经配置好了。
> [如何配置](https://github.com/tencentyun/wafer2-quickstart-nodejs)
> 配置prod.env没有用


## 开发环境
- nodejs > `v7.6.0`
- wepy > `v1.6.0`
- koa > `latest`

## 安装
### 1、clone
``` bash
git clone https://github.com/xxvv/wechat-juejin.git
```
### 2、安装package
``` bash
// 安装wepy的运行环境
cd /path/to/wechat-juejin
yarn 或 npm i
// 安装服务器运行环境
cd /path/to/wechat-juejin/server
yarn 或 npm i
```

### 3、启动
``` bash
// 启动wepy
cd /path/to/wechat-juejin
npm run dev
// 启动服务器
cd /path/to/wechat-juejin/server
nodemon
```


## 功能列表
#### 1、显示文章列表
#### 2、显示文章信息，后台获取文章解析[wxParse](https://github.com/icindy/wxParse)  
#### 3、代理图片显示

## todo
### 2、代码显示美化
### 3、兼容更多类型，现在只能是`post`
