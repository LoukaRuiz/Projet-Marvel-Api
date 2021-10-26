require('dotenv').config()
const env = process.env
const path = require('path')
const express = require('express')
const axios = require('axios')
const app = express()

const heroes = require('./Routes/heroes')
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public/'))
app.use(express.json({ limit: '50MB' }))

axios.defaults.baseURL = env.API
const params = {
  apikey: env.API_KEY,
  ts: env.TS,
  hash: env.HASH,
  limit: env.LIMITGET
}
axios.defaults.params = params

app.use('/heroes/', heroes)

app.get('/', (req, res) => {
  res.render('home', { message: 'Welcome folks!' })
})

app.listen(env.PORT, () => console.log(`Listening on ${env.PORT}`))
