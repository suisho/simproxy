#!/usr/bin/env node

var program = require("commander")

program
  .usage('[options] url')
  .option('-p, --port [port]', 'Set port num (default:2000)', 2000)
  .parse(process.argv)

var connect = require("connect")
var http = require('http');
var request = require("request")

var root = program.args[0]
var port = program.port

console.log("Start proxy server")
console.log("root="+root)
console.log("port="+port)
console.log("you can access to http://localhost:"+port)
var app = connect().use(function(req, res){
  var url = root + req.url
  request.get(url).pipe(res)
})

http.createServer(app).listen(port);
