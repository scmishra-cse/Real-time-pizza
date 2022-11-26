const express = require('express');

const app = express();
const path = require('path');
const ejs = require('ejs');
const expressLayouts = require('express-Ejs-layouts');

// setting port number
const PORT = process.env.PORT || 3000

// Creating routes 

//Assets
app.use(express.static('public'))
app.get('/', (req, res) => {
    res.render('home')
})

//set Template engine
app.use(expressLayouts)
app.set('views', path.join(__dirname, '/res/views'))
app.set('view engine', 'ejs')

//creating server
app.listen(PORT, () => {
    console.log(`Hello on PORT ${PORT}`)
})