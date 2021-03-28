const { Schema, model } = require('mongoose');

const teacherSchema = new Schema({
    nombre: {
        type: String,
        trim: true,
        minlength: [4, 'minimo 4 caracteres'],
        maxlength: [15, 'maximo 15 caracteres'],
        required: [true, 'El campo nombre es requerido']
    },
    apellidos: {
        type: String,
        trim: true,
        minlength: [4, 'minimo 4 caracteres'],
        maxlength: [20, 'maximo 15 caracteres'],
        required: [true, 'El campo apellidos es requerido']
    },
    edad: {
        type: Number,
        min: [18],
        max: [99],
        required: [true, 'El campo edad es requerido']
    },
    especialidad: {
        type: String,
        lowercase: true,
        enum: ['body combat', 'body pump', 'spinning', ' yoga', 'zumba', 'pilates'],
    }
}, {
    versionKey: false
});


module.exports = model('Teacher', teacherSchema);