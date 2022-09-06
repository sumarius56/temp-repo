const {readFileSync,writeFileSync} = require('fs');

const first =readFileSync('./folder1/first.text','utf8')
const second =readFileSync('./folder1/second.txt','utf8')

console.log(first,second)

writeFileSync('./folder1/react-app.js','Hi')