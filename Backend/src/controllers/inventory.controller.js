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
    },

    updateItem: (req, res) => {
        const { cod_equipo } = req.params;
        const { piso_ubic, serv_depar, nom_custodio } = req.body;

        const query = `
            UPDATE equipo
            SET piso_ubic = ?, serv_depar = ?, nom_custodio = ?
            WHERE cod_equipo = ?
        `;

        connection.query(query, [piso_ubic, serv_depar, nom_custodio, cod_equipo], (error, results) => {
            if (error) {
                console.error('Error al actualizar el equipo:', error);
                return res.status(500).json({ success: false, message: 'Error interno del servidor' });
            }

            res.status(200).json({ success: true, message: 'Equipo actualizado correctamente' });
        });
    }
};

module.exports = inventoryController;
