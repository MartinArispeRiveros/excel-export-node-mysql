var bookshelf = require('../db/bookshelf');

require('./client');
require('./event');

var ClientRequestsEvent = bookshelf.Model.extend({
  tableName   : 'client_requests_event',
  idAttribute : 'client_requests_event_id',
  client      : function() {
    return this.belongsTo('Client', 'client_id');
  },
  event       : function() {
    return this.belongsTo('Event', 'event_id');
  }
});

module.exports = bookshelf.model('ClientRequestsEvent', ClientRequestsEvent);
