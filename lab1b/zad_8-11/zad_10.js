const express = require('express')
const http = require('http')
const path = require('path')
const app = express()
app.use(express.urlencoded({
    extended: true
}))
app.get("/", (req, res) => {
    res.send("Żądanie GET")
})
app.get("/form", (req, res) => {
    res.sendFile(path.join(__dirname, "form.html"))
})
app.post("/form", (req, res) => {
    let username = req.body.username
    let password = req.body.password

    if (!username.length || !password.length)
        res.send("Uzupelnij dane")
    res.send("Użytkownik: " + username + "<br>Hasło: " + password)
})
app.listen(3000)