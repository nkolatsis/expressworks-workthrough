var express = require("express")
var fs = require("fs")

var app = express()
app.listen(process.argv[2])

app.get("/books", (req, res) => {
    fs.readFile(process.argv[3], (err, data) => {
        if (err) throw err;
        var books = JSON.parse(data)
        res.json(books)
        res.end()
    })
})