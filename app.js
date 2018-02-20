var express = require('express');
var app     = express();
var router  = require('./controllers');

app.use(router);

app.listen(3000, function() {
  console.log('Listening on port 3000...');
});
