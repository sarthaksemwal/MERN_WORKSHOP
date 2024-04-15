const express= require('express');
//here express is a function 

const app=express();

app.get('/home',(req,res)=>{
res.send('Home page')

})

app.listen(1400,()=>{
    console.log("-----Server Started----")
})