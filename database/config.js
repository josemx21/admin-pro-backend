const mongoose = require('mongoose');

// Función para establecer la conexión

const dbConnection = async() => {

    try {

        await mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });

        console.log('BD OnLine');

    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la BD, ver logs');
    }


}

module.exports = {
    dbConnection
}