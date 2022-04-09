const express = require('express')
const app = express()

const port = 3000

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.get('/about', (req, res) => {
    res.render('about', {surname: 'Jan', email: 'email@domain.com', age: 23})
})

app.listen(port, () => console.log(`Server started on port ${port}`))