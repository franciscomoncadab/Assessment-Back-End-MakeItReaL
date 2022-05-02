const express = require('express')
const config = require('./config/index')
const routes = require('./routes')

const app = express()
config(app)
routes(app)

module.exports = app;