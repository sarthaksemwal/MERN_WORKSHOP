const express=require('express')
const userControl=require('../controllers/userContoller.js')


const userRouter=express.Router();


userRouter.route('/users')
.get(userControl.getUser)
.post(userControl.addUser)
.put(userControl.reaplaceUser)
.delete(userControl.deleteUser)


module.exports=userRouter;