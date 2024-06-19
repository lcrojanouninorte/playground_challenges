

const providerService = require('../services/provider.service');


const add = (req, res) => {

    providerService.addProvider(res.body).then((savedProvider) => {
        res.status(201).json(savedProvider);
    })
        .catch((err) => {
            if (err.name === 'ValidationError') {
                return res.status(400).json({ error: err.message });
            }
            res.status(500).send(err.message);
        });

}
const getProviders = (req, res, next) => {
    providerService.getProviders().then((providers) => {
        if (!providers || providers.length === 0) {
            return res.status(404).send('No providers found');
        }
        res.json(providers);
    })
        .catch((err) => {
            //  res.status(500).send(err.message);
        });;


}

const getProvider = (req, res) => {
    providerService.getProvider(req.params.id).then((provider) => {
        if (!provider) {
            return res.status(404).send('Provider not found');
        }
        res.json(provider);
    })
        .catch((err) => {
            res.status(500).send(err.message);
        });;
    res.send(provider);
}


const updateProvider = (req, res) => {
    providerService.updateProvider(req.params.id, req.body).then((updatedProvider) => {
        if (!updatedProvider) {
            return res.status(404).send('Provider not found');
        }
        res.json(updatedProvider);
    }
    )
        .catch((err) => {
            res.status(500).send(err.message);
        });
}

const deleteProvider = (req, res) => {
    providerService.deleteProvider(req.params.id).then((deletedProvider) => {
        if (!deletedProvider) {
            return res.status(404).send('Provider not found');
        }
        res.json(deletedProvider);
    })
}

const error = (req, res) => {
    res.send("Page not found");
}


module.exports = {
    add,
    getProviders,
    getProvider,
    updateProvider,
    deleteProvider,
    error


}
