let axios=require("axios")


let sortedCity= async function(req,res){
    try{
        let cities=["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let cityobjArray=[]
        for(i=0;i<cities.length;i++){
            let obj={city: cities[i]}
           
         let resp= await axios.get(` http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=c97361570e48e1c443b41cc7e129de07`)
         console.log(resp.data.main.temp)
         obj.temp=resp.data.main.temp
         cityobjArray.push(obj)
        }
        let sorted=cityobjArray.sort(function(a,b){return a.temp-b.temp})
        console.log(sorted)
        res.status(200).send({status:true,data:sorted})

    } catch(err){
        console.log(err)
        res.status(500).send({status:false,msg:"server error"})
    }
}
module.exports.sortedCity=sortedCity;