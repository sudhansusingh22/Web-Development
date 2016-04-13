var parser = require('./lib/parser')
var express = require("express")
var app = express()
parser.getNames();
app.get('/',function(request,response){
	response.send('Hello world with Express!');
});
var server = app.listen(3000, function(){
	var port = server.address().port;
	console.log('Example app listenning at port %s',port);
});