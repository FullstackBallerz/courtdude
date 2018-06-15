const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const PORT = 8080;
const app = express();

module.exports = app;

const createApp = () => {
    // logging middleware
    app.use(morgan('dev'))
  
    // body parsing middleware
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))
    app.listen(PORT, () =>
      console.log(`Mixing it up on port ${PORT}`)
    )
    app.use('/api', require('./api'))
  }

createApp()

