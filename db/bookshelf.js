var knex      = require('./knex');
var bookshelf = require('bookshelf')(knex);

bookshelf.plugin('registry');

module.exports = bookshelf;

// example
/*Event.where({event_id: 1}).fetch({withRelated: ['subsidiarys']}).then(function(event) {
  console.log(event.related('subsidiarys').toJSON());
});
*/