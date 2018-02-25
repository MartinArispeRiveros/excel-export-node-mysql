var configDB  = require('../../knexfile');
var knex      = require('knex')(configDB);

module.exports = knex;
