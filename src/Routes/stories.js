var express = require('express');
var router = express.Router();
const { getAllStories } = require('../Controllers/Stories')

router.get('', getAllStories)

module.exports = router;