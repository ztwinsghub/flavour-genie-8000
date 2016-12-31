// BASE SETUP
// =============================================================================
// Requests are proxyed in from PORT 8080
// Any request none matching on the client will be proxied to us

// call the packages we need
import bodyParser from 'body-parser'
import express from 'express'

// auth dep
// import jwt from 'jsonwebtoken'

// image dep
import cloudinary from 'cloudinary'

// logging dep
import * as fs from 'fs';
import FileStreamRotator from 'file-stream-rotator'
import morgan from 'morgan'
import path from 'path'

// database dep
import mongoose from 'mongoose'

// import db helpers
import {
  extractFlavours,
  extractJuices,
} from './db/helpers'

// import db models
import Flavour from './db/models/flavour'
import Juice from './db/models/juice'

// import search helpers
import { searchJuices } from './search'

// import config
import {
  apiSecret,
  CLOUD_KEY,
  CLOUD_NAME,
  CLOUD_SECRET,
  DB_NAME,
  DB_PASSWORD,
  DB_PORT,
  DB_URL,
  DB_USER,
}
from './config'

// import log directory
const logDirectory = path.join(__dirname, 'log')

// ensure log directory exists
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)

// create a rotating write stream
const accessLogStream = FileStreamRotator.getStream({
  date_format: 'YYYY-MM-DD',
  filename: path.join(logDirectory, 'access-%DATE%.log'),
  frequency: 'daily',
  verbose: false
});

// initialize express
const app = express()

// config cloudinary
cloudinary.config({
  api_key: CLOUD_KEY,
  api_secret: CLOUD_SECRET,
  cloud_name: CLOUD_NAME,
})

// correct mongoose mpromise deprecation warning
mongoose.Promise = global.Promise

// connect to our db
mongoose.connect(`mongodb://${DB_USER}:${DB_PASSWORD}@${DB_URL}.mlab.com:${DB_PORT}/${DB_NAME}`)

// secret variable
app.set('apiSecret', apiSecret)

// set port which api will run on
app.set('port', (process.env.PORT || 8081))

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build/'));

  // serve the client
  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });

  // serve the client
  app.get('/get', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });

}

// ROUTES FOR OUR API
// =============================================================================
const router = express.Router()

// middleware to use for all requests
// log stream with morgan
router.use(morgan('combined', { stream: accessLogStream }))

// accessed at GET http://localhost:8081/api
router.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the Zimmerman Twins Vapour Co Flavour Genie 8000 API'
  })
})

// on routes that end in /flavours
// -----------------------------------------------------------------------------
router.route('/flavours')

  // get all flavours
  .get((req, res) => {

    // get all flavours from database (accessed at GET http://localhost:8081/api/flavours)
    Flavour.find({}, (err, flavours) => {
      if (err) {
        res.send(err)
      }

      // reduce flavours
      const data = extractFlavours(flavours)

      // send flavours back to client
      res.send(data)
    })
  })

  // create a flavour (accessed at POST http://localhost:8081/api/flavours)
  .post((req, res) => {
    const {
      body: {
        name,
      },
    } = req

    // create a new instance of the flavour model
    let flavour = new Flavour()

    flavour.active = false
    flavour.name = name

    // save the flavour and check for errors
    flavour.save((err, flavour) => {
      if (err) {
        res.send(err)
      }

      res.send(flavour)
    })
  })

// on routes that end in /juices
// -----------------------------------------------------------------------------
router.route('/juices')

  // get all juices (accessed at GET http://localhost:8081/api/juices)
  .get((req, res) => {

    // get all juices from database
    Juice.find({}, (err, juices) => {
      if (err) {
        res.send(err)
      }

      // reduce juices
      const data = extractJuices(juices)

      // send juices back to client
      res.send(data)

    })
  })

  // create a juices (accessed at POST http://localhost:8081/api/juices)
  .post((req, res) => {
    const {
      body: {
        brand,
        description,
        flavours,
        name,
      },
    } = req

    // create a new instance of the Juice model
    const juice = new Juice()

    juice.brand = brand
    juice.dateCreated = new Date()
    juice.description = description
    juice.flavours = flavours
    juice.name = name

    // save the juice and check for errors
    juice.save((err, juice) => {
      if (err) {
        res.send(err)
      }

      res.send(juice)
    })
  })

// on routes that end in /search
// -----------------------------------------------------------------------------
router.route('/search')

  // Search for juices  (accessed at POST http://localhost:8081/api/search)
  .post((req, res) => {
    const {
      body: {
        flavours,
      },
    } = req

    // get all the juices
    Juice.find({}, (err, juices) => {
      if (err) {
        res.send(err)
      }

      // search for relevent juices
      const results = searchJuices(flavours, juices)

      // handle undefined
      if (results === undefined) {
        res.send([])
      }

      // send juices back to client
      res.send(results)

    })

  })

// REGISTER OUR ROUTES ---------------------------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router)

// START THE SERVER
// =============================================================================
app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});

console.log('Magic happens on port ' + app.get('port'))
