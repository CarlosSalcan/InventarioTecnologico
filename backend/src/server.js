const express = require('express');
const bodyParser = require('body-parser');
const authRouter = require('./routes/authRoutes.js'); // Asegúrate de que la ruta sea correcta

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json()); // Para analizar el cuerpo de las solicitudes JSON

// Rutas
app.use('/api', authRouter); // Prefijo para tus rutas de autenticación

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
