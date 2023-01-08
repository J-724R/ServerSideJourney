const url = process.argv[2];
const http = require("node:http");
const concatStream = require("concat-stream");

http.get(url, (res) => {
  {
    res.setEncoding("utf-8");
    res.pipe(
      concatStream((data) => {
        handleData(data);
      })
    );
  }
});

function handleData(data) {
  const String = data.toString();
  console.log(String.length);
  console.log(String);
}
