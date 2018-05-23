var express    = require('express');
var router     = express.Router();
var Event      = require('../models/Event');
var ExcelUtils = require('../helpers/ExcelUtils');
var DateUtils  = require('../helpers/DateUtils');

const EXCEL_HEADER = [
  `Owner`,
  `Type`,
  `Ticket's Validation Date`,
  `Ticket's Validation Hour`,
  `Gate`,
  `Created By`,
  `Created At`,
  `Ticket's ID`,
  'Card Access ID'
];

function generateExcelRow(ticketAccessLog, type) {
  return [
    ticketAccessLog.related('ticket').get('owner_name'),
    type,
    DateUtils.formatDate( ticketAccessLog.get('ticket_validation_date') ),
    DateUtils.formatTime( ticketAccessLog.get('ticket_validation_date') ),
    ticketAccessLog.get('gate'),
    ticketAccessLog.get('created_by'),
    DateUtils.formatDateTime( ticketAccessLog.get('created_at') ),
    ticketAccessLog.get('ticket_id'),
    ticketAccessLog.get('card_access_id')    
  ]
}

router.get('/:id', function (req, res) {
  var selectedEvent;
  var excel_table = [ EXCEL_HEADER ];
  Event.where('event_id', req.params.id).fetch( { withRelated: ['eventTicketTypes.ticketAccessLogs.ticket', 'cardAccessTypes.ticketAccessLogs.ticket']} ).then(function(event) {
    selectedEvent = event;
    return selectedEvent.related('eventTicketTypes');
  }).then(function(eventTicketTypes) {      
    
    eventTicketTypes.forEach(function(eventTicketType) {
      var event_ticket_type_type = eventTicketType.get('type');
      var ticketAccessLogs = eventTicketType.related('ticketAccessLogs');
      ticketAccessLogs.forEach(function(ticketAccessLog) {
        excel_table.push(
          generateExcelRow(ticketAccessLog, event_ticket_type_type)
        );
      });
    });
    return selectedEvent.related('cardAccessTypes');
  
  }).then(function(cardAccessTypes) {
    
    cardAccessTypes.forEach(function(cardAccessType) {
      var card_access_type_type = cardAccessType.get('name');
      var ticketAccessLogs = cardAccessType.related('ticketAccessLogs');
      ticketAccessLogs.forEach(function(ticketAccessLog) {
        excel_table.push(
          generateExcelRow(ticketAccessLog, card_access_type_type)
        );
      });
    });
    return excel_table;

  }).then(function(excelTable) {
    
    res.setHeader('Content-disposition', `attachment; filename=${selectedEvent.get('name')}.xlsx`);
    res.send(ExcelUtils.createExcel(excelTable));
  
  })
});

module.exports = router;
