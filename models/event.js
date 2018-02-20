var bookshelf = require('../db/bookshelf');

require('./cardAccessType');
require('./clientRequestsEvent');
require('./eventStateLog');
require('./eventTicketType');
require('./payment');
require('./schedule');
require('./subsidiary');

var Event = bookshelf.Model.extend({
  tableName            : 'event',
  idAttribute          : 'event_id',
  cardAccessTypes      : function() {
    return this.hasMany('CardAccessType', 'event_id');
  },
  clientRequestsEvents : function() {
    return this.hasMany('ClientRequestsEvent', 'event_id');
  },
  eventStateLogs       : function() {
    return this.hasMany('EventStateLog', 'event_id');
  },
  eventTicketTypes     : function() {
    return this.hasMany('EventTicketType', 'event_id');
  },
  payments             : function() {
    return this.hasMany('Payment', 'event_id');
  },
  schedules            : function() {
    return this.hasMany('Schedule', 'event_id');
  },
  subsidiarys          : function() {
    return this.hasMany('Subsidiary', 'event_id');
  }
});

module.exports = bookshelf.model('Event', Event);
