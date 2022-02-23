const express = require('express');
const router = express.Router();

//router.get('/students/:name', function(req, res) {
   // let studentName = req.params.name
   // console.log(studentName)
   // res.send(studentName)
//})
// 1
router.get('/movies', function(req,res){
    res.send('["Fukrey","scam","pushpa","wanted","Delhi"]')

})
//2
router.get('movies/:Index',  function(req, res){ 
    movies =  ["Fukrey","scam","pushpa","wanted","Delhi"]
    let number = req.params.Index;
    if (number>movies.length-1){
        res.send('"doesnot exist"')

    }else{
        res.send(movies[number])
    }
})
//3
router.get('/moviez', function(req, res){
    const moviez = [ {id: 1,name: 'the shining'},{id: 2,name:'incendies'},{id: 3,name:'idiots'},{id: 4,name:'rang de basanti'}]
res.send(moviez)
})
//4
router.get('/moviez/:moviezId', function(req,res){
    const moviezId= req.params.moviezId
  
  const moviez= [{id: 1,name: 'the shining'},{id: 3,name:'incendies'},{id: 4,name:'idiots'},{id: 4,name:'rang de basanti'}]
  if(moviezId>moviez.length){
      res.send("no movie exists with this id")

  }else{
      res.send(moviez[moviezId-1])
  }
})




module.exports = router;
