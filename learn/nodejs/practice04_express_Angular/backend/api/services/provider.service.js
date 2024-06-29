const providers = require('../database/db');
module.exports = {
    addProvider: (data) => {
        return providers.create(data)
    },
    getProviders: () => {
        return providers.find()
    },
    getProvider: (id) => {
        return providers.findById(id)
    },
    updateProvider: (id, data) => {
        return providers.findByIdAndUpdate(id, data)
    },
    deleteProvider: (id) => {
        return providers.findByIdAndDelete(id)
    }
}
