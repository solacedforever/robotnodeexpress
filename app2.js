const express = require('express');
const app = express();
const data = require ('./data.js');
const mustacheExpress = require ('mustache-express');

app.use(express.static('public'));
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.get('/index', function (request, response) {
  response.render('index', {users: data.users});
});
app.get('/a_robot', function (request, response) {
  response.render('a_robot', {users: data.users});
});
app.get('/robot/:username', function (request, response) {
  let robot = data.users.find(function(slave) {
    return slave.username.toLowerCase() === request.params.username;
  });
  response.render('a_robot' , {robot: robot});
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
