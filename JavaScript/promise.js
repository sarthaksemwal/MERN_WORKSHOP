
// //promise is a function it takes the callback

setTimeout(function abc() {
    console.log('i am one');
}, 0);

const pr = new Promise((resolve, reject) => {
    setTimeout(() => { resolve("done"); }, 0);
});

// // resolve is hadeleed by the then and the reject is handeled by the catch 
pr.then(function b(res) {
    console.log("promise complete:", res);
});

setTimeout(function xyx() {
    console.log('i am two');
}, 0); 
