// backend/testConnection.js

const connection = require('./src/config/connection');

// Hacer una consulta simple para probar la conexión
connection.query('SELECT 1 + 1 AS solution', (err, results) => {
    if (err) {
        console.error('Error en la consulta: ' + err.stack);
        return;
    }
    console.log('La solución es: ', results[0].solution);
});

// Cerrar la conexión
connection.end();
