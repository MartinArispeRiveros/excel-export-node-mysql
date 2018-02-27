var bookshelf = require('../commons/bookshelf');

require('./User');

var UserIdentification = bookshelf.Model.extend({
  tableName     : 'user_identification',
  idAttribute   : 'user_identification_id',
  hasTimestamps : true,
  user          : function() {
    return this.belongsTo('User', 'user_id');
  }
});

module.exports = bookshelf.model('UserIdentification', UserIdentification);
