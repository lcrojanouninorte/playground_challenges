const fs = require('fs/promises');
const path = require('path');
let providers = null;

async function getProviders() {
    if (providers !== null) {
        return providers;
    }
    const filePath = path.join(__dirname, '..', 'model', 'providers.json');
    const jsonData = await fs.readFile(filePath, 'utf-8');
    providers = JSON.parse(jsonData);
    return providers;
}

async function getProvider(id) {
    if (providers === null) {
        await getProviders();
    }
    const provider = providers.find(provider => provider.id == id);
    return provider;
}


async function updateProvider(provider) {
    if (providers === null) {
        await getProviders();
    }
    const index = providers.findIndex(p => p.id == provider.id);
    providers[index] = { ...provider };
    const filePath = path.join(__dirname, '..', 'model', 'providers.json');
    try {
        await fs.writeFile(filePath, JSON.stringify(providers, null, 2), 'utf-8');
    } catch (error) {
        throw new Error(`Failed to update providers: ${error.message}`);
    }
}

async function deleteProvider(id) {
    if (providers === null) {
        await getProviders();
    }
    const index = providers.findIndex(p => p.id == id);
    providers.splice(index, 1);
    console.log("deleted", id);
    const filePath = path.join(__dirname, '..', 'model', 'providers.json');
    try {
        await fs.writeFile(filePath, JSON.stringify(providers, null, 2), 'utf-8');
    } catch (error) {
        throw new Error(`Failed to delete provider: ${error.message}`);
    }
}

async function addProvider(provider) {
    if (providers === null) {
        await getProviders();
    }
    provider.id = providers.length + 1;
    providers.push(provider);
    const filePath = path.join(__dirname, '..', 'model', 'providers.json');
    try {
        await fs.writeFile(filePath, JSON.stringify(providers, null, 2), 'utf-8');
    } catch (error) {
        throw new Error(`Failed to add provider: ${error.message}`);
    }
}

module.exports = {
    getProviders,
    getProvider,
    updateProvider,
    deleteProvider,
    addProvider
};