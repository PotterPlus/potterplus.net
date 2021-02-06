const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const sassMiddleware = require('node-sass-middleware');

const indexRouter = require('./routes/index');
const registerRouter = require('./routes/register');
const loginRouter = require('./routes/login');
const forgotPasswordRouter = require('./routes/forgot-password');
const supportRouter = require('./routes/support');
const projectsRouter = require('./routes/projects');
const discordRouter = require('./routes/discord');
const termsOfServiceRouter = require('./routes/terms-of-service');
const privacyPolicyRouter = require('./routes/privacy-policy');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true, // true = .sass and false = .scss
  sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.get('/register', registerRouter);
app.get('/login', loginRouter);
app.get('/forgot-password', forgotPasswordRouter);
app.get('/support', supportRouter);
app.get('/projects', projectsRouter);
app.get('/discord', discordRouter);
app.get('/terms-of-service', termsOfServiceRouter);
app.get('/privacy-policy', privacyPolicyRouter);

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
