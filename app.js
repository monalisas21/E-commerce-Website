var express = require('express');
var app = express();

var cookieParser = require('cookie-parser');
var path = require('path');

const db=require('./config/mongoose-connection');

var ownersRoutes=require("./routes/ownersRoutes")
var userRoutes=require("./routes/userRoutes");
var pdtRoutes=require("./routes/pdtRoutes");
const expressSession=require("express-session");
const flash=require("connect-flash");



// you can use all the keys from this
require("dotenv").config();


// var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');



// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(flash());
app.use(express.static(path.join(__dirname, 'public')));
app.use(
    expressSession({
        resave:false,
        saveUninitialized:false,
        secret: "yourSuperSecretKey",
    })
);

const shopRoutes=require("./routes/userRoutes");
app.use("/shop",shopRoutes);


app.set("view engine","ejs");


app.use("/users",userRoutes);


app.get("/",function(req,res){
    res.render("index");
    
});


app.get("/checkout",function(req,res){
    res.render("checkout");
});




app.listen(3000);

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// module.exports = app;
