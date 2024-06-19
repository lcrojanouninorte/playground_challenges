
const providers = require('../data/providers.json');

module.exports = {
    addProvider: (data) => {
        id = providers.length + 1
        data.id = id
        providers.push(data)
    },
    getProviders: () => {
        return providers
    },
    getProvider: (id) => {
        return providers.find(provider => provider.id == id)
    },
    updateProvider: (id, data) => {
        const providerIndex = providers.findIndex(provider => provider.id == id)
        providers[providerIndex] = {
            ...providers[providerIndex],
            ...data
        }
    },
    deleteProvider: (id) => {
        const providerIndex = providers.findIndex(provider => provider.id == id)
        providers.splice(providerIndex, 1)
    }
}

