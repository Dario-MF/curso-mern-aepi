const { validationResult } = require('express-validator');


const validarErrores = (req, res, next) => {
    const errores = validationResult(req)
    if (!errores.isEmpty()) {
        return res.status(400).json({
            msg: 'error en la petición',
            error: errores.array()
        });
    };
    next();
};

module.exports = validarErrores;