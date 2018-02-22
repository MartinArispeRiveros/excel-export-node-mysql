var express = require('express');
var router  = express.Router();

var Artist  = require('../models/artist');
var Excel   = require('../helpers/Excel');

router.get('/', function(req, res) {
  Artist.collection().fetch().then(function(collection) {
    res.setHeader('Content-disposition', 'attachment; filename=Artist.xlsx');
    res.send(Excel.getBuffer(collection.toJSON()));
    console.log('Table Artist to excel');
  });
});

module.exports = router;
