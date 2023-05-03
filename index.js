const http = require("http");
const server = http.createServer((req, res) => {
  res.end("server has been created ...");
});

server.listen(3000, () => {
  console.log("working ...");
});
