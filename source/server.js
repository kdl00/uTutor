// require
var http = require('http');
var fs = require('fs');
var server = http.createServer(function(request, response){
	fs.readFile('./public' + request.url, function(error, data){		
		if(error) {
			response.writeHead(404);
			response.end('Page not found!');
		}
		else {
			response.writeHead(200);
			console.log("Request received: " + request.url);
			response.end(data);
		}
		
	});
}).listen(8000);