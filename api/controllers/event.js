var express = require('express');
var router  = express.Router();

var EventRepository  = require('../repositories/EventRepository');
var ExcelUtils       = require('../helpers/ExcelUtils');

router.get('/', function (req, res) {
  Events.getAllEvents().then(function(collection) {
    res.setHeader('Content-disposition', 'attachment; filename=Event.xlsx');
    res.send(ExcelUtils.getBuffer(collection.toJSON()));
  });
  console.log('Table Event to excel');
});

router.get('/:id', function (req, res) {
  EventRepository.getEventById(req.params.id).then(function(event) {
    res.setHeader('Content-disposition', 'attachment; filename=' + event.get('name') + '.xlsx');
    return EventRepository.getAllEventTicketAccessLogInfoByEvent(event);
  }).then(function(collection) {
    res.send(ExcelUtils.getBuffer(collection.toJSON()));
  });

  /*EventRepository.getEventById(req.params.id, { withRelated: [ 'eventTicketTypes.tickets.ticketAccessLogs' ] }).then(function(event) {
    res.setHeader('Content-disposition', 'attachment; filename=' + event.get('name') + 'Event.xlsx');
    return event.related('eventTicketTypes');
  }).then(function(eventTicketTypes) {
    var tickets = Tickets.forge();
    eventTicketTypes.forEach(eventTicketType => {
      eventTicketType
        .related('tickets')
        .forEach(ticket => {
          tickets.push(ticket)
        });
    });
    return tickets;
  }).then(function(tickets) {
    var ticketAccessLogs = TicketAccessLogs.forge();
    tickets.forEach(ticket => {
      ticket
        .related('ticketAccessLogs')
        .forEach(ticketAccessLog => {
          ticketAccessLogs.push(ticketAccessLog);
        });
    });
    return ticketAccessLogs;
  }).then(function(ticketAccessLogs) {
    res.send(ExcelUtils.getBuffer(ticketAccessLogs.toJSON()));
  });*/

  console.log('Get Event with id : %s', req.params.id);
});

module.exports = router;
