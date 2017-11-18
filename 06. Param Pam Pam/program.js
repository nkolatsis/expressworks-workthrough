var express = require("express")
var crypto = require("crypto")

var app = express()
app.listen(process.argv[2])
app.put("/message/:id", (req, res) => {
    var hash = crypto
        .createHash("sha1")
        .update(new Date().toDateString() + req.params.id)
        .digest("hex")
    res.end(hash)
})