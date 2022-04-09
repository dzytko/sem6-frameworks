const express = require('express')
const http = require('http')
const path = require('path')
const {check, validationResult} = require('express-validator')
const app = express()

app.use(express.urlencoded({
    extended: true
}))
app.get("/form1", (req, res) => {
    res.sendFile(path.join(__dirname, "form1.html"))
})
app.post("/form1", [
    check('nazwisko')
        .trim()
        .stripLow()
        .bail()
        .isLength({min: 3, max: 25}).withMessage('Last name length must be between 2 and 26 characters')
        .matches(/^[A-Za-z\s]+$/).withMessage('Invalid character')
        .customSanitizer(value => {
            return value.charAt(0)
        }),
    check('email')
        .trim()
        .StripLow()
        .bail()
        .normalizeEmail()
        .isEmail()
        .withMessage('Wrong email'),
    check('wiek')
        .trim()
        .StripLow()
        .bail()
        .isInt({min: 0, max: 110})
        .withMessage('Age must be between 0 and 110')
], (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json({errors: errors.array()})
    }
    const nazwisko = req.body.nazwisko
    const email = req.body.email
    const wiek = req.body.wiek
    res.send("Użytkownik: " + nazwisko + "<br>Email: " + email + "<br>Wiek: " + wiek)
})
app.listen(3000)