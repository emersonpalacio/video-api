const fs = require("fs");

fs.mkdir("node", { recursive: true }, (err) => {
  if (err) {
    return console.log(err);
  }
});
