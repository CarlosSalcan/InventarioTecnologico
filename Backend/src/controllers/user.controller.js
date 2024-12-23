const { query } = require('express');
const connection = require('../connection');

const userController = {
    loginUser: async (req, res) => {
        try {
            const { username, password } = req.body;

            if (!username || !password) {
                return res.status(400).json({ success: false, message: 'Faltan campos obligatorios' });
            }

            const query = 'SELECT * FROM usuario WHERE id = ? AND clave = ?';
            connection.query(query, [username, password], (error, results) => {
                if (error) {
                    console.error('Error en la consulta:', error);
                    return res.status(500).json({ success: false, message: 'Error interno del servidor' });
                }

                console.log('Resultados de la consulta:', results); // Debug de los resultados

                if (results.length === 1) {
                    const user = results[0]; // Obtenemos los datos del usuario
                    console.log('Usuario encontrado:', user); // Debug del usuario encontrado

                    return res.status(200).json({
                        success: true,
                        message: 'Inicio de sesión exitoso',
                        username: user.nom_usuario // Campo de table a mostrar
                    });
                } else {
                    return res.status(401).json({ success: false, message: 'Usuario o contraseña incorrectos' });
                }
            });
        } catch (error) {
            console.error('Error en el login:', error);
            return res.status(500).json({ success: false, message: 'Error interno del servidor' });
        }
    }
};

module.exports = userController;