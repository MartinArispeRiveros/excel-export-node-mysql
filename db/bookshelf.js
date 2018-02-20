var knex      = require('./knex');
var bookshelf = require('bookshelf')(knex);

var Artist = bookshelf.Model.extend({
  tableName   : 'Artist',
  tableName   : 'artist_id'
});

var CardAccess = bookshelf.Model.extend({
  tableName   : 'card_access',
  idAttribute : 'card_access_id'
});

var CardAccessType = bookshelf.Model.extend({
  tableName   : 'card_access_type',
  idAttribute : 'card_access_type_id',
  event       : function() {
    return this.belongsTo(Event, 'event_id');
  }
});

var Client = bookshelf.Model.extend({
  tableName            : 'client',
  idAttribute          : 'client_id',
  clientRequestsEvents : function() {
    return this.hasMany(ClientRequestsEvent, 'client_id');
  }
});

var ClientRequestsEvent = bookshelf.Model.extend({
  tableName   : 'client_requests_event',
  idAttribute : 'client_requests_event_id',
  client      : function() {
    return this.belongsTo(Client, 'client_id');
  },
  event       : function() {
    return this.belongsTo(Event, 'event_id');
  }
});

var ConfigTicket = bookshelf.Model.extend({
  tableName   : 'config_ticket',
  idAttribute : 'config_ticket_id'
});

var Dosage = bookshelf.Model.extend({
  tableName   : 'dosage',
  idAttribute : 'dosage_id'
});

var Event = bookshelf.Model.extend({
  tableName            : 'event',
  idAttribute          : 'event_id',
  cardAccessTypes      : function() {
    return this.hasMany(CardAccessType, 'event_id');
  },
  clientRequestsEvents : function() {
    return this.hasMany(ClientRequestsEvent, 'event_id');
  },
  eventStateLogs       : function() {
    return this.hasMany(EventStateLog, 'event_id');
  },
  eventTicketTypes     : function() {
    return this.hasMany(EventTicketType, 'event_id');
  }
});

var EventStateLog = bookshelf.Model.extend({
  tableName   : 'event_state_log',
  idAttribute : 'event_state_log_id',
  event       : function() {
    return this.belongsTo(Event, 'event_id');
  }
});

var EventTicketType = bookshelf.Model.extend({
  tableName   : 'event_ticket_type',
  idAttribute : 'event_ticket_type_id',
  event       : function() {
    return this.belongsTo(Event, 'event_id');
  }
});

// example
Event.where({event_id: 1}).fetch({withRelated: ['cardAccessTypes']}).then(function(event) {
  console.log(event.related('cardAccessTypes').toJSON());
});
