var bookshelf = require('../db/bookshelf');

require('./User');

var UserIdentification = bookshelf.Model.extend({
  tableName   : 'user_identification',
  idAttribute : 'user_identification_id',
  user        : function() {
    return this.belongsTo('User', 'user_id');
  }
});

module.exports = bookshelf.model('UserIdentification', UserIdentification);
