var bookshelf = require('../db/bookshelf');

require('./clientRequestsEvent');

var Client = bookshelf.Model.extend({
  tableName            : 'client',
  idAttribute          : 'client_id',
  clientRequestsEvents : function() {
    return this.hasMany('ClientRequestsEvent', 'client_id');
  }
});

module.exports = bookshelf.model('Client', Client);
