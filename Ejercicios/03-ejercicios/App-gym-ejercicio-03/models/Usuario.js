const { Schema, model } = require('mongoose');


const usuarioSchema = new Schema({
    username: {
        type: String,
        trim: true,
        minlength:[4, 'minimo 4 caracteres'], 
        maxlength:[20, 'maximo 15 caracteres'],
        required: true
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        required: [true, 'El campo email es requerido'],
        validate: [(email) => {
            var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return re.test(email)
         }, 'El campo email es invalido'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'El campo email es invalido']
    },
    password: {
        type: String,
        minlength:[6, 'minimo 4 caracteres'], 
        required: [true, 'El campo password es requerido']
    },
    rol: {
        type: String,
        default: 'usuario'
    }
}, {
    versionKey: false
});








module.exports = model('usuario', usuarioSchema);