const fs = require('fs');
const { tablaMultiplicar } = require('./helpers/multiplicar')
const argv = require('yargs').argv;



/* tablaMultiplicar(7)
    .then(tabla => {
        fs.writeFileSync('tabla-multiplicar.txt', tabla)
        console.log('Archivo creado.');
    })
    .catch(error => { throw error });

 */
console.log(argv.base)

