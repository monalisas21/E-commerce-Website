const mongoose=require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/webDB")
.then(function(){
    console.log("connected");
})
.catch(function(err){
    console.log(err);
});



// this gives controls to the whole database catch
module.exports=mongoose.connection;

