var express = require('express');
var router = express.Router();
const { getAllStories } = require('../controllers/stories')

router.get('', getAllStories)

module.exports = router;
