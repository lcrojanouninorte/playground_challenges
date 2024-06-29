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
  //  id: Number,
    firstname: String,
    lastname: String,
    position: String,
    company: companySchema

}, {
        toJSON: { virtuals: true }, // Enable virtuals to be included in toJSON output
        id: false // Disable default virtual 'id' field based on _id
      });

      // Define a virtual property 'id' based on _id
providerSchema.virtual('id').get(function() {
    return this._id; // Convert _id to a hex string (or use any desired format)
  });
  
module.exports = {
    providerSchema,
    companySchema
}