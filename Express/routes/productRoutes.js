const express=require('express')
const productController=require('../controllers/productsController.js')

const productRouter=express.Router();

productRouter.route('/')
.get(productController.getAllProduct)
.post(productController.addProduct)





productRouter.route('/:id')
.put(productController.putProduct)
.delete(productController.deleteProd)



module.exports={
    productRouter,

}