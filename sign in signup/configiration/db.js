const mongoose = require("mongoose")
require('dotenv').config();

mongoose.connect(process.env.DB_URI).then(console.log("db is connceted")).catch((err)=>{
    console.log(err)
})




const newschema = new mongoose.Schema({
  phone:{
    type:Number,
    required:[true,'must provide pname'],
    
   }
   ,
   password:{
    type:String,
    required:[true,'must provide pnumber'],
    
   },
   fullname:{
    type:String,
    required:[true,'must provide full name'],
    
   }
})
const collection = mongoose.model("login/signup",newschema)
module.exports= collection