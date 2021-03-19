const Cliente = require('../models/Cliente');


const findAllClients = async (req, res, next) => {
    try {
        const clientes = await Cliente.find({ state: true });
        res.render('pages/clients/clientIndex', { title: 'Clientes', clientes });

    } catch (error) {
        console.log(error);
        next(error);
    };
};

const renderNewClient = (req, res) => {
    res.render('pages/clients/clientNew', { title: 'Nuevo Cliente' });
};

const findClientById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const cliente = await Cliente.findById(id);
        res.render('pages/clients/clientEdit', { title: 'Editar Cliente', cliente });

    } catch (error) {
        console.log(error);
        next(error);
    };
};

const deleteClientById = async (req, res, next) => {
    // Por buenas practicas en db, no se elimina la informacion solo se inhabilita para la app.
    try {
        const { id } = req.params;
        await Cliente.findByIdAndUpdate(id, { state: false })
        res.redirect('/client/index');

    } catch (error) {
        console.log(error);
        next(error);
    };
};

const createNewClient = async (req, res, next) => {
    try {
        // Se extrae del body solo los campos que interesan, evitamos mandar nada de mas.
        const {
            nombre,
            apellidos,
            email,
            telefono,
            newsletter,
            condiciones } = req.body;
        await Cliente.create({
            nombre,
            apellidos,
            email,
            telefono,
            newsletter,
            condiciones
        });
        res.redirect('/client/index');

    } catch (error) {
        console.log(error);
        next(error);
    };
};

const updateClient = async (req, res, next) => {
    try {
        const { id } = req.params;
        // Sacamos posible conflicto de parametro _id en DB.
        const { _id, nombre,
            apellidos,
            email,
            telefono,
            newsletter,
            condiciones
        } = req.body;

        await Cliente.findByIdAndUpdate(id, {
            nombre,
            apellidos,
            email,
            telefono,
            newsletter,
            condiciones
        });
        res.redirect('/client/index');

    } catch (error) {
        console.log(error);
        next(error);
    };
};



module.exports = {
    findAllClients,
    renderNewClient,
    findClientById,
    deleteClientById,
    createNewClient,
    updateClient
};