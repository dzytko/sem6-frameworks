const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const routes = require('./api/routes')

app.use(express.json())
app.use('/api/users', routes)
app.listen(PORT, () => console.log(`Server działa na porcie: ${PORT}`))