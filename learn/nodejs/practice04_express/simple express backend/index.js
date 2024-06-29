const express = require('express');
const app = express();
const port = 3002;

app.set('view engine', 'hbs'); // Set the view engine to EJS or any other supported view engine
app.set('views', './public'); // Set the directory where the views are located

app.get('/', (_, res) => {
    res.render('index.hbs'); // Provide the file extension for the view file
}).listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})
