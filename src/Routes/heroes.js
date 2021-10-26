var express = require('express');
var router = express.Router();
const { getAllHeroes } = require('../Controllers/Heroes')

router.get('', getAllHeroes)

module.exports = router;