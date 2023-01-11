import http from "node:http";
import fs from "node:fs";

let count = 0;

const pageNotFound = fs.readFileSync("404.html", (err, data) => {
  if (err) throw err;
  return data;
});

http
  .createServer((req, res) => {
    if (req) count++;
    console.log(`request number: ${count}`);
    console.log("fileName: " + fileName);

    const fileName =
      req.url === ("" || "/") ? "./index.html" : `.${req.url}.html`;

    fs.readFile(fileName, (err, data) => {
      if (err) {
        console.error("unable to read file");
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write(pageNotFound);
        return res.end();
      }

      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end;
    });
  })
  .listen(8080, () => {
    console.log("Listening on 8080");
  });
