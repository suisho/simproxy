var connect = require("connect")
var http = require('http');
var request = require("request")

var root = "http://google.com"
var port = 2000
var app = connect().use(function(req, res){
  var url = root + req.url
  request.get(url).pipe(res)
})

http.createServer(app).listen(2000);
