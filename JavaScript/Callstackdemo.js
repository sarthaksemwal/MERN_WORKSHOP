console.log("GEC start")
function print(){
    console.log("printstart")
    let ans=2+3
    console.log(ans)
    console.log('printend')
}

setTimeout(print,10000)
console.log('GEC END')