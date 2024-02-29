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
db.books.find({_id:'65d6053752afc1a75c113e88'})
db.books.find({_id:ObjectId('65d6053752afc1a75c113e88')})
// db.books.find(filter)
/* $set is one of update operator  */
db.books.updateOne({name:"python"},{$set:{name:"ruby and rails "}})
db.books.insertMany([{name:"java",isbn:222},{name:"python",isbn:22344}])
db.books.find({isbn:222},{name:1,isbn:1})

db.books.updateOne({isbn:222},{$set:{name:"ruby and rails"} })
db.books.updateMany({},{$set:{publishedDate : undefined}})
db.books.updateMany({isbn:222},{$unset:{publishedDate : 1}})


db.books.insertOne({
  name:"java",
  publisher:{
    name:"ram",
    estd:2020
  },
  authors:[
    {
      name:"abc"
    },
    {
      name:"shyam"
    }
  ]
})

db.books.deleteOne({isbn:222})
db.books.deleteMany({},{isbn:222})

db.books.find({name:{$eq: "ram"}})
db.testDb.insertMany([
  {
     "name": "Andrea Le",
     "email": "andrea_le@fake-mail.com",
     "version": 5,
     "scores": [ 85, 95, 75 ],
     "dateCreated": { "$date": "2003-03-26" }
  },
  {
     "email": "no_name@fake-mail.com",
     "version": 4,
     "scores": [ 90, 90, 70 ],
     "dateCreated": { "$date": "2001-04-15" }
  },
  {
     "name": "Greg Powell",
     "email": "greg_powell@fake-mail.com",
     "version": 1,
     "scores": [ 65, 75, 80 ],
     "dateCreated": { "$date": "1999-02-10" }
  }
])
db.testDb.find({$or:[{email:"greg_powell@fake-mail.com"},{email:"no_name@fake-mail.com"}]})
db.testDb.find({$and:[{email:"greg_powell@fake-mail.com"},{email:"noo_name@fake-mail.com"}]})
db.testDb.insertMany([
  { "item": "Pens", "quantity": 350, "tags": [ "school", "office" ] },
  { "item": "Erasers", "quantity": 15, "tags": [ "school", "home" ] },
  { "item": "Maps", "tags": [ "office", "storage" ] },
  { "item": "Books", "quantity": 5, "tags": [ "school", "storage", "home" ] }
])
