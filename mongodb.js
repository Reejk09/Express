// show dbs // check for exixting database 
// use books 
// - 

/* 

use books 
  - create 
    - goes into books database



    table is represented as collection
    row / documents 
    db.createCollection("books") -- used to create collection books i.e table 



*/
/* helps to insert one row */
db.books.insertOne({name:"python",isbn:223344})
/* helps to insert many rows  */
db.books.insertMany([{name:"java",isbn:222},
{name:"js",isbn:335566}
])
/* helps to search the data  */
db.books.find({name:"js"})
// db.books.find(filter)
/* $set is one of update operator  */
db.books.updateOne({name:"python"},{$set:{name:"ruby and rails "}})