const getComics = require('../controllers/ComicsController')

const Router = require('express')

const router = new Router();

router.route('/Comics')
    .get(getComics);

export default router;



