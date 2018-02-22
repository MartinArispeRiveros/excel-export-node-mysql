var bookshelf = require('../commons/bookshelf');

require('./Ticket');

var TicketAccessLog = bookshelf.Model.extend({
  tableName   : 'ticket_access_log',
  idAttribute : 'ticket_access_log_id',
  ticket      : function() {
    return this.belongsTo('Ticket', 'ticket_id');
  }
});

module.exports = bookshelf.model('TicketAccessLog', TicketAccessLog);
