var express = require("express")

var app = express()
app.listen(process.argv[2])

app.get("/search", (req, res) => {
    res.end(JSON.stringify(req.query))
})