var express = require('express');
var app = express();

var cookieParser = require('cookie-parser');
var path = require('path');

const db=require('./config/mongoose-connection');

var ownersRoutes=require("./routes/ownersRoutes")
var userRoutes=require("./routes/userRoutes");
var pdtRoutes=require("./routes/pdtRoutes");
// var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');



// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.set("view engine","ejs");

app.use("/owners",ownersRoutes);
app.use("/users",userRoutes);
app.use("/pdts",pdtRoutes);



app.listen(3000);

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// module.exports = app;
