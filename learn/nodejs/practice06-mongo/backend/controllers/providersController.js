/// <reference types="express" />
const providersService = require('../services/providersService')

module.exports = {
    list: (req, res) => {
        const providers = providersService.getProviders().then(providers => {
            res.render('./providers/providers-list', { title: 'Providers', providers })
        }).catch(error => {
            res.render('error', { error })
        })

    },
    addProvider: (req, res) => res.render('./providers/providers-add-form', { title: 'Add Provider' }),
    add: async (req, res) => {
        const {
            firstname,
            lastname,
            position,
            company_name,
            address,
            address2,
            city,
            state,
            postal_code,
            phone,
            email,
            description,
            tagline
        } = req.body;
        const provider = {
            firstname,
            lastname,
            position,
            company: {
                company_name,
                address,
                address2,
                city,
                state,
                postal_code,
                phone,
                email,
                description,
                tagline
            }
        };
        try {
            await providersService.addProvider(provider);
            res.render('./providers/providers-add', { title: 'Add Provider', provider });
        } catch (error) {
            res.render('error', { error, message: error.message })
        }

    },
    edit: async (req, res) => {
        const id = req.params.id;
        try {
            const provider = await providersService.getProvider(id);
            res.render('./providers/providers-edit', { title: `Provider ${id}`, provider });
        } catch (error) {
            res.render('error', { error, message: error.message })
        }
    },
    update: async (req, res) => {
        const id = req.params.id;
        const {
            firstname,
            lastname,
            position,
            company_name,
            address,
            address2,
            city,
            state,
            postal_code,
            phone,
            email,
            description,
            tagline
        } = req.body;

        const provider = {
            id,
            firstname,
            lastname,
            position,
            company: {
                company_name,
                address,
                address2,
                city,
                state,
                postal_code,
                phone,
                email,
                description,
                tagline
            }
        };
        try {
            await providersService.updateProvider(provider);
            res.render('./providers/provider-update', { title: `Provider ${id}`, provider });
        } catch (error) {
            res.render('error', { error, message: error.message })
        }
    },

    delete: (req, res) => {
        const id = req.params.id;
        try {
            providersService.deleteProvider(id);
            res.render('./providers/providers-delete', { title: `Provider ${id}` });
        } catch (error) {
            res.render('error', { error, message: error.message });
        }

    },
    details: async (req, res) => {
        const id = req.params.id;
        try {
            const provider = await providersService.getProvider(id);
            res.render('./providers/providers-details', { title: `Provider ${id}`, provider });
        } catch (error) {
            res.render('error', { error, message: error.message });
        }
    }

}