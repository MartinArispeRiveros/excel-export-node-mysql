var bookshelf = require('./knex');

var Artist = bookshelf.Model.extend({
  tableName: 'Artist'
});

var CardAccess = bookshelf.Model.extend({
  tableName: 'card_access'
})

// example
Artist.where('artist_id', 1).fetch().then(function(user) {
  console.log(user.toJSON());
});
