const fs = require('fs')
const process = require('process')
const pc = require('picocolors')

function printFiles (desiredPath) {
  fs.readdir(desiredPath, (err, files) => {
    if (err) {
      console.error(err)
      return
    }
    files.forEach(file => {
      console.log(pc.green(file))
    })
  })
}

printFiles(process.argv[2])
