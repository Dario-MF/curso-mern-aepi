const { validationResult } = require('express-validator');


const validarCampos = (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            validationResult(req).throw();
        };
        next();
    } catch (error) {
        const err = error.mapped();
        res.locals.message = 'Error en la petición: ' + Object.keys(err);
        res.locals.error = JSON.stringify(err);
        res.locals.status = 400;

        res.status(400).render('pages/error');
    };
};


module.exports = {
    validarCampos
};