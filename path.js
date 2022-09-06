const path = require('path');

console.log(path.sep)

const filePath = path.join('/folder1','folder2','sethx.text')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname, 'folder1','folder2','sethx.text')
console.log(absolute)