

const cambiosForm = (req, res, next) => {
    req.body.newsletter = req.body.newsletter ? true : false;
    req.body.condiciones = req.body.condiciones ? true : false;
    req.body.telefono = parseInt(req.body.telefono)
    next();
};

module.exports = {
    cambiosForm
};