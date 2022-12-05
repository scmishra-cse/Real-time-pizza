const express = require('express');

const app = express();
const path = require('path');
const ejs = require('ejs');
const expressLayouts = require('express-ejs-layouts');

// setting port number
const PORT = process.env.PORT || 3000

//set Template engine
app.use(expressLayouts)
app.set('views', path.join(__dirname, '/res/views'))
app.set('view engine', 'ejs')


// Creating routes 
//Assets
app.use(express.static('public'))
app.get('/', (req, res) => {
    res.render('home')
})
app.get('/carts', (req, res) => {
    res.render('customers/cart')
})
app.get('/menu', (req, res) => {
    res.render('menu')
})
app.get('/locations', (req, res) => {
    res.render('menu')
})
app.get('/offers', (req, res) => {
    res.render('menu')
})
app.get('/register', (req, res) => {
    res.render('menu')
})
app.get('/login', (req, res) => {
    res.render('menu')
})


//creating server
app.listen(PORT, () => {
    console.log(`Hello on PORT ${PORT}`)
})