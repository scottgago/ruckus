'use strict'

const express = require('express');
const app = express();

require('./router/router.js')(app, express)

module.exports = app;