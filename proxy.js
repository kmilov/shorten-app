const express     = require('express')
const bodyParser  = require('body-parser')
const fetch       = require('node-fetch')
const proxy       = express()
const API_URL     = "http://gymia-shorty.herokuapp.com/"
const API_HEADERS = {"Content-Type": "application/json"}
const port        = 3000

proxy.use(bodyParser.urlencoded({extended: true}))
proxy.use(bodyParser.json())



const router = express.Router()

// handle root path for api/
router.get('/', (req, res) => {
  res.json({message: 'Welcome to the Shooorten API proxy!'})
})

// Handle  calls to /api/shorten, proxy to the gymia-shorty.herokuapp.com/shorten
router.route('/shorten').post((req, res) => {
    let _url = req.body.url
    fetch(API_URL+`/shorten`,{
        method: 'POST',
        headers: API_HEADERS,
        body: JSON.stringify({ "url": _url })
      })
      .then((response) => response.json())
      .then((data) => res.json(data))
      .catch((error)=> res.json(error))
})

// Handle  calls to /:shorcode/stats, proxy to the gymia-shorty.herokuapp.com/:shortcode/stats
router.route("/:shortcode/stats").get((req, res) => {
  fetch(API_URL+`${req.params.shortcode}/stats`)
    .then((response) => response.json())
    .then((data) => res.json(data))
    .catch((error) => res.json(error))
})

// Bind router to main proxy instance
proxy.use('/', router)

// export the magic!

module.exports = proxy
