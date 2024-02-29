const { default: mongoose } = require("mongoose");
const Author = require("./author");

mongoose
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId
const bookSchema = new Schema({
  title : {
    type : String,
    required:true   // Database Validation
  },
  isbn : Number,
  author : {
    type: ObjectId,
    href : "Author",
    required:true

  }
});
const Book = mongoose.model("Book",bookSchema)
module.exports= Book;