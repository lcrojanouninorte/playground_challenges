const mongoose = require('mongoose');
const { Schema } = mongoose;


const companySchema = new Schema({
    company_name: { type: String, required: true },
    address: { type: String, required: true },
    address2: { type: String },
    city: { type: String, required: true },
    state: { type: String, required: true },
    postal_code: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true, unique: true, match: [/\S+@\S+\.\S+/, 'is invalid'] },
    description: { type: String, required: true },
    tagline: { type: String, required: true }
});

const providerSchema = new Schema({

    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    position: { type: String, required: true },
    company: companySchema
});


module.exports = { providerSchema, companySchema };