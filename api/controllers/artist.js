var express = require('express');
var router  = express.Router();

var ArtistRepository = require('../repositories/ArtistRepository');
var Artist           = require('../models/Artist');
var ExcelUtils       = require('../helpers/ExcelUtils');

router.get('/', function (req, res) {
  ArtistRepository.getAllArtists().then(function(collection) {
    res.setHeader('Content-disposition', 'attachment; filename=Artist.xlsx');
    res.send(ExcelUtils.getBuffer(collection.toJSON()));
  });
  console.log('Table Artist to excel');
});

router.get('/:id', function (req, res) {
  ArtistRepository.getArtistById(req.params.id, { withRelated: [ 'getSchedulesToParse' ] }).then(function(collection) {
    console.log(collection.related('eventTicketTypes').toJSON());
  });
});

module.exports = router;
