// const { default: mongoose } = require("mongoose");
const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId
const authorSchema = new Schema({
 
    name :{
        type: String,
        required : true

    }, 
    contact : Number,
    email : String,
    website : String
  
  
});
const Author = mongoose.model("Author",authorSchema)
module.exports = Author;
