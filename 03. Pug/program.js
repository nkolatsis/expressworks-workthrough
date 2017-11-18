var express = require("express")

console.log(__dirname)
var app = express()
app.set("views", __dirname)
app.set("view engine", "pug")
app.get("/home", (req, res) => {
    res.render("index", {date: new Date().toDateString()})
})
app.listen(process.argv[2])