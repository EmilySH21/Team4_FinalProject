var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const router = require('./routes/index');

var app = express();

const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'myDB';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function(err) {
  console.log("Connected successfully to server");

  const db = client.db(dbName);



// view engine setup

router.get('/', function (request, response, next) {
  res.render('index', { title: 'Express'})
})
async function group(client) {
  const myCollection = client.db('pets').collection('petsCollection')
  return await myCollection.aggregate(
    [
      {
        $group:
        {
          _id: {$species: '$species'},
          pets: {
            $push: {
              id: '$id', imgSrc: '$imgSrc', name: '$name', species: '$species', breed: '$breed', status: '$status', info: '$info'
            }
          }
        }
      }
    ]
  )
}
module.exports = router;
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
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
});
client.close();
// router.route("/fetch").get(function(req, res) {
//   kennel.find({}, function(err, result) {
//     if (err) {
//       res.send(err);
//     } else {
//       res.send(result);
//     }
//   });
// });




//This handler I believe is supposed to be called one time using URL (see notion) and it justs gives the array of all the animals
// function browseHandler(request, response) {

//   response.status(200)
  
	
// }

//app.get('/browse', browseHandler)

// function adoptHandler(request, response) {

//   response.status(200)



//   response.json(postInfo)

// }
