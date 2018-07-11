var Q = require('q');
var path = require('path');
var express = require('express');
var Twiter = require('./server/social/twitter');
var app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'client', 'views'))

app.get('/', function (req, res) {
  return new Q('Hand Talk')
    .then(Twiter.search)
    .then(function (data) {
      return res.render('embeds/twitter', { twits: data });
    });
});

app.get('/embed', function (req, res) {
  res.render('embeds/twitter');
})

app.listen(3000, function () {
  console.log('Server Online!');
});