const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

let method = (req, res, next) => {
    console.log("Metoda: " + req.method)
    console.log("Ścieżka: " + req.protocol + "://" + req.get('host') + req.originalUrl)
    res.send("Metoda: " + req.method)
    next()
}
app.use('/', method)

app.post('/', (req, res) => {

})

app.put('/', (req, res) => {

})

app.delete('/', (req, res) => {

})

app.listen(PORT, () => console.log(`Server działa na porcie: ${PORT}`))