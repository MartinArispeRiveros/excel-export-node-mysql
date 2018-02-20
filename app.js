var express = require('express');
var app     = express();
var router  = require('./controllers');

app.use(router);

app.listen(3000, function() {
  console.log('Listening on port 3000...');
});

/*var Artist = require('./models/artist');

var Artist2 = require('./models/artist');

Artist.where({artist_id: 1}).fetch({withRelated: ['schedules']}).then(function(event) {
  console.log(event.related('schedules').toJSON());
});*/