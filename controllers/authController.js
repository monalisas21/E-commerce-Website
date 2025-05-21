const userModel=require('../models/user-model');
const bcrypt=require("bcrypt");
const jwt=require('jsonwebtoken');
const {generateToken}=require("../utils/generateToken")


module.exports.registerUser=async function(req,res){

    try{

        let {email,password,fullname}=req.body;

        let user=await userModel.findOne({email:email});
        if(user) return res.status(401).send("You already have an account");

        bcrypt.genSalt(10, function(err,salt){

            bcrypt.hash(password,salt,async function(err,hash){
                if(err) return res.send(err.message);
                else{

                    let user=await userModel.create({
                            email,
                            password:hash,
                            fullname
                    });

                   
                   let token= generateToken(user);
                    res.cookie("token",token);
                    // res.send("User created successfully")
                    return res.redirect("/shop");


                } 


            })
        })

        

    }   
    
        catch(err){
        res.send(err.message);
    }   
};

module.exports.loginUser=async function (req,res){

    // console.log("loginUser called");

    let{email,password}=req.body;
    // console.log("Request body:", req.body);

   let user= await userModel.findOne({email:email});
//    console.log("User found:", user);

   if(!user) return res.send("Email or password incorrect");
//    console.log("Stored hash:", user.password);

//    check if entered password is correct
    
  
    


    bcrypt.compare(password,user.password,function(err,result){

        if(result){
            let token=generateToken(user);
            res.cookie("token",token);
            // res.send("you can login");
            return res.redirect("/shop");
        }

        else{
            
            return res.send("Email or password incorrect");
        }

    });

};
