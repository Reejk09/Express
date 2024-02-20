// global objects 
// - console
// console.log(__filename);


// console.log("node.js");
// console.log("express.js");
// const bcrypt = require('bcrypt');
// const path = require("path");
// const http = require("http");
const auth = require("./auth")
// console.log(path.join(__dirname,"uploads"));
// const { log } = require('console');

    // console.log("code to bcrypt");
    // console.log(data);
 

auth.signUp("reejan","reejan@gmail.com","password");
auth.login("reejan","reejan@gmail.com","password");
const products = require("./product")
products.fetch()
products.looked()