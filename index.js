var express = require('express');
var app =  express();

var port = 3000;

app.get('/', function(request, response) {
	response.send('<h1>ello world</h1>');
});
app.listen(port, function() {
	console.log('Server is listening to port ' + port);
});