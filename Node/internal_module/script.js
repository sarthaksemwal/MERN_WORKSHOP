const fs=require('node:fs');
console.log('start')
//this function is used to read the file of the specified path given

const data=fs.readFileSync('./myReadMe.txt','utf-8')
console.log(data)

console.log('end')
