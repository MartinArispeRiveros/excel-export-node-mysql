var express = require('express');
var router  = express.Router();

router.use('/api/v1/event', require('./event'));

module.exports = router;
