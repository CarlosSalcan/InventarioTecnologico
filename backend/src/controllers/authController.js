const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const authController = {};

authController.register = (req, res) => {
    const { email, password } = req.body;
    bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) throw err;
        User.create({ email, password: hashedPassword }, (result) => {
            res.status(201).json({ message: 'Usuario registrado exitosamente' });
        });
    });
};

authController.login = (req, res) => {
    const { email, password } = req.body;
    User.findByEmail(email, (user) => {
        if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });
        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
                const token = jwt.sign({ id: user.id }, 'secreto', { expiresIn: '1h' });
                res.json({ token });
            } else {
                res.status(401).json({ message: 'Contraseña incorrecta' });
            }
        });
    });
};

module.exports = authController;
