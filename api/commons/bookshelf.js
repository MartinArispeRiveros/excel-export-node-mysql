var configDB  = require('../../knexfile');
var knex      = require('knex')(configDB);
var bookshelf = require('bookshelf')(knex);

bookshelf.plugin('registry');

module.exports = bookshelf;
