const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const clienteSchema = new Schema({
    nombre: String,
    apellidos: String,
    email: String,
    telefono: Number,
    newsletter: Boolean,
    condiciones: Boolean
});



module.exports = mongoose.model('cliente', clienteSchema);