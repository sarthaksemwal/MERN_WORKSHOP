//importing imp files
const fsPromises = require("fs/promises");



const getAllProduct=async (req, res) => {
    // const data = fs.readFileSync('./data.json', "utf-8");
    const data = await fsPromises.readFile("D:/programming/MERN_WORKSHOP/Express/mydata.json", "utf-8");
    const arr = JSON.parse(data);
    res.json({
      status: "success",
      results: arr.length,
      data: {
        products: arr,
      },
    });
  }



  const addProduct= async (req, res) => {
    // console.log(Object.keys(req));
    const data = req.body;
    if (!data.price || !data.title) {
      res.json({
        status: "fail",
        message: "Title or Price must be provided",
      });
      return; //This will end function execution
    }
    console.log(data);
    const db = await fsPromises.readFile("D:/programming/MERN_WORKSHOP/Express/mydata.json", "utf-8");
    const arr = JSON.parse(db);
    const len = (await arr).length;
  
    if (len == 0) data.id = 1;
    else data.id = len + 1;
  
    arr.push(data);
    console.log(arr);
    fsPromises.writeFile("./mydata.json", JSON.stringify(arr));
    res.json({
      status: "success",
      results: 1,
      data: {
        NewProduct: data,
      },
    });
  }



  const putProduct= async (req, res) => {
    // console.log(Object.keys(req));
    const data = req.body;
    if (!data.price || !data.title) {
      res.json({
        status: "fail",
        message: "Title or Price must be provided",
      });
      return; //This will end function execution
    }
    console.log(data);
    const db = await fsPromises.readFile("D:/programming/MERN_WORKSHOP/Express/mydata.json", "utf-8");
    const arr = JSON.parse(db);
    const len = (await arr).length;
  
    if (len == 0) data.id = 1;
    else data.id = len + 1;
  
    arr.push(data);
    console.log(arr);
    fsPromises.writeFile("./mydata.json", JSON.stringify(arr));
    res.json({
      status: "success",
      results: 1,
      data: {
        NewProduct: data,
      },
    });
  }




  const deleteProd= async (req, res) => {
    // console.log(Object.keys(req));
    const data = req.body;
    if (!data.price || !data.title) {
      res.json({
        status: "fail",
        message: "Title or Price must be provided",
      });
      return; //This will end function execution
    }
    console.log(data);
    const db = await fsPromises.readFile("D:/programming/MERN_WORKSHOP/Express/mydata.json", "utf-8");
    const arr = JSON.parse(db);
    const len = (await arr).length;
  
    if (len == 0) data.id = 1;
    else data.id = len + 1;
  
    arr.push(data);
    console.log(arr);
    fsPromises.writeFile("./mydata.json", JSON.stringify(arr));
    res.json({
      status: "success",
      results: 1,
      data: {
        NewProduct: data,
      },
    });
  }


  module.exports={
    getAllProduct,
    addProduct,
    putProduct,
    deleteProd,
  }