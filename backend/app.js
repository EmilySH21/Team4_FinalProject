var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'myDB';

// Create a new MongoClient
const client = new MongoClient(url);

// view engine setup
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

const postInfo = [
  {
    _id: "dog",
    pets: [
      {
      imgSrc:"https://i.insider.com/5484b33a6da8119577fbada9?width=1300&format=jpeg&auto=webp",
      name: "Rocky",
      breed: "American Pit Bull cross",
      status: "Neutered and vaccinated",
      info: "Female, 7 years old",
      adopted: false
      },
      {
      imgSrc: "https://i.insider.com/5484ecba69bedda54703ed52?width=1300&format=jpeg&auto=webp",
      name: "Juju",
      breed: "American staff cross",
      status: "Vaccinated, not neutered",
      info: "Male, 7 years old",
      adopted: false
      },
      {
      imgSrc:"https://i.insider.com/5484d9d1eab8ea3017b17e29?width=1300&format=jpeg&auto=webp",
      name: "Knuckles",
      breed: "Anatolian Shepherd",
      status: "Neutered and vaccinated",
      info: "Male, 1 year old",
      adopted: false
      },
      {
      imgSrc:"https://i.insider.com/5484e527ecad04de4324638b?width=1200&format=jpeg&auto=webp",
      name: "Donald",
      breed: "Anatolian Shepherd",
      status: "Neutered and vaccinated",
      info: "Male, 5 year old",
      adopted: false
      },
      {
      imgSrc: "https://i.insider.com/5484d8fa69bedd616903ed62?width=1200&format=jpeg&auto=webp",
      name: "Edwarda",
      breed: "German Shepherd",
      status: "Neutered and vaccinated",
      info: "Feale, 2 year old",
      adopted: false
      },
      {
      imgSrc:"https://i.insider.com/5484b4d06da8113b75fbadb7?width=1200&format=jpeg&auto=webp",
      name: "Frank",
      breed: "Shitzhu",
      status: "Neutered and vaccinated",
      info: "Male, 1 year old",
      adopted: false
      },
      {
      imgSrc:"https://i.insider.com/5484ea606da8112e5dfbadab?width=1200&format=jpeg&auto=webp",
      name: "Hillary",
      breed: "Pitbull",
      status: "Neutered and vaccinated",
      info: "Female, 1 year old",
      adopted: false
      },
    ]
  },
  {
    _id: "cat",
    pets: [
    {
      imgSrc: "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png",
      name: "Iridian",
      breed: "Maine Coon",
      status: "Neutered and vaccinated",
      info: "Female, 1 year old",
      adopted: false
    },
    {
      imgSrc: "https://www.purina.com/sites/g/files/auxxlc196/files/AmericanCurlSHA_body_6.jpg",
      name: "Jack",
      breed: "American Curl",
      status: "Neutered and vaccinated",
      info: "Female, 1 year old",
      adopted: false
    },
    {
      imgSrc: "https://www.purina.com/sites/g/files/auxxlc196/files/Birman_body_6.jpg",
      name: "Karen",
      breed: "Birman",
      status: "Neutered and vaccinated",
      info: "Female, 1 year old",
      adopted: false
    }
  ]
  }
];
//This handler I believe is supposed to be called one time using URL (see notion) and it justs gives the array of all the animals
function browseHandler(request, response) {

  response.status(200)
  
	response.json(postInfo)
}

app.get('/browse', browseHandler)


module.exports = app;
