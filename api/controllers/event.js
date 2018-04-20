var express = require('express');
var router  = express.Router();

var EventRepository = require('../repositories/EventRepository');
var ExcelUtils      = require('../helpers/ExcelUtils');

router.get('/', function (req, res) {
  Events.getAllEvents().then(function(collection) {
    res.setHeader('Content-disposition', 'attachment; filename=Event.xlsx');
    res.send(ExcelUtils.getBuffer(collection.toJSON()));
  });
  console.log('Table Event to excel');
});

router.get('/:id', function (req, res) {
  var ticketAccessLogs = [];
  var globalEvent = null;
  EventRepository.getEventById(req.params.id).then(function(event) {
    res.setHeader('Content-disposition', 'attachment; filename=' + event.get('name') + '.xlsx');
    globalEvent = event;
    return EventRepository.getAllEventTicketAccessLogInfoByEvent(event);
  }).then(function(collection) {
    ticketAccessLogs = ExcelUtils.jsonToArray(collection.toJSON());
    return EventRepository.getAllEventCardAccessLogInfoByEvent(globalEvent);
  }).then(function(collection) {
    var cardAccessLogs = ExcelUtils.jsonToArray(collection.toJSON());
    res.send(
      ExcelUtils.getBuffer(
        ticketAccessLogs.concat(cardAccessLogs),
        [
          `Owner`,
          `Type`,
          `Ticket's Validation Date`,
          `Gate`,
          `Created By`,
          `Created At`,
          `Ticket's ID`,
          'Card Access ID'
        ]
      )
    );
  });

  console.log('Get Event with id : %s', req.params.id);
});

module.exports = router;
