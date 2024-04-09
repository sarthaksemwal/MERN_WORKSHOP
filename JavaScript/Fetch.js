//fetch tells us what to do to the browser and then we will get the response

// const req=fetch("https://api.github.com/user/sarthaksemwal")
// console.log(req)
// //when the promise is not completed this code will not work
// req.then(()=>console.log("Fetched"))


// const req=fetch('https://dummyjson.com/products/1')
// const res=req.then(res => res.json())
// req.then((data)=>console.log(data));


console.log("start")
//fetching the api 
fetch('https://dummyjson.com/products/1')
//waiting for the resposnse with promise then converting the data packet tot the json file
.then(res => res.json())
//then we will print the json 
.then(json => console.log(json))
.catch((err)=>{
    console.log("Error Occured in fetch Api")
})
console.log("End")