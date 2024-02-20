const express = require('express')
const app = express()
let todos = ["html","css","js"]
const auth = require('./middleware/auth')



const createTodos = (req,res)=>{
   
    todos.push("git")

    console.log("response: create of todos...");
    res.send("todos created")



}

// app.use(checkAuthentication) /// global middleware 
// app.use(chechValidRole);

app.get("/api/todos",(req,res)=>{
    console.log("response : list of todos...");
    res.send(todos)

})
app.post("/api/todos",auth.checkAuthentication,auth.chechValidRole,createTodos)
app.delete("/api/todos/reset",(req,res)=>{
   
        todos = []

        res.send("todos reseted")
    
 
})
app.listen(8000,()=>{
    console.log("server started ");
})