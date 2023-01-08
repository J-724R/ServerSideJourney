const fs = require('fs');

const file = fs.readFileSync(process.argv[2]);
const StringfyFile = file.toString();
const Arr = StringfyFile.split('\n');
const NumberOfLines = (Arr.length) - 1;

console.log(NumberOfLines);
