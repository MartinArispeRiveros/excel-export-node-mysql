var bookshelf = require('../commons/bookshelf');

require('./Schedule');

var Artist = bookshelf.Model.extend({
  tableName     : 'artist',
  idAttribute   : 'artist_id',
  hasTimestamps : true,
  schedules     : function() {
    return this.hasMany('Schedule', 'artist_id');
  }
});

module.exports = bookshelf.model('Artist', Artist);
