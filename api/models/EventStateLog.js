var bookshelf = require('../db/bookshelf');

require('./Event');

var EventStateLog = bookshelf.Model.extend({
  tableName   : 'event_state_log',
  idAttribute : 'event_state_log_id',
  event       : function() {
    return this.belongsTo('Event', 'event_id');
  }
});

module.exports = bookshelf.model('EventStateLog', EventStateLog);
