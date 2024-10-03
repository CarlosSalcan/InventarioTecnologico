// config/connection.js

const mysql = require('mysql2');
require('dotenv').config(); // Cargar variables de entorno desde el archivo .env

// Crear la conexión a la base de datos
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT || 3306 // El puerto es 3306 por defecto
});

// Conectar a la base de datos
connection.connect((err) => {
    if (err) {
        console.error('Error conectando a la base de datos: ' + err.stack);
        return;
    }
    console.log('Conectado a la base de datos como id ' + connection.threadId);
});

// Exportar la conexión para usarla en otros archivos
module.exports = connection;
