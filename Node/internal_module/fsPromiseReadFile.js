const fsPromises=require('fs/promises');
console.log('start')
//its a asyncronous way of the reading file
const pr=fsPromises.readFile('./myReadMe.txt','utf-8')
pr.then((res)=>{
    console.log(res)
})
console.log('end')