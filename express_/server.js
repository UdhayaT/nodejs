var express = require('express')
var app = express()


app.use(express.static(__dirname))

var messages = [
    {name:"TheOne", message:"We're watching you!"},
    {name:"Black Cat", message:"Deja Vu. is it?"}
]

app.get('/message', (req, res) => {
    res.send(messages)
})

var server = app.listen(3000, () => {
    console.log("server is listening at port:"+server.address().port)
})