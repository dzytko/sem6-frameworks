const http = require('http')
const fs = require('fs')
const path = require('path');
const port = process.env.PORT || 3000
const getDate = require('./getDate')

function serveFile(res, fileName, contentType) {
    const filePath = path.join(__dirname, fileName)
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.statusCode = 404
            return res.end("File not found")
        }
    })

    console.log(`${getDate()} --- Klient wysłał zapytanie o plik ${fileName}`)
    res.writeHead(200, {'Content-Type': contentType})
    res.end(data)
}

const server = http.createServer((req, res) => {
    switch (req) {
        case '/scripts/script.js':
            serveFile(res, 'scripts/script.js', 'text/javascript')
            break
        case '/styles/css/style.css':
            serveFile(res, 'styles/css/style.css', 'text/css')
            break
        case '/index.html':
            serveFile(res, 'index.html', 'text/html')
            break
    }
})

server.listen(port, () =>
    console.log(getDate() + ` === Serwer zostaje uruchomiony na porcie ${port}.`)
)