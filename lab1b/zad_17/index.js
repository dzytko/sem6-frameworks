const http = require('http')
const fs = require('fs')
const path = require('path');
const port = process.env.PORT || 3000

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


http.createServer((req, res) => {
    switch (req.url) {
        case '/index1':
            serveFile(res, 'views/index1.html', 'text/html')
            break;
        case '/index2':
            serveFile(res, 'views/index2.html', 'text/html')
            break;
        case '/index3':
            serveFile(res, 'views/index3.html', 'text/html')
            break;
        default:
            res.statusCode = 404
            res.end("File not found")
    }
}).listen(port)

server.listen(port, () =>
    console.log(getDate() + ` === Serwer zostaje uruchomiony na porcie ${port}.`)
)