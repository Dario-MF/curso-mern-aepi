const Cliente = require("../models/Cliente");




// verificar si correo existe.
const esEmailUnique = async (email = '') => {
    const existeEmail = await Cliente.findOne({ email, state: true });
    if (existeEmail) {
        throw new Error(`El email: ${email}, ya esta registrado`);
    };
};

// validar si el id existe en la DB.
const existeClienteId = async (id) => {
    const existeCliente = await Cliente.findById(id, { state: true });
    if (!existeCliente) {
        throw new Error(`El cliente con id: ${id}, no existe`);
    };
};



module.exports = {
    esEmailUnique,
    existeClienteId
};