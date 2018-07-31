var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var mongoose = require('mongoose');
let passport = require('passport');

require('./models/User');
require('./models/CV');

require('./config/passport');

var index = require('./routes/index');
var users = require('./routes/users');

mongoose.connect('mongodb://eportfolio:eportfolio2018@ds161411.mlab.com:61411/eportfolio_db', {useNewUrlParser: true});

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize())

app.use('/', index);
app.use('/API/users', users);
app.use(express.static(__dirname + '/dist'));

app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
