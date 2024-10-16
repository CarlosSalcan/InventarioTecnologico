const connection = require('../connection');

const inventoryController = {
    getAllItems: (req, res) => {
        const query = 'SELECT * FROM equipo'; // Consulta SQL

        connection.query(query, (error, results) => {
            if (error) {
                console.error('Error al obtener los datos del inventario:', error);
                return res.status(500).json({ success: false, message: 'Error interno del servidor' });
            }

            res.status(200).json({ success: true, data: results });
        });
    }
};

module.exports = inventoryController;
