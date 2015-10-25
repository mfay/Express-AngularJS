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
    new Note({title:"This is a test", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque risus quis lacinia elementum. Quisque ac hendrerit lacus. Quisque auctor pulvinar ex et lobortis. Nullam auctor at dolor ac convallis. Mauris in faucibus dolor. Sed ut viverra sem, in maximus odio. Mauris cursus posuere felis ac accumsan. Donec ultricies ligula eget sapien mollis, eu dapibus turpis laoreet. Cras pharetra elit eu orci interdum, et suscipit ipsum tristique. "}), 
    new Note({title:"and something cool", description: "Aenean sed odio arcu. Nulla non suscipit justo, id gravida urna. Nulla lacus nunc, finibus ac sollicitudin nec, ornare vitae metus. Nam bibendum quam et neque viverra lacinia. Fusce a consectetur mauris, eget volutpat mauris. Suspendisse potenti. Cras molestie ipsum eu rutrum sollicitudin. Fusce laoreet placerat laoreet. Duis rutrum imperdiet semper. Quisque ultricies tellus sit amet arcu consectetur fringilla. "})
  ];
  res.send(data);
});
