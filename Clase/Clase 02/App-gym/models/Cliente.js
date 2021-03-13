const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const clienteSchema = new Schema({
    nombre: String,
    apellidos: String,
    email: String,
    cuota: Number,
    activo: Boolean
});


// Propiedad virtual, no almacena en DB se crea y muere con el server.
clienteSchema.virtual('nombreCompleto').get(function () {// usar function y no arrow por el scope del this
    return this.nombre + ' ' + this.apellidos;

})

// Propiedades estaticas.
clienteSchema.statics.activos = function () {
    return this.model('cliente').find({ activo: true });
}

module.exports = mongoose.model('cliente', clienteSchema);


// Fat Model Skinny Controller.



