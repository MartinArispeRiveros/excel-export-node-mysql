var bookshelf = require('../commons/bookshelf');

require('./CardAccessType');
require('./ClientRequestsEvent');
require('./EventStateLog');
require('./EventTicketType');
require('./Payment');
require('./Schedule');
require('./Subsidiary');

var Event = bookshelf.Model.extend({
  tableName            : 'event',
  idAttribute          : 'event_id',
  hasTimestamps        : true,
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
