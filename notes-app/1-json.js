const fs= require('fs');
const dataBuffer=fs.readFileSync('1-json.json');
const dataJson= dataBuffer.toString()
const data= JSON.parse(dataJson);
console.log(data.title);