var express = require('express');
var router  = express.Router();

var EventRepository = require('../repositories/EventRepository');
var ExcelUtils      = require('../helpers/ExcelUtils');

router.get('/', function (req, res) {
  EventRepository.getAllEvents().then(function(collection) {
    res.setHeader('Content-disposition', 'attachment; filename=Event.xlsx');
    res.send(ExcelUtils.getBuffer(collection.toJSON()));
  });
  console.log('Table Event to excel');
});



module.exports = router;
