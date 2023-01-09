const url = process.argv[2];
const http = require("node:http");
const concatStream = require("concat-stream");
const results = [];
let count = 0

function getHttp(index) {
  http.get(process.argv[2 + index], (res) => {
    res.setEncoding("utf-8");
    res.pipe(
      concatStream((data) => {
        results[index] = data;
        count++

        if (count === 3) {
          results.forEach( index => console.log(index))
        }
      })
      );
  });
}

// function logResults() {
//   for (let i = 0; i < 3; i++) {
//     console.log(results[i])
//   }
// }

for (let i = 0; i < 3; i++) {
  getHttp(i)
}

