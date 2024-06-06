const http = require('node:http')
const process = require('node:process')

const desiredPort = process.env.PORT ?? 3000

const server = http.createServer((req, res) => {
  console.log('Request received')
  res.write('Hello World')
  res.end()
})
server.listen(desiredPort, () => {
  console.log(`Server is running on port ${server.address().port}`)
})

server.on('error', (e) => {
  if (e.code === 'EADDRINUSE') {
    console.error(`Address ${desiredPort} in use, retrying...`)
    setTimeout(() => {
      server.close()
      server.listen(0)
    }, 1000)
  }
})
