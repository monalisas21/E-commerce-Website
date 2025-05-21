const express=require("express");
const router=express.Router();
const {registerUser,loginUser}=require("../controllers/authController");

// router.get("/",function(req,res){
//     res.send("hey user");

// });

router.get("/", function(req, res) {
    res.render("shop"); // Make sure you have views/shop.ejs
});

router.post("/register",registerUser);

router.post("/login",loginUser);

module.exports=router;