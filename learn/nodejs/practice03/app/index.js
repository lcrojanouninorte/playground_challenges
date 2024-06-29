const http = require('http');
const { PORT } = require('../shared/environment.cjs') || 3000;
const options = {
    hostname: 'localhost',
    port: PORT,
    path: '/',
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',

    },
}
console.log(PORT);
const req = http.request(options, (res) => {
    console.log(`STATUS: ${res.statusCode}`);
    console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
        console.log(`BODY: ${chunk}`);
    });
    res.on('end', () => {
        console.log('No more data in response.');
    });
});

req.on('error', (e) => {
    console.error(`problem with request: ${e.message}`);
});

// Write data to request body

req.end();