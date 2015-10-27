

var express = require('express'),
  config = require('./config/config');

var app = express();  
  
var  server = require('http').Server(app),
  io = require('socket.io')(server);

require('./config/express')(app, config);

require('./app/controllers/socketio')(io, config);

server.listen(config.port, function () {
  console.log('Express server listening on port ' + config.port);
});

