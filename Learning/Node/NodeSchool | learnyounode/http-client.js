const url = process.argv[2];
const http = require('node:http');

http.get(url, (res)=>{
  res.setEncoding('utf8');
  res.on('data', console.log)
  res.on('error', console.error)
})