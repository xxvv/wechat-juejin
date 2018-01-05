let axios = require('axios')
let cheerio = require('cheerio')
let wxParse = require('../tools/wxParse/html2json')

function htmlDecode (str) { 
    // 一般可以先转换为标准 unicode 格式（有需要就添加：当返回的数据呈现太多\\\u 之类的时）
    str = unescape(str.replace(/\\u/g, '%u'))
    // 再对实体符进行转义
    // 有 x 则表示是16进制，$1 就是匹配是否有 x，$2 就是匹配出的第二个括号捕获到的内容，将 $2 以对应进制表示转换
    str = str.replace(/&#(x)?(\w+);/g, function ($, $1, $2) {
        return String.fromCharCode(parseInt($2, $1 ? 16 : 10))
    })
    return str
}

module.exports = async (ctx) => {
    let res = await axios.get(ctx.query.art_url)
    let $ = cheerio.load(res.data, {decodeEntities: false})
    let html = $('.container.entry-view').eq(1).html()
    // html = '<pre><code class="hljs html" lang="html"><span class="hljs-tag">&lt;<span class="hljs-name">link</span> <span class="hljs-attr">rel</span>=<span class="hljs-string">"preload"</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"test.jpg"</span>&gt;</span></code></pre>'
    ctx.state.data = wxParse.html2json(`<div class="entry-view">${html}</div>`)
}
