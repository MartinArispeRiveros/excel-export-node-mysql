var knex      = require('./knex');
var bookshelf = require('bookshelf')(knex);

var Artist = bookshelf.Model.extend({
  tableName   : 'artist',
  idAttribute : 'artist_id',
  schedules   : function() {
    return this.hasMany(Schedule, 'artist_id');
  }
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
  idAttribute : 'dosage_id',
  invoices    : function() {
    return this.hasMany(Invoice, 'dosage_id')
  }
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
  },
  payments             : function() {
    return this.hasMany(Payment, 'event_id');
  },
  schedules            : function() {
    return this.hasMany(Schedule, 'event_id');
  },
  subsidiarys          : function() {
    return this.hasMany(Subsidiary, 'event_id');
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
  },
  tickets     : function() {
    return this.hasMany(Ticket, 'event_ticket_type_id');
  }
});

var Invoice = bookshelf.Model.extend({
  tableName   : 'invoice',
  idAttribute : 'invoice_id',
  dosage      : function() {
    return this.belongsTo(Dosage, 'dosage_id');
  },
  tickets     : function() {
    return this.hasMany(Ticket, 'invoice_id');
  }
});

var Payment = bookshelf.Model.extend({
  tableName   : 'payment',
  idAttribute : 'payment_id',
  event       : function() {
    return this.belongsTo(Event, 'event_id');
  }
});

var Schedule = bookshelf.Model.extend({
  tableName   : 'schedule',
  idAttribute : 'schedule_id',
  artist      : function() {
    return this.belongsTo(Artist, 'artist_id');
  },
  event       : function() {
    return this.belongsTo(Event, 'event_id');
  }
});

var Subsidiary = bookshelf.Model.extend({
  tableName   : 'subsidiary',
  idAttribute : 'subsidiary_id',
  event       : function() {
    return this.belongsTo(Event, 'event_id');
  },
  users       : function() {
    return this.hasMany(User, 'subsidiary_id');
  }
});

var Ticket = bookshelf.Model.extend({
  tableName        : 'ticket',
  idAttribute      : 'ticket_id',
  eventTicketType  : function() {
    return this.belongsTo(EventTicketType, 'event_ticket_type_id');
  },
  invoice          : function() {
    return this.belongsTo(Invoice, 'invoice_id');
  },
  ticketAccessLogs : function() {
    return this.hasMany(TicketAccessLog, 'ticket_id');
  }
});

var TicketAccessLog = bookshelf.Model.extend({
  tableName   : 'ticket_access_log',
  idAttribute : 'ticket_access_log_id',
  ticket      : function() {
    return this.belongsTo(Ticket, 'ticket_id');
  }
});

var User = bookshelf.Model.extend({
  tableName           : 'user',
  idAttribute         : 'user_id',
  subsidiary          : function() {
    return this.belongsTo(Subsidiary, 'subsidiary_id');
  },
  userIdentifications : function() {
    return this.hasMany(UserIdentification, 'user_id');
  }
});

var UserIdentification = bookshelf.Model.extend({
  tableName   : 'user_identification',
  idAttribute : 'user_identification_id',
  user        : function() {
    return this.belongsTo(User, 'user_id');
  }
});

module.exports = {
  Artist              : Artist,
  CardAccess          : CardAccess,
  CardAccessType      : CardAccessType,
  Client              : Client,
  ClientRequestsEvent : ClientRequestsEvent,
  ConfigTicket        : ConfigTicket,
  Dosage              : Dosage,
  Event               : Event,
  EventStateLog       : EventStateLog,
  EventTicketType     : EventTicketType,
  Invoice             : Invoice,
  Payment             : Payment,
  Schedule            : Schedule,
  Subsidiary          : Subsidiary,
  Ticket              : Ticket,
  TicketAccessLog     : TicketAccessLog,
  User                : User,
  UserIdentification  : UserIdentification
}

// example
/*Event.where({event_id: 1}).fetch({withRelated: ['subsidiarys']}).then(function(event) {
  console.log(event.related('subsidiarys').toJSON());
});
*/