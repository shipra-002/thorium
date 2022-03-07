const testOne = async function(req,res){
    res.send({msg:"globalmiddleware first api"})
}


const testTwo = async function(req,res){
    res.send({msg:"golbalmiddleware 2nd api"})
}


module.exports.testOne=testOne
module.exports.testTwo=testTwo
