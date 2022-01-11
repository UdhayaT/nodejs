var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var http = require('http').Server(app)
var io = require('socket.io')(http)


app.use(express.static(__dirname))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

var messages = [
    {name:"TheOne", message:"We're watching you!"},
    {name:"Black Cat", message:"Deja Vu. is it?"}
]

app.get('/message', (req, res) => {
    res.send(messages)
})

app.post('/message', (req, res) => {
    //console.log(req.body)
    messages.push(req.body)
    console.log(messages)
    io.emit('message',req.body)
    res.sendStatus(200)
})

io.on('connection',(socket) => {
    console.log('user here')
})

var server = http.listen(3000, () => {
    console.log("server is listening at port:"+server.address().port)
})