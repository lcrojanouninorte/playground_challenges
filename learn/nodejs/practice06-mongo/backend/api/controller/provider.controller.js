const app = require('express');
const router = app.Router();
const providers = require('../model/providers.js');

function getProviders(req, res, next) {
    providers.find()
        .then((providers) => {
            if (!providers || providers.length === 0) {
                return res.status(404).send('No providers found');
            }
            res.json(providers);
        })
        .catch((err) => {
            res.status(500).send(err.message);
        });
}

function getProvider(req, res, next) {
    const providerId = req.params.id;
    providers.findById(providerId)
        .then((provider) => {
            if (!provider) {
                return res.status(404).send('Provider not found');
            }
            res.json(provider);
        })
        .catch((err) => {
            res.status(500).send(err.message);
        });
}

function createProvider(req, res, next) {
    const newProvider = req.body;

    providers.create(newProvider)
        .then((savedProvider) => {
            res.status(201).json(savedProvider);
        })
        .catch((err) => {
            if (err.name === 'ValidationError') {
                return res.status(400).json({ error: err.message });
            }
            res.status(500).send(err.message);
        });
}

function updateProvider(req, res, next) {
    const providerId = req.params.id;
    const providerUpdate = req.body;

    providers.findByIdAndUpdate(providerId, providerUpdate, { new: true, runValidators: true })
        .then((updatedProvider) => {
            if (!updatedProvider) {
                return res.status(404).send('Provider not found');
            }
            res.json(updatedProvider);
        })
        .catch((err) => {
            res.status(500).send(err.message);
        });
}

function deleteProvider(req, res, next) {
    const providerId = req.params.id;
    providers.findByIdAndDelete(providerId)
        .then((deletedProvider) => {
            if (!deletedProvider) {
                return res.status(404).send('Provider not found');
            }
            res.json(deletedProvider);
        })
        .catch((err) => {
            res.status(500).send(err.message);
        });
}

function deleteProviders(req, res, next) {
    providers.deleteMany()
        .then(() => {
            res.status(204).send();
        })
        .catch((err) => {
            res.status(500).send(err.message);
        });
}

module.exports = {
    getProviders,
    getProvider,
    createProvider,
    updateProvider,
    deleteProvider,
    deleteProviders
};  