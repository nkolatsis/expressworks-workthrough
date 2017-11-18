var express = require("express")
var bodyparser = require("body-parser")

var app = express()
app.use(bodyparser.urlencoded({extended: false}))

app.get("/form", (req, res) => {
    res.write("<form><input name='str'/></form>")
    res.end()
})
app.post("/form", (req, res) => {
    res.end(req.body.str.split("").reverse().join(""))
})


app.listen(process.argv[2])