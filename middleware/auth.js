let loggedIn = false
let hasValidRole = false


function checkAuthentication(req,res,next){
    console.log("checkAuthentication");
    if(!loggedIn){

        return res.status(401).send()
        // console.log("error");
    }
    next()

}
function chechValidRole(req,res,next){
    if(!hasValidRole){
        res.status(403).send()

    }
    next()
}
module.exports = {
    "checkAuthentication" : checkAuthentication,
    "chechValidRole" : chechValidRole
}