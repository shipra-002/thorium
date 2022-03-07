const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();
const moment = require('moment');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://functionup-cohort:G0Loxqc9wFEGyEeJ@cluster0.rzotr.mongodb.net/shipra002-DB?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

const globalMiddleWare=function(req,res,next){
let date=moment().format('MMMM DD YYYY , h:mm:ss')

let ip=req.ip;
let url=req.originalUrl
//console.log("Request Type:",req.method)
console.log(date,ip,url);
//console.log(req.socket.remoteAddress,req.URL)
next()
}
app.use(globalMiddleWare);

    


app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
