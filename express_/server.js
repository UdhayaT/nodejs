var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var http = require('http').Server(app)
var io = require('socket.io')(http)
//Mongoose: For connecting with MongoDB
var mongoose = require('mongoose')
const { sendStatus } = require('express/lib/response')


app.use(express.static(__dirname))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

// var messages = [
//     {name:"TheOne", message:"We're watching you!"},
//     {name:"Black Cat", message:"Deja Vu. is it?"}
// ]

var Message = mongoose.model('Message', {
    name: String,
    message: String
})

var dbUrl = "mongodb://localhost:27017"

app.get('/message', (req, res) => {
    Message.find({}, (err, messages) => {
        res.send(messages)
    })
})

app.post('/message', (req, res) => {
    //console.log(req.body)
    var message = new Message(req.body)
    message.save((err) => {
        if(err) 
            sendStatus(500)

        //messages.push(req.body)
        //console.log(messages)
        io.emit('message',req.body)
        res.sendStatus(200)
    })
    
})

io.on('connection',(socket) => {
    console.log('user here')
})

mongoose.connect(dbUrl, (err) => {
    console.log("MongoDB connected")
})

var server = http.listen(3000, () => {
    console.log("server is listening at port:"+server.address().port)
})