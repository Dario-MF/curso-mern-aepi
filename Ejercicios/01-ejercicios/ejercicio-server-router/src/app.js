const createError = require('http-errors');
const express = require('express');
const app = express();

const homeRoute = require('./routes/home');
const infoRoute = require('./routes/info');
const contactRoute = require('./routes/contact');
const aboutRoute = require('./routes/about');
const shopRoute = require('./routes/shop');
const profileRoute = require('./routes/profile');

// Middelwares:



// Declaracion de rutas:
app.use('/', homeRoute);
app.use('/info', infoRoute);
app.use('/contact', contactRoute);
app.use('/about', aboutRoute);
app.use('/profile', profileRoute);
app.use('/shop', shopRoute);


/* // Catch error:
app.use((req, res, next) => {
    next(createError(404));
}); */



module.exports = app;