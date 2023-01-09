const fs = require("fs");
const path = require("path");
const folder = process.argv[2];
const ext = process.argv[3];

// console.log(path)
fs.readdir(folder, getFileList);

function getFileList(err, list) {
  try {
    list.forEach(file => {
      if (file.endsWith(ext) && file.includes('.')) console.log(file)
    })
  } catch {
    console.log(err);
  }
}