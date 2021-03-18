const createError = require('http-errors');



const errorCrear = (req, res, next) => {

    res.render('pages/error', {
        title: 'Error 404',
        desc: 'Página no encontrada'
    });
};


module.exports = {
    errorCrear
};