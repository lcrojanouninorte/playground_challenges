
const providerModel = require('../models/providerModel.js');

const addProvider = (req, res) => {
    res.render('providers/providers-add-form');
}
const add = (req, res) => {
    let provider = {}
    provider.id = req.params.id;
    provider.firstname = req.body.firstname;
    provider.lastname = req.body.lastname;
    provider.position = req.body.position;
    provider.company = {
        company_name: req.body.company_name,
        address: req.body.address,
        address2: req.body.address2,
        city: req.body.city,
        state: req.body.state,
        postal_code: req.body.postal_code,
        phone: req.body.phone,
        email: req.body.email,
        description: req.body.description,
        tagline: req.body.tagline
    }
    providerModel.addProvider(provider);
    res.render('providers/providers-add');
}
const getProviders = (req, res) => {
    const providers = providerModel.getProviders();

    res.render('providers/providers-list', { providers });
}

const getProvider = (req, res) => {
    const provider = providerModel.getProvider(req.params.id);
    res.render('providers/providers-details', { provider });
}

const editProvider = (req, res) => {
    const provider = providerModel.getProvider(req.params.id);
    console.log(provider);
    res.render('providers/providers-edit', { provider });
}
const updateProvider = (req, res) => {
    let provider = {}
    provider.id = req.params.id;
    provider.firstname = req.body.firstname;
    provider.lastname = req.body.lastname;
    provider.position = req.body.position;
    provider.company = {
        company_name: req.body.company_name,
        address: req.body.address,
        address2: req.body.address2,
        city: req.body.city,
        state: req.body.state,
        postal_code: req.body.postal_code,
        phone: req.body.phone,
        email: req.body.email,
        description: req.body.description,
        tagline: req.body.tagline
    }


    providerModel.updateProvider(req.params.id, provider);
    res.render('providers/provider-update');
}

const deleteProvider = (req, res) => {
    providerModel.deleteProvider(req.params.id);
    res.render('providers/providers-delete');
}


module.exports = {
    addProvider,
    add,
    getProviders,
    getProvider,
    updateProvider,
    deleteProvider,
    editProvider


}