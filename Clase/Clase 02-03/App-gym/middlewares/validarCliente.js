const Cliente = require('../models/Cliente');


const isEmailUnicoCliente = async (email = '') => {
    const EmailUnico = await Cliente.findOne({ email });
    if (EmailUnico) {
        throw new Error('El email ya esta en uso');
    };
    return;
};

const isIdValidCliente = async (id = '') => {
    const idValid = await Cliente.findById(id);
    if (!idValid) {
        throw new Error('El id no es valido');
    };
    return;
};



module.exports = {
    isEmailUnicoCliente,
    isIdValidCliente
};