const express = require('express')
const app = express()
// count = 0;
// for (i=0;i<=todos.length;i++){
    //     count++;
    //     console.log(count);
    // }
    let todos = [{
        id : 1,
        title : "html",
        status :true
    },
    {
        id : 2 ,
        title :"css",
        status : false
    }
]

let todoId = todos.length+1;
console.log(todos);
let checkData = ""
let matched = false

const {checkAuthentication,chechValidRole,chechData,checkRedudancy} = require('./middleware/auth')





// app.use(checkAuthentication) /// global middleware 
// app.use(chechValidRole);
app.use(express.json())
const createTodos = (req,res)=>{
    if( req.body.title?.trim() == checkData){
        return res.status(400).send({
         title : "please enter ttile"
        });
         
     }
     todos.forEach((el)=>{
         if(el==req.body.title){
             // res.send("same data ")
             matched = true;
           return res.status(404).send([
             {
                 key : "title",
                 msg : "title is same"
             }
            ]);
        }
       
         // todos.pop()
     });
  
     if(!matched){
        todos.push({title: req.body.title} )
    }
   

    console.log(req.body);
    res.send("todos created" +req.body.title)
}



app.get("/api/todos",(req,res)=>{
    console.log("response : list of todos...");
    res.send(todos)

})
app.post("/api/todos",checkAuthentication,chechValidRole,createTodos)


app.delete("/api/todos/:id",(req,res)=>{

    //code to delete particular todo 
    res.send(`delete ${req.params.id}`)
    todos.filter((el)=> (el.id =! req.params.id))
    // res.send

    // console.log();
})

app.put("/api/todos/:id",(req,res)=>{
    //code to update particular todo 
    todos = todos.map(el=>{
        if(el.id == req.params.id){
            let newData = {
                title : req.body.title,
                status : req.body.status
            }
            
            
        }else{
            return el
        }
    })
    
    res.send(` update  ${req.params.id}`)
    // res.send(req.params.id)  

    // console.log("hii deleted");

})
app.delete("/api/todos/reset",(req,res)=>{
   
        todos = []

        res.send("todos reseted")
    
 
})
app.listen(8000,()=>{
    console.log("server started ");
})