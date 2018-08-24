var express = require('express');

const CLSContext = require('zipkin-context-cls');
const zipkin = require('zipkin');
const ctxImpl = new CLSContext('zipkin');
const localServiceName = 'userapi';
const tracer = new zipkin.Tracer({ctxImpl, recorder: new zipkin.ConsoleRecorder(), localServiceName});

var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// Database
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('userapi-db:27017/nodetest2');

var routes = require('./routes/index');

var app = express();

// instrument the server
const zipkinMiddleware = require('zipkin-instrumentation-express').expressMiddleware;
app.use(zipkinMiddleware({tracer}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//logger
app.use(require('express-bunyan-logger')({
  genReqId: function(req) {
     return tracer.id;
  }
}));
/*var log = bunyan.createLogger({
  name: 'userapi',
  serializers: { // add serializers for req, res and err
      req: bunyan.stdSerializers.req,
      req: bunyan.stdSerializers.res,
      err: bunyan.stdSerializers.err
  },
  'X-B3-TraceId': tracer.id,
  'X-B3-SpanId': tracer.id
});
var express_logger = log.child({type: 'express', key: value});

app.use(require('express-bunyan-logger')({
  logger: express_logger
}));*/

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Make our db accessible to our router
app.use(function(req,res,next){
    req.db = db;
    next();
});

app.use('/1.0', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status( err.code || 500 )
    .json({
      status: 'error',
      message: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500)
  .json({
    status: 'error',
    message: err.message
  });
});


module.exports = app;
