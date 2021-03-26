const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const clienteSchema = new Schema({
    nombre: {
        type: String, 
        trim: true,
        minlength:[4, 'minimo 4 caracteres'], 
        maxlength:[15, 'maximo 15 caracteres'],
        required: [true, 'El campo nombre es requerido'],
    },
    apellidos:{
        type: String, 
        trim: true,
        minlength:[4, 'minimo 4 caracteres'], 
        maxlength:[20, 'maximo 15 caracteres'],
        required: [true, 'El campo apellidos es requerido'],
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        required: [true, 'El campo email es requerido'],
        validate: [function(email) {
            var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return re.test(email)
         }, 'El campo email es invalido'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'El campo email es invalido']
    },
    cuota: {
        type: Number,
        enum: [20, 35, 50, 100],
        required: [true, 'El campo cuota es requerido']
    },
    activo:{
        type: Boolean,
        default: true
    }
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



