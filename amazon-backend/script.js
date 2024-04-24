//importing modules

const express=require("express")
const productsRouter=require('D:/programming/MERN_WORKSHOP/amazon-backend/routes/productsRoutes.js')
const mongoose=require('mongoose')
const test=require('D:/programming/MERN_WORKSHOP/amazon-backend/models/productsModel.js')

//starting the server 
const app= express();


//routing the server
app.use(express.json())

app.use('/api/products',productsRouter)



//database setup

const url='mongodb+srv://$USERNAME_$:$_PASSWORD_$@cluster0.clerqjo.mongodb.net/$_DB_NAME_$?retryWrites=true&w=majority&appName=Cluster0'
const databaseUser='root';
const databasePassword='abcd1234';
const databaseName='Amazon-Backend'

let dblink=url.replace("$USERNAME_$",databaseUser)
    dblink=dblink.replace("$_PASSWORD_$",databasePassword)
    dblink=dblink.replace("$_DB_NAME_$",databaseName)


//database connetivity
    mongoose.connect(dblink)
    .then(()=>console.log("Db-Connected"))

app.listen(1400,()=>{
    console.log("App-Started")
})