const express = require("express");
// const fs = require("fs");
const fsPromises = require("fs/promises");
const app = express();

app.use(express.json());

app.get('/api/users',(req,res)=>{
    res.status(500)
    res.json({
        status:'fail',
        message:'Route is not yet implemented '
    })
})


app.put('/api/users',(req,res)=>{
    res.status(500)
    res.json({
        status:'fail',
        message:'Route is not yet implemented '
    })
})


app.patch('/api/users',(req,res)=>{
    res.status(500)
    res.json({
        status:'fail',
        message:'Route is not yet implemented '
    })
})

app.listen(1400)