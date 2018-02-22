var bookshelf = require('../db/bookshelf');

require('./Subsidiary');
require('./UserIdentification');

var User = bookshelf.Model.extend({
  tableName           : 'user',
  idAttribute         : 'user_id',
  subsidiary          : function() {
    return this.belongsTo('Subsidiary', 'subsidiary_id');
  },
  userIdentifications : function() {
    return this.hasMany('UserIdentification', 'user_id');
  }
});

module.exports = bookshelf.model('User', User);
