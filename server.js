const http = require("http");
const fs = require("fs");

let server = http.createServer(function (req, res) {
  if (req.url === "/") {
    fs.readFile("index.html", (error, data) => {
      if (error) {
        res.setHeader("content-type", "text/plain");
        res.write("Error!");
        res.end();
      } else {
        res.setHeader("content-type", "text/html");
        res.write(data);
        res.end();
      }
    });
  } else if (req.url === "/index.js") {
    fs.readFile("index.js", (error, data) => {
      if (error) {
        res.setHeader("content-type", "text/plain");
        res.write("Error!");
        res.end();
      } else {
        res.setHeader("content-type", "application/javascript");
        res.write(data);
        res.end();
      }
    });
  } else if (req.url === "/style.css") {
    fs.readFile("style.css", (error, data) => {
      if (error) {
        res.setHeader("content-type", "text/plain");
        res.write("Error!");
        res.end();
      } else {
        res.setHeader("content-type", "text/css");
        res.write(data);
        res.end();
      }
    });
  }
});

server.listen(3000);
