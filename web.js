var express = require('express');
var routes = require('./routes');

var app = express();

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.engine('html', require('ejs').renderFile);
});

app.get('/', routes.index);
app.get('/fbChannel', routes.fbChannel);

var port = process.env.PORT || 5000;

app.listen(port, function(){
  console.log("Listening on " + port);
});