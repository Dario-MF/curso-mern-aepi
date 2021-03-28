const dayjs = require('dayjs');
const jwt = require('jsonwebtoken');
const Usuario = require('../models/Usuario');


const esTokenValido = async (req, res, next) => {
    if (!req.headers['authorization']) {
        return res.status(400).json({
            error: 'Acceso denegado, no se encuentra token.'
        });
    };
    let payload;
    try {
        payload = jwt.verify(req.headers['authorization'], process.env.PRIVATE_KEY_JWT)
    } catch (error) {
        return res.status(403).json({
            error: 'Acceso denegado, token no valido'
        });
    };
    if (dayjs().unix() > payload.exp) {
        return res.status(403).json({
            error: 'Acceso denegado, token caducado'
        });
    };
    req.body.uid = payload.uid;
    next();
};


const esRolValido = async (req, res, next) => {
    const { uid } = req.body;
    const usuario = await Usuario.findById(uid);
    if (usuario.rol !== 'admin') {
        return res.status(403).json({
            error: 'Acceso denegado, rol admin requerido'
        });
    };
    console.log(usuario.rol)
    next();
};

const isEmailUnicoUsuario = async (email = '') => {
    const EmailUnico = await Usuario.findOne({ email });
    if (EmailUnico) {
        throw new Error('El email ya esta en uso');
    };
    return;
};

module.exports = {
    esTokenValido,
    esRolValido,
    isEmailUnicoUsuario
};