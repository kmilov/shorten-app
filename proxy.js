const express     = require('express')
const bodyParser  = require('body-parser')
const fetch       = require('node-fetch')
const proxy       = express()
var Datastore     = require('nedb');

const API_URL     = "http://gymia-shorty.herokuapp.com/"
const API_HEADERS = {"Content-Type": "application/json"}
const port        = 3000
var db            = new Datastore({ filename: __dirname + '/db.json', autoload: true });

proxy.use(bodyParser.urlencoded({extended: true}))
proxy.use(bodyParser.json())


// Main route
const router = express.Router()

// path "/" return the list of shortened urls
router.get('/', (req, res) => {
  db.find({}, function (err, docs) {
    res.json(docs)
  });
})

// path "/delete" delete the shortened URLs in the DB
router.get('/delete', (req, res) => {
  db.find({}, function (err, docs) {
    db.remove({}, { multi: true }, function (err, numRemoved) {
      res.json({removed: numRemoved})
    });
  });
})


// path  /shorten, proxy to the gymia-shorty.herokuapp.com/shorten
// then save to neDB
router.route('/shorten').post((req, res) => {
    let _url = req.body.url
    fetch(API_URL+`/shorten`,{
        method: 'POST',
        headers: API_HEADERS,
        body: JSON.stringify({ "url": _url })
      })
      .then(response => response.json())
      .then(data => {
        let _link = {
          link: _url,
          shortcode: data.shortcode
        }
        db.insert(_link, function (err, newDoc) {
          // return with the shortcode and the created _id
          res.json(Object.assign({},_link, {_id: newDoc._id}))
        });
      })
      .catch((error)=> res.json(error))
})

// path to /:shorcode/stats, proxy to the gymia-shorty.herokuapp.com/:shortcode/stats
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
