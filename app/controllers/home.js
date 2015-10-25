var express = require('express'),
  router = express.Router(),
  Note = require('../models/note');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
    res.render('index');
});

router.get('/api/notes', function (req, res, next) {
  var data = [
    new Note({title:"This is a test", description: "lorem ipsum"}), 
    new Note({title:"and something cool", description: "blah blah blah blah"})
  ];
  res.send(data);
});
