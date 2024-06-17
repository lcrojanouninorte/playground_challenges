const mongoose = require('mongoose');
const { providerSchema } = require('../schemas/providers.schema');

const Providers = mongoose.model('Providers', providerSchema);


module.exports = Providers;