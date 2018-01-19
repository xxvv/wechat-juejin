let axios = require('axios')
let cheerio = require('cheerio')
let wxParse = require('../tools/wxParse/html2json')

module.exports = async (ctx) => {
    let res = await axios.get(ctx.query.art_url)
    let $ = cheerio.load(res.data, {decodeEntities: false})
    let html = $('.container.entry-view').eq(1).html()
    ctx.state.data = wxParse.html2json(`<div class="entry-view">${html.replace(/<<span class="hljs-name">/g, '<span class="hljs-name">﹤</span>')}</div>`)
    // ctx.state.data = `<div class="entry-view">${html}</div>`
}
