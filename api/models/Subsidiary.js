var bookshelf = require('../commons/bookshelf');

require('./Event');
require('./User');

var Subsidiary = bookshelf.Model.extend({
  tableName     : 'subsidiary',
  idAttribute   : 'subsidiary_id',
  hasTimestamps : true,
  event         : function() {
    return this.belongsTo('Event', 'event_id');
  },
  users         : function() {
    return this.hasMany('User', 'subsidiary_id');
  }
});

module.exports = bookshelf.model('Subsidiary', Subsidiary);
