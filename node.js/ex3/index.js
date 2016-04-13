var parser = require('./lib/parser')
var express = require("express")
var app = express()
var names = parser.getNames();
var message = "Hello from ";
names.forEach(function(name){
	message = message + name + ' ' ;
});

app.get('/',function(request,response){
	response.send(message);
});
var server = app.listen(3000, function(){
	var port = server.address().port;
	console.log('Example app listenning at port %s',port);
});