const mongoose=require('mongoose');
// already connected in user model

const pdtSchema=mongoose.Schema({
    
    Image:String,
   Price:String,
   Name:String,
   Price:Number,
   Discount:{
    type:Number,
    default:0
   },

   bgcolor:String,
   panelcolor:String,
   textcolor:String

   
});

module.exports=mongoose.model("pdt",pdtSchema);