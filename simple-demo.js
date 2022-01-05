fs = require('fs');

data = fs.readdirSync('/home/utrn/projects');
console.log('data', data);

console.log("this comes after");

http = require('http')

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!');
}).listen(8080);