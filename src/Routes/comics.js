var express = require('express');
var router = express.Router();
const { getAllComics } = require('../Controllers/comics.js')

router.get('', getAllComics)

module.exports = router;
