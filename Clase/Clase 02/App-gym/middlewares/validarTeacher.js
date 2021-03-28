const Teacher = require("../models/Teacher");



const isIdValidTeacher = async (id = '') => {
    const idValid = await Teacher.findById(id);
    if (!idValid) {
        throw new Error('El id no es valido');
    };
    return;
};


module.exports = {
    isIdValidTeacher
};