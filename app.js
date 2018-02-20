var router  = require('./controllers');
var express = require('express');
var app     = express();

app.use(router);

app.listen(3000, function() {
  console.log('Listening on port 3000...');
});
