// server.js
// server for checker-tron-2000

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
  console.log('responded to GET / with index.html ');
});

app.get('/move', function(req, res) {
  console.log('req.body = ', req.body);
  res.send("Made your move");
  console.log('responded to GET /move with "Made your move" ');
});

app.listen(3000, function(){
  console.log("Checker-Tron Server here, ready to serve gamers");
});