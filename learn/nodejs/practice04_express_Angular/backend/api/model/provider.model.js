
const mongoose = require('mongoose');
const { providerSchema } = require('../../schemas/providerSchema');
const providers = mongoose.model('Provider', providerSchema);

module.exports = providers


