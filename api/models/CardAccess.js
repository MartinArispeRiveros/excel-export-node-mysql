var bookshelf = require('../commons/bookshelf');

var CardAccess = bookshelf.Model.extend({
  tableName     : 'card_access',
  idAttribute   : 'card_access_id',
  hasTimestamps : true
});

module.exports = bookshelf.model('CardAccess', CardAccess);
