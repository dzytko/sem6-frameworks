const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    const toRad = req.query.toRad
    const value = req.query.value
    if (toRad)
        res.send(`${value} radianów to ${value * 180 / Math.PI} stopni`)
    else
        res.send(`${value} stopni to ${value * Math.PI / 180} radianów`)

})


app.listen(PORT, () => console.log(`Server działa na porcie: ${PORT}`))