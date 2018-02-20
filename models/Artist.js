var bookshelf = require('../db/bookshelf');

var Artist = bookshelf.Model.extend({
  tableName   : 'artist',
  idAttribute : 'artist_id'
});

module.exports = Artist;
