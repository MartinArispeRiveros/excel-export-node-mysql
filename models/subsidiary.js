var bookshelf = require('../db/bookshelf');

require('./event');
require('./user');

var Subsidiary = bookshelf.Model.extend({
  tableName   : 'subsidiary',
  idAttribute : 'subsidiary_id',
  event       : function() {
    return this.belongsTo('Event', 'event_id');
  },
  users       : function() {
    return this.hasMany('User', 'subsidiary_id');
  }
});

module.exports = bookshelf.model('Subsidiary', Subsidiary);
