require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const passport = require('passport');
const session = require('express-session');

const routes = require('./routes');
const { passportLocalStrategy } = require('./middlewares');

// App Setup
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Express Session Setup
app.use(
  session({
    secret: process.env.SESSION_SECRET || '$SeSsIoN-sEcReT$',
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 60,
    },
  })
);

// Passport.js Setup
app.use(passport.initialize());
app.use(passport.session());
passportLocalStrategy(passport);

// Ejs Setup
app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Routes Setup
app.use(routes);

module.exports = app;
