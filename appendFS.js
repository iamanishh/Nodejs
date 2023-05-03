const fs = require("fs");

fs.appendFile("./sample1.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log("modified");
});

console.log("It is first");
