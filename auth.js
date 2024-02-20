// function signUp(username,email,password){
//     bcrypt.hash(password, 10, function(err, hash) {
//         // console.log({hash});
//         let data = {
//             username : username,
//             email,
//             password : hash 
//         };
//         console.log("stored db",data);
//     });
// }
// function login(username,email,password){
//     let hash = "$2b$10$GNhnd0DEyxn.6a0INI6u/uqapEF2aYwqrhlHnTqKACKc90xeCTaKu"
//     bcrypt.compare(password, hash, function(err, result) {
//         if(result){
//             console.log("login succesful");
//         }else{
//             console.log("login ununsuccessful");
//         }
//     });
// } 
const signUp = () =>{
    console.log("signup");
    // console.log(data);
}
const login = () =>{
    console.log("login");
}


module.exports = {
    "login" : login,
    "signUp" : signUp
};