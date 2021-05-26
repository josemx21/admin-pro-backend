//console.log('Hola Mundo');
require('dotenv').config();

const express = require('express');
const cors = require('cors');

const { dbConnection } = require('./database/config');

// Crear el servidor de express
const app = express();

// Configurar CORS
app.use(cors());

// LLamando a la Base de Datos, que esta en el archivo config.js
dbConnection();

//mean_user
//3fB9tawmlUqXVqvr


// Rutas
app.get('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'Hola Mundo'
    });
});


app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en puerto ' + process.env.PORT);
});