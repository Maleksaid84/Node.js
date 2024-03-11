const { isUtf8 } = require('buffer')
const fs = require('fs')
console.log(fs.readFileSync('hello.txt','Utf8'))
fs.writeFileSync('welcom.txt','salut')