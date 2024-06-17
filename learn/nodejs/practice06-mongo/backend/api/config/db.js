const db = require('mongoose');
const providers = require('../model/providers.js');

db.connect('mongodb://127.0.0.1:27017/db_providers', {
}).then(() => {
    console.log('Connected to database');
    //create providers collection if not exist
    providers.createCollection('providers').then(() => {
        console.log('Collection created');
    }).catch((err) => {
        console.log(err.message);
    });
}).catch((err) => {
    console.log(err.message);
});


module.exports = providers

