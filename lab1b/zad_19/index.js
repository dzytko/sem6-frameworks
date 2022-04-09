const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const cookieParser = require('cookie-parser');

app.use(cookieParser())

app.get('/', (req, res) => {
    let visits = req.cookies.visits || 0
    visits++
    res.cookie('visits', visits)
    res.send(`<p>Odwiedziłeś strone ${visits} razy</p>`)
})

app.listen(PORT, () => console.log(`Server działa na porcie: ${PORT}`))