var bookshelf = require('../commons/bookshelf');

var ConfigTicket = bookshelf.Model.extend({
  tableName   : 'config_ticket',
  idAttribute : 'config_ticket_id'
});

module.exports = bookshelf.model('ConfigTicket', ConfigTicket);
