const express = require('express')
const router = express.Router()
let users = require('../users')

const method = require('../middleware/method')
router.use('/metoda', method)

router.get('/', (req, res) => {
    res.json(users)
})

router.get('/:id', (req, res) => {
    const found = users.some(user => user.id === parseInt(req.params.id))
    if (found)
        res.json(users.filter(user => user.id === parseInt(req.params.id)))
    else
        res.status(400).json({msg: `Użytkownik o id ${req.params.id} nie został odnaleziony`})
})

router.post('/', (req, res) => {
    const newUser = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: "aktywny"
    }
    if (!newUser.name || !newUser.email)
        return res.status(400).json({msg: 'Wprowadź poprawne imię i nazwisko oraz email!'})

    users.push(newUser)
    res.json(users)
})

router.put('/:id', (req, res) => {
    const found = users.some(user => user.id === parseInt(req.params.id))
    if (!found)
        return res.status(400).json({msg: `Użytkownik o id ${req.params.id} nie został odnaleziony`})

    const updUser = req.body
    users.forEach(user => {
        if (user.id === parseInt(req.params.id)) {
            user.name = updUser.name ? updUser.name : user.name
            user.email = updUser.email ? updUser.email : user.email
            res.json({msg: 'Dane użytkownika zaktualizowane', user})
        }
    })
})

router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const found = users.some(user => user.id === id)
    if (!found)
        return res.status(400).json({msg: `Użytkownik o id ${req.params.id} nie został odnaleziony`})

    users = users.filter(value => value.id !== id)
    res.json({msg: 'Użytkownik został usunięty', users})
})

module.exports = router