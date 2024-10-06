const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const connection = require('../config/connection'); // Para conectar con la base de datos
// ../config/connection
const bcrypt = require('bcrypt');

router.post('/login', (req, res) => {
    console.log('Solicitando inicio de sesión:', req.body); // Agrega esta línea
    const { username, password } = req.body;

    // Verificamos si el usuario existe
    connection.query('SELECT * FROM usuario WHERE id = ?', [username], (err, results) => {
        if (err) return res.status(500).send('Error en la base de datos');

        if (results.length > 0) {
            const user = results[0];

            // Comparar contraseña
            bcrypt.compare(password, user.password, (err, isMatch) => {
                if (err) throw err;

                if (isMatch) {
                    const token = jwt.sign({ id: user.id }, 'secretKey', { expiresIn: '1h' });
                    res.json({ token });
                } else {
                    res.status(401).json({ message: 'Credenciales incorrectas !!' });
                }
            });
        } else {
            res.status(404).json({ message: 'USUARIO NO ENCONTRADO' });
        }
    });
});

module.exports = router;
