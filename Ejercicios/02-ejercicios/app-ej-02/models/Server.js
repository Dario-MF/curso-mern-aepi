const express = require('express');
const path = require('path');
const cors = require('cors');
const { dbConnection } = require('../database/config.db');
const { errorCrear } = require('../controllers/errorController');
require('dotenv').config();
require('colors');


class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.clientPath = '/client';
        this.mainPath = '/main';
        this.errorPath = '*';

        // Conectar DB
        this.conectarDB();
        // Middlewares.
        this.middlewares();
        // Routes
        this.routes();
    }
    async conectarDB() {
        await dbConnection()
    }

    middlewares() {
        // cors
        this.app.use(cors());
        // lectura y parsing de body
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
        // view engine setup
        this.app.set('views', path.join(__dirname, '../views'));
        this.app.set('view engine', 'pug');
        // Directorio publico
        this.app.use(express.static(path.join(__dirname, '../public')));
    }

    routes() {
        // Rutas app:
        this.app.use(this.mainPath, require('../routes/main'));
        this.app.use(this.clientPath, require('../routes/client'));

        // Gestión de errores de ruta
        this.app.use(this.errorPath, errorCrear);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor activo en puerto: ${this.port}`.green, `\nPath: http://localhost:${this.port}`);
        });
    }
};


module.exports = Server;