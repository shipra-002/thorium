var today = new Date();
var date = today.getDate();
var today = new Date();
var month = today.getMonth()+1; 
 

console.log(date,month); 

function getBatch(){
    console.log("batchinfo=thorium,week=3,topic=node.js")

}



 

module.exports.batch= getBatch;
module.exports.date=today.getDate;
module.exports.month=today.getMonth;