const express = require("express");
// const fs = require("fs");
const fsPromises = require("fs/promises");
const productContrller=require('./controllers/productsController')
const Usercontrol=require('./controllers/userContoller')
const productRoutes=require('./routes/productRoutes.js')
const userRoutes=require('./routes/userRoutes.js')
const app = express();

app.use(express.json());

app.use((req,res,next)=>{
    const time=new Date().toLocaleString();
    fsPromises.appendFile('./log.txt',req.url+'\t'+time+'\n')
    next();

})




app.use('/api/products', productRoutes)
app.use('/api/products',userRoutes)










// app.route('/api/products')
// .get(productContrller.getAllProduct)
// .post(productContrller.addProduct)

// app.route('/api/products/:id')
// .put(productContrller.putProduct)
// .delete(productContrller.deleteProd)

// app.route('/api/users')
// .get(Usercontrol.getUser)
// .post(Usercontrol.addUser)
// .put(Usercontrol.reaplaceUser)
// .delete(Usercontrol.deleteUser)


app.listen(1400);