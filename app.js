var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app1 = express();
var app2 = express()

// app.use(logger('dev'));
app1.use(express.json());
app1.use(express.urlencoded({ extended: false }));
app2.use(express.json());
app2.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app1.use('/users', usersRouter);
app2.use('/send-message', indexRouter);

module.exports = { app1, app2 };
