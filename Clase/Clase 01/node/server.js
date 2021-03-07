
const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    res.end('respuesta de la petición');
});

server.listen(3000);