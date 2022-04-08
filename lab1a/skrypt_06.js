const http = require("http")
const hostname = "localhost"
const port = 3000
const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader("Content-Type", "text/html")
    res.end(
        "<h1>Aplikacja w node</h1>" +
        "<h3>To jest odpowiedz HTML</h3>" +
        "<h3>1.</h3>" +
        "<h3>2.</h3>" +
        "<h3>3.</h3>"
    )
})
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})