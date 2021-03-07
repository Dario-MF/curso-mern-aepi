const fs = require('fs');
const path = require('path');



// Busqueda y filtrado de documentos por directorio y extensión.
const searchDocs = async (dir, ext) => {

    const dirDocs = await fs.readdirSync(dir);
    const filterDocs = dirDocs.filter(doc => path.parse(doc).ext === ext);

    if (filterDocs.length > 0) {
        return filterDocs;
    }
    throw new Error('No se encuentran archivos con esa extensión en el directorio.');
};



// Busca documentos pedidos y devuelve array con la info
const readDocs = (dir, nameDocs) => {
    const infoDoc = [];

    nameDocs.forEach(nameDoc => {
        infoDoc.push(
            {
                path: path.resolve(dir, nameDoc),
                info: fs.readFileSync(path.resolve(dir, nameDoc), 'utf-8')
            }
        )
    });
    return infoDoc;
};



module.exports = {
    searchDocs,
    readDocs
};