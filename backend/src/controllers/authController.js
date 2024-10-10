const connection = require('../config/connection.js');

// Controlador para manejar el login
exports.login = (req, res) => {
    const { username, password } = req.body;

    // Consulta SQL para verificar las credenciales en la base de datos
    const query = 'SELECT * FROM usuario WHERE id = ? AND clave = ?';

    connection.query(query, [username, password], (err, results) => {
        if (err) {
            return res.status(500).json({ success: false, message: 'Error en el servidor.' });
        }

        // Si las credenciales son correctas, enviar respuesta exitosa
        if (results.length > 0) {
            res.status(200).json({ success: true, message: 'Inicio de sesión exitoso' });
        } else {
            // Credenciales incorrectas
            res.status(401).json({ success: false, message: 'Credenciales incorrectas' });
        }
    });
};
