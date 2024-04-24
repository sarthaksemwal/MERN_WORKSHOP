const productModel=require('../models/productsModel.js')

const getAllProducts= async(req,res)=>{
    const {sort='price', page=1,pageSize=3,...q}=req.query;
    const sortStr=sort.split(',').join('')
    

    let query=productModel.find(q)
    query=query.sort(sortStr)
    const skip=pageSize*(page-1)
    query=query.skip(skip).limit(pageSize)

    const products=await query;

    const data=await productModel.find(q);
  
    res.json({
        status:'success',
        result:0,
        data:{
            products:data,
        }
    })

}



const addProduct=async (req,res)=>{
    try{
        const {id,...data} =await productModel.create(req.body)
        
    console.log(data)
    res.json({
        status:'false',
        results:1,
        data:{
            products:data,
        }

    })
}
catch(err){
    console.log(err)
    res.json({
        status:'fail',
        results:1,
        data:{
            products:data,
            message:JSON.stringify(err),
        }

    })
}
}

const replaceProduct = async (req, res) => {
    try {
      const reqID = req.params.id;
      const data = { ...req.body, _id: reqID };
      const result = await productModel.findOneAndReplace({ _id: reqID }, data);
      res.json({
        status: "success",
        data: {
          products: result,
        },
      });
    } catch (err) {
      res.status(500);
      console.log(err);
      res.json({
        status: "fail",
        message: JSON.stringify(err.errmsg),
      });
    }
  };



  const updateProduct = async (req, res) => {
    try {
        const reqID = req.params.id;
        const data = req.body;
        const result = await productModel.findByIdAndUpdate(reqID, data, { new: true });
        res.json({
            status: "success",
            data: {
                products: result,
            },
        });
    } catch (err) {
        res.status(500);
        console.log(err);
        res.json({
            status: "fail",
            message: JSON.stringify(err.errmsg),
        });
    }
};

module.exports = {
    getAllProducts,
    addProduct,
    replaceProduct,
    updateProduct   
};

  