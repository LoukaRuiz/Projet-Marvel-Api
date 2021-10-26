const path = require('path')
const express = require('express')
const { default: axios } = require('axios')
const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public/'))
app.use(express.json({ limit: '50MB' }));
const API_KEY = 'caf18c107ef554950dde4ffa1ff1a8ae'
app.use(express.json({ limit: '50MB' }));
axios.defaults.baseURL = `https://gateway.marvel.com:443/v1/public`;
axios.defaults.params = { apikey: API_KEY }


app.get('/', (req, res) => {
  res.render('home', { message: 'Welcome folks!' })
})

app.get('/heroes', async (req, res) => {
    
    
      let hereos = await axios.get('characters')
    .catch(function (error) {
      console.log(error);
    });

  [hereos] = await Promise.all(
    hereos.map(async hero => {
      const comics = await axios.get(`characters/${hero.id}/comics`)
      hero.comics = comics
    })
  )

  res.send(hereos) 
});

const port = 3000
app.listen(port, () => console.log(`Listening on ${port}`))