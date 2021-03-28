const Teacher = require('../models/Teacher');

const getTeachers = async (req, res) => {
    try {
        let teachers = await Teacher.find();
        teachers = (teachers.length == 0) ? 'No hay teachers registrados' : teachers

        res.status(200).json({
            msg: 'peticion OK',
            teachers
        });
    } catch (error) {
        res.status(500).json({
            error: 'Error en el servidor',
            error
        });
    };
};

const getTeacherWithId = async (req, res) => {
    try {
        const { id } = req.params;
        const teacher = await Teacher.findById(id);
        res.status(200).json({
            msg: 'peticion OK',
            teacher
        })
    } catch (error) {
        res.status(500).json({
            error: 'Error en el servidor',
            error
        });
    };
};


const crearNewTeacher = async (req, res) => {
    const { nombre, apellidos, edad, especialidad } = req.body;
    try {
        const newTeacher = await Teacher.create({
            nombre,
            apellidos,
            edad,
            especialidad
        });
        res.status(200).json({
            msg: 'teacher registrado correctamente',
            newTeacher
        });
    } catch (error) {
        res.status(500).json({
            error: 'Error en el servidor',
            error
        });
    };
};

const updateTeacher = async (req, res) => {
    const { id } = req.params;
    try {
        const teacherEditado = await Teacher.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({
            msg: 'teacher modificado correctamente',
            teacherEditado
        });
    } catch (error) {
        res.status(500).json({
            msg: 'error en el servidor',
            error
        });
    };
};

// Eliminar Teacher
const deleteTeacher = async (req, res) => {
    const { id } = req.params;
    try {
        const teacherEliminado = await Teacher.findByIdAndDelete(id);
        res.status(200).json({
            msg: 'teacher eliminado correctamente',
            teacherEliminado
        });
    } catch (error) {
        res.status(500).json({
            msg: 'error en el servidor',
            error
        });
    };
};





module.exports = {
    getTeachers,
    getTeacherWithId,
    crearNewTeacher,
    updateTeacher,
    deleteTeacher
};