const connection = require('../connection');

const registerController = {
    getLastEquipmentCode: (req, res) => {
        const { type } = req.params;
        const query = `SELECT cod_almacen FROM equipo WHERE cod_almacen LIKE 'CZ9TICS-${type}-%' ORDER BY cod_almacen DESC LIMIT 1`;

        connection.query(query, (err, result) => {
            if (err) {
                return res.status(500).json({ success: false, message: 'Error en la base de datos' });
            }

            // Asegúrate de que 'result' contiene datos y extrae el cod_almacen correctamente
            if (result.length > 0) {
                const lastCode = result[0].cod_almacen; // Extraer el valor del primer resultado
                return res.status(200).json({ success: true, lastCode: lastCode });
            } else {
                return res.status(200).json({ success: false, message: `No se encontró ningún código para el tipo ${type}.` });
            }
        });
    }
}

module.exports = registerController;