const { searchDocs, readDocs } = require('./assets/fileSystem');


const dir = './';
const ext = '.md';


searchDocs(dir, ext)
    .then(nameDocs => {
        const infoDocs = readDocs(dir, nameDocs);

        infoDocs.forEach(doc => {
            console.log(`PATH:${doc.path}\nINFO_DOC:\n${doc.info}\n`)
        })
    })
    .catch(error => console.log(error));