const http = require('http');
const fs = require('fs');
const baseDir = './public';
const { PORT } = require('../shared/environment.cjs');

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        render('index.html', res)
    } else if (req.url == '/about') {
        render('about.html', res)
    } else if (req.url == '/contact') {
        render('contact.html', res)
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' })
        res.write('404 Not Found1')
        res.end()
    }
})

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})


const render = (file, res) => {
    fs.readFile(`${baseDir}/${file}`, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' })
            res.write('404 Not Found>')
            res.write('404 Not Found>')
            res.end()
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.end(data)
        }
    })
}