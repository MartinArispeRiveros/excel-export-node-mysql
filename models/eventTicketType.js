var bookshelf = require('../db/bookshelf');

require('./event');
require('./ticket');

var EventTicketType = bookshelf.Model.extend({
  tableName   : 'event_ticket_type',
  idAttribute : 'event_ticket_type_id',
  event       : function() {
    return this.belongsTo('Event', 'event_id');
  },
  tickets     : function() {
    return this.hasMany('Ticket', 'event_ticket_type_id');
  }
});

module.exports = bookshelf.model('EventTicketType', EventTicketType);
