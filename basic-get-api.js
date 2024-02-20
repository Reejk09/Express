const express = require('express')
const app = express()
const sum = (num1,num2)=>{
    return num1+num2;

}

app.get("/api/todos",(req,res)=>{
    console.log("send todos");
    let todos = ["html","js","css"]
    res.send(todos)

})


app.listen(8000,()=>{
    console.log("server started");
})


app.get("/api/products",(req,res)=>{
    console.log("send products");
    let products = [{
        name: "apple",
        price : "1000"
    }
    ]
    res.send(products)

})
app.listen(8001,()=>{
    console.log("product server has started ");
})