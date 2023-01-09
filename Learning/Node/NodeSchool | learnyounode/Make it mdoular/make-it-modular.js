const filterFn = require('../../mymodule');
const dir = process.argv[2]
const filterStr = process.argv[3]


filterFn(dir, filterStr, function (err, filesList) {
  try{
    filesList.forEach(element => {
      console.log(element);
    });
  } catch {
    console.error('There was an error:', err)
  }
});