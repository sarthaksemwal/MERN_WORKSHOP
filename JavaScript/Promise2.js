//if the number is greter or euql to 5 res else reject using the promise

let random=()=>{
    for (let i = 0; i < 10; i++) {
        // Generate a random number between 1 and 10 (inclusive)
        const randomNumber = Math.floor(Math.random() * 10) + 1;
        return randomNumber;
      }
}


let pr= new Promise((res,rej)=>{
    if(random()<=5){
        res();
    }
    
    else{
        rej();
    }
})

pr
.then(()=>console.log("Accepted"))
.catch(()=>console.log("Rejected"))