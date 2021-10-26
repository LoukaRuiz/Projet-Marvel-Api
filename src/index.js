const path = require('path')
const express = require('express')
const axios = require('axios')
const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public/'))
app.use(express.json({ limit: '50MB' }))
const API_KEY = '6a8ad0913e3b302f2b2a90716ec18a09'
const TS = '1'
const HASH = 'c2566addb3e2479e52f3fa755b3f044c'
app.use(express.json({ limit: '50MB' }))
axios.defaults.baseURL = `https://gateway.marvel.com/v1/public/`
axios.defaults.params = params = {
  apikey: API_KEY,
  ts: TS,
  hash: HASH
}

const port = 3000
app.listen(port, () => console.log(`Listening on ${port}`))