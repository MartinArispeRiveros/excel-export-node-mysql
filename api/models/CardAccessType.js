var bookshelf = require('../commons/bookshelf');

require('./Event');
require('./TicketAccessLog');
require('./CardAccess');

var CardAccessType = bookshelf.Model.extend({
  tableName     : 'card_access_type',
  idAttribute   : 'card_access_type_id',
  hasTimestamps : true,
  event         : function() {
    return this.belongsTo('Event', 'event_id');
  },
  ticketAccessLogs : function() {
    return this
      .hasMany('TicketAccessLog', 'card_access_type_id')
      .through('CardAccess', 'card_access_id');
  }
});

module.exports = bookshelf.model('CardAccessType', CardAccessType);
