var knex = require('knex')({
  client: 'mysql',
  connection: {
    host     :  'localhost',
    user     :  'root',
    password :  'mysql',
    database :  'actua'
  }
});
