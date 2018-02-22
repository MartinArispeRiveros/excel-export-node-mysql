var bookshelf = require('../commons/bookshelf');

require('./Event');

var CardAccessType = bookshelf.Model.extend({
  tableName   : 'card_access_type',
  idAttribute : 'card_access_type_id',
  event       : function() {
    return this.belongsTo('Event', 'event_id');
  }
});

module.exports = bookshelf.model('CardAccessType', CardAccessType);
