var http = require('http'),
url = require('url'),
querystring = require('querystring');

http.createServer(function(request, response){
	var query = querystring.parse(url.parse(request.url).query|| "");
	response.writeHead(200,{'content-type':"text/plain"});
	response.end("Hello, " +(query.fname+" "+ query.lname || "Anonymous")+"!\n");
}).listen(3000);