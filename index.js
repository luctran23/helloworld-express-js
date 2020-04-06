var express = require('express');
var app =  express();

var port = 3000;

app.get('/', function(request, response) {
	response.send('<h1>Hello world</h1><a href="/users">User List</a>');
});
app.get('/users', function(request, response) {
	response.send('Users list');
})
app.listen(port, function() {
	console.log('Server is listening to port ' + port);
});