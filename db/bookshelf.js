var bookshelf = require('./knex');

var Artist = bookshelf.Model.extend({
  tableName: 'Artist'
});


// example
Artist.where('artist_id', 1).fetch().then(function(user) {
  console.log(user.toJSON());
});
