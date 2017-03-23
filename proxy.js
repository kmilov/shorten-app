const express     = require('express')
const bodyParser  = require('body-parser')
const fetch       = require('node-fetch')
const proxy       = express()
const Datastore   = require('nedb')
const TimeAgo     = require('time-ago')()

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
          shortcode: data.shortcode,
          startDate: null,
          lastSeenDate: null,
          rStartDate: null,
          redirectCount: 0
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
  let _shortcode = req.params.shortcode
  fetch(`${API_URL}${_shortcode}/stats`)
    .then(response => response.json())
    .then(data => {
      let newData = Object.assign({}, data, {
          shortcode: _shortcode,
          rStartDate: TimeAgo.ago(new Date(data.lastSeenDate))
        })

      db.update(
          { shortcode: _shortcode },
          {
              $set: {
                startDate: newData.startDate,
                rStartDate: newData.rStartDate,
                lastSeenDate: newData.lastSeenDate,
                redirectCount: newData.redirectCount
              }
          },
          { multi: true },
          function (err, numReplaced) {
            res.json(newData)
          }
      )
    })
    .catch((error) => {
      console.error(`Error fetching ${API_URL}${_shortcode}/stats`, error)
      res.json(error)
    })
})

// Bind router to main proxy instance
proxy.use('/', router)

// export the magic!
module.exports = proxy
