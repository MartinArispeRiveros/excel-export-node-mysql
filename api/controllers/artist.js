var express = require('express');
var router  = express.Router();

var ArtistRepository = require('../repositories/ArtistRepository');
var ExcelUtils       = require('../helpers/ExcelUtils');

router.get('/', function (req, res) {
  ArtistRepository.getAllArtists().then(function(collection) {
    res.setHeader('Content-disposition', 'attachment; filename=Artist.xlsx');
    res.send(ExcelUtils.getBuffer(collection.toJSON()));
  });
  console.log('Table Artist to excel');
});

module.exports = router;
