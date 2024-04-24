 const getUser=('/api/users',(req,res)=>{
    res.status(500)
    res.json({
        status:'fail',
        message:'Route is not yet implemented '
    })
})



 const addUser=('/api/users',(req,res)=>{
    res.status(500)
    res.json({
        status:'fail',
        message:'Route is not yet implemented '
    })
})




 const reaplaceUser=('/api/users',(req,res)=>{
    res.status(500)
    res.json({
        status:'fail',
        message:'Route is not yet implemented '
    })
})


 const deleteUser=(req,res)=>{
    res.status(501);
    res.json({
        status:'fail',
        message:'route is not yet impemented'
    })
 }


  module.exports={
    getUser,
    addUser,
    reaplaceUser,
    deleteUser,

 }