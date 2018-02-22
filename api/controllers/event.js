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

router.get('/:id', function (req, res) {
  EventRepository.getEventById(req.params.id, { withRelated: [ 'eventTicketTypes' ] }).then(function(event) {
    console.log(event.toJSON());
    console.log('//////////////////////////////////////////////////////////');
    res.setHeader('Content-disposition', 'attachment; filename=' + event.get('name') + '.xlsx');
    res.send(ExcelUtils.getBuffer(event.related('eventTicketTypes').toJSON()));
  });
  console.log('Get Event with id : %s', req.params.id);
});

module.exports = router;
