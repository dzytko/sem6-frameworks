const http = require('http')
const url = require('url')
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'})
    let q = url.parse(req.url, true).query
    let a = parseFloat(q.a)
    let b = parseFloat(q.b)
    let c = parseFloat(q.c)
    let p = (a + b + c) / 2
    let area = Math.sqrt(p * (p - a) * (p - b) * (p - c))
    let txt = `<p>Side 1: ${a}</p>` +
        `<p>Side 2: ${b}</p>` +
        `<p>Side 3: ${c}</p>` +
        `<p>Area: ${area}</p>`
    res.end(txt)
}).listen(3000)
