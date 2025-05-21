const mongoose=require('mongoose');
const dbgr=require('debug')("development:mongoose");
const config=require('config');

mongoose.connect(`${config.get("MONGODB_URI")}/webD`)
.then(function(){
   dbgr("connected");
})
.catch(function(err){
    console.log(err);
});



// this gives controls to the whole database catch
module.exports=mongoose.connection;

