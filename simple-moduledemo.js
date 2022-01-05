
var http = require('http');
var dt = require('./simple-module');

//Split query url
var url = require('url');

http.createServer(function (req,res) {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write("The current date and time:"+dt.myDateTime());
    //res.write(req.url);

    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    res.end(txt);
}).listen(8080);