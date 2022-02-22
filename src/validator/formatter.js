function trim(){
    let name ="      shipra arora     "
    let result = name.trim()
    console.log(result)
}


function convert(){
    let string ='Functionup'
    let uppercase = string.toUpperCase()
    let lowercase = string.toLowerCase()
    console.log(lowercase,uppercase)
}
  module.exports.trim= trim
  module.exports.convert= convert