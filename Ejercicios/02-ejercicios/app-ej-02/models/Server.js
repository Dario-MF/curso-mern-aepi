const express = require('express');
const path = require('path');
require('dotenv').config();
require('colors');
const { dbConnection } = require('../database/config.db');
const { closeServer } = require('../middlewares/closeServer');
const { routeError, handleError } = require('../middlewares/gestionErrores');




class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.clientPath = '/client';
        this.mainPath = '/main';
        this.errorPath = '*';

        // Conectar DB
        this.conectarDB();
        // Settings.
        this.settings();
        // Middlewares.
        this.middlewares()
        // Routes
        this.routes();
    }

    async conectarDB() {
        await dbConnection()
    }

    settings() {
        // view engine setup
        this.app.set('views', path.join(__dirname, '../views'));
        this.app.set('view engine', 'pug');
    }

    middlewares() {
        // lectura y parsing de body
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
        // Directorio publico
        this.app.use(express.static(path.join(__dirname, '../public')));

        //close server.
        this.app.use(closeServer);
    }

    routes() {
        // Rutas app:
        this.app.use(this.mainPath, require('../routes/main'));
        this.app.use(this.clientPath, require('../routes/client'));

        // Gestión de errores de ruta
        this.app.use(this.errorPath, routeError);
        this.app.use(handleError);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor activo en puerto: ${this.port}`.green, `\nPath: http://localhost:${this.port}/main/index`);
        });
    }
};


module.exports = Server;