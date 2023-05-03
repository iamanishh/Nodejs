const fs = require("fs");

fs.appendFile("./sample1.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log("modified");
});

console.log("It is first");

/* APPEND create a file if it is not there */
/* APPEND just write below the line of already created code */
