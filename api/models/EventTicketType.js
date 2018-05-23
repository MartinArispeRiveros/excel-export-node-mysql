var bookshelf = require('../commons/bookshelf');

require('./Event');
require('./Ticket');
require('./TicketAccessLog');

var EventTicketType = bookshelf.Model.extend({
  tableName     : 'event_ticket_type',
  idAttribute   : 'event_ticket_type_id',
  hasTimestamps : true,
  event         : function() {
    return this.belongsTo('Event', 'event_id');
  },
  tickets       : function() {
    return this.hasMany('Ticket', 'event_ticket_type_id');
  },
  ticketAccessLogs : function() {
    return this
      .hasMany('TicketAccessLog', 'event_ticket_type_id')
      .through('Ticket', 'ticket_id');
  }
});

module.exports = bookshelf.model('EventTicketType', EventTicketType);
