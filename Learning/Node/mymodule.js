const fs = require("fs");
const path = require("path");

module.exports = function getFileList(dir, ext, callback) {
  fs.readdir(dir, (err, list) => {
    try {
      list = list.filter(function (file) {
        return path.extname(file) === '.' + ext;
      })
      callback(null, list);
    } catch {
      callback(err);
    }
  });
};
