var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');
var morgan = require('morgan');
var path = require('path');
var marked = require('marked');
var fs = require('fs');
var logger = require('winston');
var userRouter = require('./server/router/user');
var config = require('config');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

var app = express();

// Add middleware
app.use(cors());
app.use(bodyParser.json({ type: 'application/json' }));
app.use(expressValidator());
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));
app.set('views', path.join(__dirname, 'public/views'));
app.set('view engine', 'ejs');

// To return API.md
app.get('/docs', function(req, res, err) { // eslint-disable-line no-unused-vars
  var md = function(filename) {
    var path = __dirname + "/" + filename;
    var include = fs.readFileSync(path, 'utf8');
    var html = marked(include);

    return html;
  };

  return res.render('index.ejs', {
    "md": md
  });
});

//TODO: Add router setup to load test coverage reports

// See the User Controller for `/users` routes
app.use('/users', userRouter);


// Some switches for acceptance tests
if (require.main === module) {

  var mongoUrl = config.get('mongoUrl');
  var serverPort = config.get('Server.port');

  //Set up default mongoose connection
  mongoose.connect(mongoUrl, {
    useMongoClient: true
  });

  //Get the default connection
  var db = mongoose.connection;

  //Bind connection to error event (to get notification of connection errors)
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));

  // Only listen when app.js is run - acceptance tests will listen on another port
  app.listen(serverPort, function() {
    logger.info('Listening at http://localhost:8000/docs - see here for API docs');
  });
}

module.exports = app;
