const express = require("express");
const mongoose = require('mongoose');
const Book = require("./model/Book")
const Author = require("./model/author")
const app = express()

mongoose.connect('mongodb://127.0.0.1:27017/bookStore')
  .then(() => console.log('Connected!'));



// app.get("/api/books",(req,res)=>{
//     let books = Book.find().then((data)=>{

//         console.log(data);
//         res.send(data)
//     })
// })

app.get("/api/books",async (req,res,next)=>{
    try{
    let books = await Book.find({})
    res.send(books)
    }catch(err){
        next(err)

    }
})
app.get("/api/authors",async (req,res,next)=>{
    try{
    let authors = await Author.find({}).populate("author")
    res.send(authors)
    }catch(err){
        next(err)

    }
})

app.use(express.json())
app.post("/api/books", async (req,res,next)=>{
    try{
        const {title,isbn,author} = req.body
    // const title = req.body.title
    //  const isbn = req.body.isbn
    //  const authorId = req.body.author
    let books = await Book.create({title,isbn,author})
    res.send(books)
}catch(err){
next(err);
}

    // .catch((err)=>{
    //     res.send(err)
    // })
})
app.post("/api/authors",async(req,res,next)=>{
    try{

        const {name,contact,email} = req.body;
        let authors = await Author.create({name})
        res.send(authors)
    }catch(err){
        next(err)
    }

})
app.put("/api/books/:_id",async (req,res,next)=>{
    try{
        let matched = await Book.findById(req.params._id)
        if(matched==null){
          return  res.status(404).send({
                msg :"no book fund",
                
            })
        }
        console.log({matched});
    let id = req.params._id
    let title = req.body.title
    let isbn = req.body.isbn
    let updatedData = await Book.findByIdAndUpdate(id,{title,isbn},{new:true, runValidators :true})
    res.send(updatedData)
    }catch(err){
      next(err)
    }

})
app.delete("/api/books/:_id",async (req,res,next)=>{
    try{
    let id = req.params._id;

   let book =  await Book.findByIdAndDelete(id)
   res.status(204).send("deleted")
    }catch{
        next()
    }

})

// Book.findByIdAndUpdate("......",{})
// Book.findByIdAndDelete("id.....")



app.use((req,res)=>{
    res.status(404).send({msg:"resource not found"})
    next
})

app.use((err,req,res,next)=>{
  let statusCode = 500 ;
  let msg = "Server Error"
  if(err.name === "ValidationError"){
    statusCode = 400
    msg = "Bad Request/ Pleaase check uour form"
  }
  res.status(statusCode).send({
    msg,
    name :err.name,
    error: err
})
   
    

 
})

app.listen(8000,()=>{
    console.log("server started");
})