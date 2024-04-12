const fs=require('fs')
//creating the file using the writeFileSyncs
fs.writeFileSync('./log.txt',"om namah siva")

const data=fs.readFileSync('./myReadMe.txt','utf-8')
console.log(data);           