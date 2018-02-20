var bookshelf = require('./knex');

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
  event      : function() {
    return this.belongsTo(Event, 'event_id');
  }
});

var Event = bookshelf.Model.extend({
  tableName       : 'event',
  idAttribute     : 'event_id',
  cardAccessTypes : function() {
    return this.hasMany(CardAccessType, 'card_access_id');
  }
});
  

// example
CardAccessType.where({card_access_type_id: 2}).fetch({withRelated: ['event']}).then(function(cardAccessType) {
  console.log(cardAccessType.related('event').toJSON());
});
