var express = require('express');
var bodyParsers = require('body-parser');
var app =  express();

var port = 3000;


app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParsers.json());
app.use(bodyParsers.urlencoded({extended: true }));
app.get('/', function(req, res) {
	res.render('index', {
		name: 'Johnny Dang'
	});
});
var users = [
	{id: 1, name: 'tom'},
	{id: 2, name: 'crab'}
];
app.get('/users', function(req, res) {
	res.render('users/index', {
		users: users
	});
});
app.get('/users/search', function(req, res ) {
	var q = req.query.q;
	var matchUsers = users.filter(function(user) {
		return user.name.indexOf(q) !== -1;
	});

	res.render('users/index', {
		users: matchUsers
	});
});

app.get('/users/create', function(req, res) {
	res.render('users/create');
});

app.post('/users/create', function(req, res) {
	users.push(req.body);
	res.redirect('/users');
});
app.listen(port, function() {
	console.log('Server is listening to port ' + port);
});