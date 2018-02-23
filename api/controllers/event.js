var express = require('express');
var router  = express.Router();

var EventRepository = require('../repositories/EventRepository');
var ExcelUtils      = require('../helpers/ExcelUtils');
var EventTicketType = require('../models/EventTicketType');

router.get('/', function (req, res) {
  EventRepository.getAllEvents().then(function(collection) {
    res.setHeader('Content-disposition', 'attachment; filename=Event.xlsx');
    res.send(ExcelUtils.getBuffer(collection.toJSON()));
  });
  console.log('Table Event to excel');
});

router.get('/:id', function (req, res) {
  /*EventRepository.getAllEventTicketAccessLogInfoById(req.params.id).then(function(collection) {
    res.setHeader('Content-disposition', 'attachment; filename=Event.xlsx');
    res.send(ExcelUtils.getBuffer(collection.toJSON()));
  });*/

  EventRepository.getEventById(req.params.id, { withRelated: [ 'eventTicketTypes.tickets.ticketAccessLogs' ] }).then(function(event) {
    return event.related('eventTicketTypes'); 
  }).then(function(eventTicketTypes) {
    var tickets = EventTicketType.Collection().forge();
    eventTicketTypes.forEach(function(eventTicketType) {
      tickets.add(eventTicketType.related('tickets'));
    });
    return tickets;
  }).then(function(tickets) {
    //var ticketAccessLogs = [];
    //tickets.forEach(function(ticket) {
    //  ticketAccessLogs = ticketAccessLogs.concat(ticket.related('ticketAccessLogs').toJSON());
    //});
    return tickets;
  }).then(function(ticketAccessLogs) {
    res.send(ticketAccessLogs);
  });

  console.log('Get Event with id : %s', req.params.id);
});

module.exports = router;
