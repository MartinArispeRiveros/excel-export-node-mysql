var bookshelf = require('../db/bookshelf');

require('./Artist');
require('./Event');

var Schedule = bookshelf.Model.extend({
  tableName   : 'schedule',
  idAttribute : 'schedule_id',
  artist      : function() {
    return this.belongsTo('Artist', 'artist_id');
  },
  event       : function() {
    return this.belongsTo('Event', 'event_id');
  }
});

module.exports = bookshelf.model('Schedule', Schedule);
