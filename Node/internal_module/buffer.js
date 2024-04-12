// Buffer is a raw memory allocation outside the V8 heap, which can store raw binary data in different encodings such as ASCII, UTF-8, Base64, etc.

const b=new Buffer.from('abcxyz')
console.log(b)