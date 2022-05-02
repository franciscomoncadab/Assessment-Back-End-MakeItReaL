const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')

const config = (app) => {
     app.use(express.json({ connection: 'active'}))
     app.use(bodyParser.json())
     app.use(morgan('dev'))
     app.use(cors())

};

module.exports = config;