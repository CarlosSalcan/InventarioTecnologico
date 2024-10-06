// Requiere las dependencias necesarias
const express = require('express');
const cors = require('cors'); // Importa cors
const jwt = require('jsonwebtoken');
const authRouter = require('./routes/auth.router'); // Asegúrate que este archivo exista
const connection = require('./config/connection');  // Asegúrate que la conexión a la base de datos esté bien configurada

// Crea una instancia de la aplicación Express
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para el manejo de JSON
app.use(express.json());

// Configuración de CORS
const corsOptions = {
    origin: 'http://localhost:8080', // Cambia esto si tu frontend corre en otro puerto
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,SELECT',
    credentials: true, // Permite el uso de credenciales
    optionsSuccessStatus: 204 // Para IE 11
};

// Usa el middleware de CORS
app.use(cors(corsOptions)); // Usa las opciones de CORS definidas

// Conectar a la base de datos
connection.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
        return;
    }
    console.log('Conexión exitosa a la base de datos');
});

// Definir rutas
app.use('/api', authRouter);

// Middleware para proteger rutas
function verifyToken(req, res, next) {
    const token = req.headers['authorization'];

    if (!token) return res.status(403).send('Token no proporcionado');

    jwt.verify(token, 'secretKey', (err, decoded) => {
        if (err) return res.status(401).send('Token inválido');

        req.userId = decoded.id;
        next();
    });
}

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
