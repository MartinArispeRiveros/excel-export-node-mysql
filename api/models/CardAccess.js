var bookshelf = require('../db/bookshelf');

var CardAccess = bookshelf.Model.extend({
  tableName   : 'card_access',
  idAttribute : 'card_access_id'
});

module.exports = bookshelf.model('CardAccess', CardAccess);
