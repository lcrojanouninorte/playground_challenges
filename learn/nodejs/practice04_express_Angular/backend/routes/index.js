const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('index', { title: 'Welcome' })
})
router.get('/about', (req, res) => {
  res.render('about')
})
router.get('/contact', (req, res) => {
  res.render('contact')
})
router.get('/login', (req, res) => {
  res.render('login')
})
router.get('/register', (req, res) => {
  res.render('register')
})

router.get('/forgot-password', (req, res) => {
  res.render('forgot-password')
})


module.exports = router;
