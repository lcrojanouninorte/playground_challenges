const fs = require("node:fs/promises");
fs.readdir(".")
  .then((files) => {
    for (const file of files) {
      console.log(file);
    }
  })
  .then(() => {
    console.log("Done!");
  })
  .catch((err) => {
    console.error(err);
  });
