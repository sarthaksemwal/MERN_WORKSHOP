const fs=require('fs')

fs.readFile('myReadMe.txt','utf-8',(err,data)=>{
   if(err){
    console.log(`Following error occured ${err}`)
   }
   else{
    console.log(data)
   }
})