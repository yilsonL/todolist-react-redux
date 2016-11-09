var express = require('express');
var path = require('path');
var compression = require('compression');

var app = express();

app.use(compression());

app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next){
  if(req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 7000;

app.listen(PORT, function () {
  console.log('Express server running at localhost:' + PORT);
});
