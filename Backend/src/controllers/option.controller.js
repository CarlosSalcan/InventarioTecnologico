const connection = require('../connection');

const optionController = {
    getPisos: (req, res) => {
        const query = 'SELECT * FROM param_piso'; // Consulta SQL para obtener pisos

        connection.query(query, (error, results) => {
            if (error) {
                console.error('Error al obtener los pisos:', error);
                return res.status(500).json({ success: false, message: 'Error interno del servidor' });
            }

            res.status(200).json({ success: true, data: results });
        });
    },

    getServicios: (req, res) => {
        const query = 'SELECT * FROM param_servicio'; // Consulta SQL para obtener servicios

        connection.query(query, (error, results) => {
            if (error) {
                console.error('Error al obtener los servicios:', error);
                return res.status(500).json({ success: false, message: 'Error interno del servidor' });
            }

            res.status(200).json({ success: true, data: results });
        });
    }
};

module.exports = optionController;
