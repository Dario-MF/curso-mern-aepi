const { validationResult } = require('express-validator');


const validarCampos = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log(errors)
        res.render('pages/error', {
            title: 'Error',
            desc: 'Error en los datos',
        });
    };
    next();
};


module.exports = {
    validarCampos
};