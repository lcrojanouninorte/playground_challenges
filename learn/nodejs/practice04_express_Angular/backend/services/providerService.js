//
const providers = require('../models/providerModel');
const addProvider = (provider) => {
    providers.create(provider);
}

const getProviders = () => {
    return providers.getProviders();
}

exports.addProvider = {
    addProvider,
    getProviders
};