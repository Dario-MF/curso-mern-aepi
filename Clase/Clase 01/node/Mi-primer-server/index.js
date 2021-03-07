const chalk = require('chalk');
const express = require('express');

require('dotenv').config();

const app = express();

app.get('/principal', (req, res) => {
    res.end('¡Estoy en la ruta principal!');
});

app.get('/about', (req, res) => {
    const personas = [
        { nombre: 'Mario', apellidos: 'Girón' },
        { nombre: 'Rosa', apellidos: 'Martín' },
        { nombre: 'Juan', apellidos: 'González' }
    ];
    res.json(personas);
});

app.post('/formulario', (req, res) => {
    res.send('Petición POST formulario');
});

app.delete('/productos', (req, res) => {
    res.send('Petición DELETE sobre productos');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(chalk.bgCyan.black(`Servidor escuchando en el puerto ${PORT}`));
});