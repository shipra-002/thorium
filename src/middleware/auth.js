const jwt=require('jsonwebtoken')
//const authenticate = function(req, req, next) {
    //check the token in request header
    //validate this token

    //next()
//}


const authorise = function(req, res, next) {
    // comapre the logged in user's id and the id in request
    if(!token) return res.send({status: false, msg: "token must be present in the request header"})
    let decodedToken = jwt.verify(token, 'functionup-thorium')

    if(!decodedToken) return res.send({status: false, msg:"token is not valid"})
    //userId for which the request is made,In this case message to be posted.
    let userToBeModified=req.params.userToBeModified
    // userId for the logged-in user
    let userLoggedIn=decodedToken.userLoggedIn
    //userId comparision to check if the logged-in user is requesting for their own data
    if(userToBeModified !=userLoggedIn)return res.send({status:false,msg:'logged user is not allowed to modify the request'})


    next()
}

module.exports.authorise=authorise