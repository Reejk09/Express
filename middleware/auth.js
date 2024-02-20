let loggedIn = true
let hasValidRole = true



function checkAuthentication(req,res,next){
    console.log("checkAuthentication");

    req.body = {
        title : req.body.title
    }
    if(!loggedIn){

        return res.status(401).send()
        // console.log("error");
    }
    next()

}

function chechValidRole(req,res,next){
    if(!hasValidRole){
      return  res.status(403).send()

    }
    next()
}


module.exports = {
    "checkAuthentication" : checkAuthentication,
    "chechValidRole" : chechValidRole,
    
   
}