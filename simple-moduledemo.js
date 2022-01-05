
var http = require('http');
var dt = require('./simple-module');

http.createServer(function (req,res) {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write("The current date and time:"+dt.myDateTime());
    res.write(req.url);
    res.end();
}).listen(8080);