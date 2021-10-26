 
const Router = require ('express');
const router = new Router();

const getStories = require('../Controllers/getStoriesController');
const getStories = new getStories()


app.get('../Controllers/getStoriesController', (req, res) => {
    res.render('getStories')
  })


export default router;