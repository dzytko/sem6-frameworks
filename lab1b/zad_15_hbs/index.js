const express = require('express')
const path = require('path')
const {check, validationResult} = require('express-validator')
const app = express()

const port = 3000

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

app.use(
    express.urlencoded({extended: true}),
)

app.get('/about', (req, res) => {
    res.render('about', {name: 'Jan'})
})

app.get("/form", (req, res) => {
    res.render('form')
})

app.post("/form", [
    check('surname')
        .trim()
        .stripLow()
        .bail()
        .isLength({min: 3, max: 25})
        .withMessage('Nazwisko musi mieć od 3 do 25 znaków'),
    check('email')
        .trim()
        .stripLow()
        .isEmail()
        .bail()
        .normalizeEmail()
        .withMessage('Email nie jest poprawny'),
    check('age')
        .trim()
        .stripLow()
        .isInt({min: 0, max: 150})
        .bail()
        .withMessage('Wiek nie jest poprawny'),
], (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty())
        return res.status(422).json({errors: errors.array()})

    const surname = req.body.surname
    const email = req.body.email
    const age = req.body.age

    res.render('info', {surname: surname, email: email, age: age})
})

app.listen(port, () => console.log(`Server started on port ${port}`))