const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Any = new Schema({ any: Schema.Type.Mixed });

    
const UserProfile = new Schema({
    name: { type: [{
         first: { type: String, required: true,
     },
     last: {
         type: String,
         required: true,
     },
     age: {
         type: Number
         
         
     },
     
     email: {
         
         
     }
        
    })
  
   module.exports = User = mongoose.model("users", UserSchema);