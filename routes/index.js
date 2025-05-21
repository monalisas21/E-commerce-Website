const express=require("express");
const router=express.Router();
const isloggedin=require("../middlewares/isLoggedIn");
const isLoggedIn = require("../middlewares/isLoggedIn");

router.get("/",function(req,res){
    let error=req.flash("error");
    res.render("index",{error});

});

router.get("/shop",isloggedin,function(req,res){
    res.render("/shop");
});

router.get("/logout",isLoggedIn,function(req,res){
    res.render("/logout")
});

module.exports=router;