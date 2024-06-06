const pr = require("process");

console.log(pr.argv);
console.log(pr.cwd());
console.log(pr.env);

pr.on("exit", (code) => {
  console.log(`About to exit with code: ${code}`);
});

pr.exit(1);
