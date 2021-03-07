const express = require('express');
const chalk = require('chalk');



const app = express();

app.get('/principal', (req, res)=> {
    res('respuesta del servidor.')
})

app.listen(3000, ()=> {
    console.log(chalk.bgBlue.white('servidor escuchando en puerto 3000'))
})