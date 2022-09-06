require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');

const routes = require('./routes');

// App Setup
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ejs Setup
app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Routes Setup
app.use(routes);

module.exports = app;
