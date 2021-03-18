const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const clienteSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'nombre is required']
    },
    apellidos: {
        type: String,
        required: [true, 'apellido is required']
    },
    email: {
        type: String,
        required: [true, 'email is required'],
        unique: true
    },
    telefono: {
        type: Number,
        required: [true, 'telefono is required']
    },
    newsletter: {
        type: Boolean,
        default: false
    },
    condiciones: {
        type: Boolean,
        default: false
    },
    state: {
        type: Boolean,
        default: true
    }
});



module.exports = mongoose.model('cliente', clienteSchema);
