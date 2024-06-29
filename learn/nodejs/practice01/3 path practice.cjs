const path = require('node:path');

console.log(path.sep);

console.log(path.join('folder', 'subfolder', 'file.txt'));

console.log(path.basename('/tmp/file.txt'));	

console.log(path.basename('/tmp/file.txt', '.txt'));	

console.log(path.extname('file.txt'));

console.log(path.resolve('folder', 'subfolder', 'file.txt'));