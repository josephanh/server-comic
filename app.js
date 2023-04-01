var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var userRouterAPI = require('./routes/API/user');
var mangaRouterAPI = require('./routes/API/manga');
var userCpanel = require('./routes/Cpanel/user');
var mangaCpanel = require('./routes/Cpanel/manga');

require('./components/category/categoryModel')
require('./components/manga/mangaModel')
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'iloveyou',
  resave: true,
  saveUninitialized: true,
  cookie: { secure: false }
}))

// mongoose.connect('mongodb://127.0.0.1:27017/AppManga', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// mongodb+srv://admin:<password>@atlascluster.6feelsp.mongodb.net/?retryWrites=true&w=majority

mongoose.connect('mongodb+srv://admin:anh03032003@atlascluster.6feelsp.mongodb.net/AppManga?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('>>>>>>>>>> DB Connected!!!!!!'))  
  .catch(err => console.log('>>>>>>>>> DB Error: ', err));


app.use('/', indexRouter);
// http://localhost:3000/api/user
app.use('/api/user', userRouterAPI);
// http://localhost:3000/api/manga
app.use('/api/manga',mangaRouterAPI);
// http://localhost:3000/cpanel/user
app.use('/cpanel/user', userCpanel);
// http://localhost:3000/cpanel/manga
app.use('/cpanel/manga',mangaCpanel);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
