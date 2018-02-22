var express = require('express');
var router  = express.Router();

router.use('/api/v1/artist', require('./artist'));
router.use('/api/v1/event', require('./event'));

router.get('/', function(req, res) {
  console.log('Welcome to Home Page');
});

module.exports = router;
