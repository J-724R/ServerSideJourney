const fs = require('fs');

function getFile (logFile) {
  fs.readFile(process.argv[2], 'utf8', (err, data) => {
    try {
      const string = data;
      const NumberOfLines = string.split('\n').length - 1;
      logFile(NumberOfLines);
    } catch {
      console.log(err);
    }
  });
}

function logFile(file){
  console.log(file);
}

getFile(logFile);

