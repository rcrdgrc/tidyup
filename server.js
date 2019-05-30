var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');

// load the env vars
require('dotenv').config();

// create the Express app
var app = express();

// connect to the MongoDB with mongoose
require('./config/database');
require('./config/passport');

// require our routes
var indexRouter = require('./routes/index');
var apptRouter = require('./routes/appts');
var usersRouter = require('./routes/users');
var addressRouter = require('./routes/address')


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret: 'SEI Rocks!',
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());


// mount all routes with appropriate base paths
app.use('/', indexRouter);
app.use('/', apptRouter);
app.use('/', usersRouter); //this used to have user/ instead of /
app.use('/', addressRouter);

// catch 404 and forward to error handler
app.use(function(req, res) {
  res.status(404).send('Cant find that!');
});

module.exports = app;
