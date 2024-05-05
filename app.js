require('dotenv').config();

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var unitedstatesRouter = require('./routes/unitedstates');
var canadaRouter = require('./routes/canada');
var unitedkingdomRouter = require('./routes/unitedkingdom');
var franceRouter = require('./routes/france');

var app = express();

const cors = require('cors');
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/unitedstates', unitedstatesRouter);
app.use('/canada', canadaRouter);
app.use('/unitedkingdom', unitedkingdomRouter);
app.use('/france', franceRouter);

module.exports = app;


