const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    let bg = req.query.bg || '#ffffff'
    res.send(`
        <style>
            body {
                background-color: ${bg};
            }
        </style>
    `)
})

app.listen(PORT, () => console.log(`Server działa na porcie: ${PORT}`))