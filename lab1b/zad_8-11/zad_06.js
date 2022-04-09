const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
app.get('/', function(req, res){
    res.send('Szkielet programistyczny Express!')
})
app.get('/about', function(req, res){
    res.send('Autor strony: Dawid Zytko')
})
app.listen(PORT, () => console.log(`Server działa na porcie: ${PORT}`))