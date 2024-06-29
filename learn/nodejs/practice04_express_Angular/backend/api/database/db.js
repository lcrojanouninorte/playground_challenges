const db = require('mongoose');
const providers = require('../model/provider.model');
db.set('strictQuery', false);
db.connect('mongodb://127.0.0.1:27017/db_providers', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Successfully connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB', error);
});


module.exports = providers;
