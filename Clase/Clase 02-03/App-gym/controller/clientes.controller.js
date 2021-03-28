const Cliente = require('../models/Cliente');

// Buscar todos los clientes.
const getAllCLientes = async (req, res) => {
    try {
        const clientes = await Cliente.find();
        res.status(200).json({
            msg: 'peticion correcta',
            clientes
        });
    } catch (error) {
        res.status(500).json({
            msg: 'Error in server',
            error
        });
    };
};

//Buscar cliente por id
const getCientWithId = async (req, res) => {
    const { id } = req.params;
    try {
        const cliente = await Cliente.findById(id);
        res.status(200).json({
            msg: 'peticion correcta',
            cliente
        })
    } catch (error) {
        res.status(500).json({
            msg: 'error en servidor',
            error
        });
    };
};

//Crear nuevo cliente
const saveNewCliente = async (req, res) => {
    const { nombre, apellidos, email, cuota, activo } = req.body;
    try {
        const newCliente = await Cliente.create({
            nombre,
            apellidos,
            email,
            cuota,
            activo
        });
        res.status(200).json({
            msg: 'cliente creado correctamente',
            newCliente
        });
    } catch (error) {
        res.status(500).json({
            msg: 'error en el servidor',
            error
        });
    };
};

//Modificar cliente.
const updateCliente = async (req, res) => {
    const { id } = req.params;
    try {
        const clienteEditado = await Cliente.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({
            msg: 'cliente modificado correctamente',
            clienteEditado
        });
    } catch (error) {
        res.status(500).json({
            msg: 'error en el servidor',
            error
        });
    };
};

// Eliminar Cliente
const deleteCliente = async (req, res) => {
    const { id } = req.params;
    try {
        const clienteEliminado = await Cliente.findByIdAndDelete(id);
        res.status(200).json({
            msg: 'cliente eliminado correctamente',
            clienteEliminado
        });
    } catch (error) {
        res.status(500).json({
            msg: 'error en el servidor',
            error
        });
    };
};




module.exports = {
    getAllCLientes,
    getCientWithId,
    saveNewCliente,
    updateCliente,
    deleteCliente
};
