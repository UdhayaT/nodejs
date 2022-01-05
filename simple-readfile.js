
var http = require('http');
var dt = require('./simple-module');

//Split query url
var url = require('url');

//read file
var fs = require('fs')
http.createServer(function (req,res) {
    fs.readFile ('demofile.txt',function(err,data){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write(data);
        return res.end();
    });

    fs.appendFile ('demofile_new.txt','<!-- final line-->', function(err){
        if(err) throw err;
        console.log('Saved!');
    });
}).listen(8080);