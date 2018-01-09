/**
 * ajax 服务路由集合
 */
const router = require('koa-router')({
    prefix: '/weapp'
})
const controllers = require('../controllers')

// 从 sdk 中取出中间件
// 这里展示如何使用 Koa 中间件完成登录态的颁发与验证
// const { auth: { authorizationMiddleware, validationMiddleware } } = require('../qcloud')

router.get('/article', controllers.article)
// 代理访问图片
router.get('/img', controllers.imgProxy)
router.get('/env', function (ctx) {
    ctx.body = process.env
})

module.exports = router
