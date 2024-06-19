const mongoose = require('mongoose');
const companySchema = new mongoose.Schema(
    {
        company_name: String,
        address: String,
        address2: String,
        city: String,
        state: String,
        postal_code: String,
        phone: String,
        email: String,
        description: String,
        tagline: String
    }
);
const providerSchema = new mongoose.Schema({
    id: Number,
    firstname: String,
    lastname: String,
    position: String,
    company: companySchema

});
module.exports = {
    providerSchema,
    companySchema
}