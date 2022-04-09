let method = (req, res, next) => {
    console.log("Metoda: " + req.method)
    console.log("Ścieżka: " + req.protocol + "://" + req.get('host') + req.originalUrl)
    res.send("Metoda: " + req.method)
    next()
}

module.exports = method