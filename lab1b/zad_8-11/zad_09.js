var express = require('express')
var port = 3000
var app = express()
app.get('/name/:imie', function (request, response) {
    response.status(200)
    response.set('Content-Type', 'text/html')
    response.end('<html><body>' + '<h1>Cześć ' + request.params.imie + '</h1>' + '</body></html>'
    )
})
app.listen(port, function () {
    console.log('Serwer jest uruchomiony, ' + ' otwórz przeglądarkę i wpisz adres http://localhost:%s',
        port)
})