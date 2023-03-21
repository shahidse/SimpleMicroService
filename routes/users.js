var express = require('express');
const user = require('../controllers/user');
var router = express.Router();

/* GET users listing. */
router.get('/', user);

module.exports = router;
