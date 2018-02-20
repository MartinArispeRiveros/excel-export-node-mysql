var express = require("express");
var app     = express();
var xlsx    = require('node-xlsx').default;
var dp      = require('./db/bookshelf');

app.get('/api/v1/Artist',function(req, res) {
  dp.Artist.collection().fetch().then(function(collection) {
    var rows = collection.toJSON();
    var data = [];
    for (var index = 0; index < rows.length; index++) {
      var dataRow = [];
      for(var value in rows[index]) {
        dataRow.push(rows[index][value]);
      }
      data.push(dataRow);
    }
    var buffer = xlsx.build([{name: "main", data: data}]);
    res.setHeader('Content-disposition', 'attachment; filename=Artist.xlsx');
    res.send(buffer);
    console.log('Table Artist to excel');
  });
});


app.listen(3000);
