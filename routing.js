const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("<h1> HOME </h1>");
  }
  if (req.url === "/about") {
    res.end("<h1> ABOUT PAGE </h1>");
  }
  if (req.url === "/contact") {
    res.end("<h1> CONTACT PAGE </h1>");
  } else {
    res.end("<h1> PAGE NOT FOUND </h1>");
  }
});

server.listen(5000, () => {
  console.log("working route...");
});
