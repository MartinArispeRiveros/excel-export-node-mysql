var express = require('express');
var router  = express.Router();

var ArtistRepository = require('../repositories/ArtistRepository');
var Artist           = require('../models/Artist');
var Excel            = require('../helpers/Excel');

router.get('/', function (req, res) {
  ArtistRepository.getAllArtists().then(function(collection) {
    res.setHeader('Content-disposition', 'attachment; filename=Artist.xlsx');
    res.send(Excel.getBuffer(collection.toJSON()));
  });
  console.log('Table Artist to excel');
});

module.exports = router;
