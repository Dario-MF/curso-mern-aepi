

const fs = require('fs');
const fsPromises = require('fs/promises');

console.clear()
/*
// Lectura de Rutas de forma sincrona
 const files = fs.readdirSync('.');


// Lectura de rutas Asincrona.
fs.readdir('.', (err, files)=> {

    if(err) throw err
    
    console.log(files);
})


//Lectura de Rutas con promesas.
fsPromises.readdir('./pepe')
    .then(files => console.log(files))
    .catch(error => console.log(error));


// Lectura de ficheros Asincrono:
fs.readFile('./ficheros/primero.md', 'utf8', (err, data)=> {
    if(err)console.log(err)
    console.log(data)
})


// Lectura de ficheros con promesas:

fsPromises.readFile('./ficheros/primero.md', 'utf8')
    .then(data => console.log(data))
    .catch(err => console.log(err));

*/

// Escribir en fichero:
fsPromises.appendFile('./ficheros/segundo.md', 'nuevo string')
    .then(() => console.log('se escribio el fichero'))
    .catch(err => console.log(err));

// escribir en fichero con callback
//...

// Crear fichero no existente:
//...

