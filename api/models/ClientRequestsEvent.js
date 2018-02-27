var bookshelf = require('../commons/bookshelf');

require('./Client');
require('./Event');

var ClientRequestsEvent = bookshelf.Model.extend({
  tableName     : 'client_requests_event',
  idAttribute   : 'client_requests_event_id',
  hasTimestamps : true,
  client        : function() {
    return this.belongsTo('Client', 'client_id');
  },
  event         : function() {
    return this.belongsTo('Event', 'event_id');
  }
});

module.exports = bookshelf.model('ClientRequestsEvent', ClientRequestsEvent);
