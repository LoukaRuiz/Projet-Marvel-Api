var express = require('express');
var router = express.Router();
const { getAllComics } = require('../controllers/comics.js')

router.get('/', getAllComics)

module.exports = router;
