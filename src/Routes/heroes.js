var express = require('express');
var router = express.Router();
const { getAllHeroes } = require('../controllers/Heroes')

router.get('', getAllHeroes)

module.exports = router;
