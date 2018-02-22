var knex = require('knex')({
  client: 'mysql',
  connection: {
    host     :  'localhost',
    user     :  'root',
    password :  '',
    database :  'actua'
  }
});

module.exports = knex;
