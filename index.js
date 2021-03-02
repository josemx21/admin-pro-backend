require('dotenv').config();

const cors = require('cors');
// Importar Express
const express = require('express');


const { dbConnection } = require('./database/config');

// Crear el servidor de express
const app = express();

// Configurar cors
app.use(cors());

//Base de datos
dbConnection();

// console.log(process.env);

// Usuario: mean_user  Password: wHSmwH24vyik4nHs   

//Rutas
app.use('/api/usuarios', require('./routes/usuarios'));

//Levantar el servidor
app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en puerto  ' + process.env.PORT);
});