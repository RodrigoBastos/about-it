var Q = require('q');
var path = require('path');
var express = require('express');
var Twiter = require('./server/social/twitter');
var app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'client', 'views'));

app.get('/search/twitter', function (req, res) {
  var q = req.query.q;

  if (!q) return res.send("Adiciona o parâmetro 'q' na requisição");

  return new Q(q)
    .then(Twiter.search)
    .then(function (data) {
      return res.render('embeds/twitter', { twits: data });
    });
})

app.listen(3000, function () {
  console.log('Server Online!');
});