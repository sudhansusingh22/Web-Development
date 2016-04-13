var express = require("express")
var winston = require("winston")
var app = express()
app.get('/',function(request,response){
	response.send('Hello world with Express & Winston!');
});
var server = app.listen(3000, function(){
	var port = server.address().port;
	winston.info('Example app listenning at port %s',port);
});