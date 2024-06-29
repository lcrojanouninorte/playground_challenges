
module.exports = {
    index: (req, res) => res.render('index', { title: 'Home' }),
    about: (req, res) => res.render('about', { title: 'About' }),
    contact: (req, res) => res.render('contact', { title: 'Contact' }),
    login: (req, res) => res.render('login', { title: 'Login' }),
    register: (req, res) => res.render('register', { title: 'Register' }),

    addProvider: (req, res) => res.render('./providers/providers-add-form', { title: 'Add Provider' })
}