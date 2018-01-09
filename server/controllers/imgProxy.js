let axios = require('axios')

module.exports = async (ctx) => {
    let res = await axios({
        method: 'get',
        url: ctx.query.img_url,
        responseType: 'stream'
    })
    ctx.set('Content-Type', res.headers['content-type'])
    ctx.body = res.data
}
