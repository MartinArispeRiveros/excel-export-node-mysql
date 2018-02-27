var bookshelf = require('../commons/bookshelf');

require('./EventTicketType');
require('./Invoice');
require('./TicketAccessLog');

var Ticket = bookshelf.Model.extend({
  tableName        : 'ticket',
  idAttribute      : 'ticket_id',
  hasTimestamps    : true,
  eventTicketType  : function() {
    return this.belongsTo('EventTicketType', 'event_ticket_type_id');
  },
  invoice          : function() {
    return this.belongsTo('Invoice', 'invoice_id');
  },
  ticketAccessLogs : function() {
    return this.hasMany('TicketAccessLog', 'ticket_id');
  }
});

module.exports = bookshelf.model('Ticket', Ticket);
