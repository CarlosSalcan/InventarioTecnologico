const connection = require('../connection');

const registerController = {
    getLastEquipmentCode: (req, res) => {
        const { type } = req.params;
        const query = `SELECT cod_almacen FROM equipo WHERE cod_almacen LIKE 'CZ9TICS-${type}-%' ORDER BY cod_almacen DESC LIMIT 1`;

        connection.query(query, (err, result) => {
            if (err) {
                return res.status(500).json({ success: false, message: 'Error en la base de datos' });
            }

            if (result.length > 0) {
                const lastCode = result[0].cod_almacen; // Extraer el valor del primer resultado
                const parts = lastCode.split('-');
                const number = parseInt(parts[2]) + 1; // Incrementar el número final
                const newCode = `${parts[0]}-${parts[1]}-${number.toString().padStart(4, '0')}`;
                return res.status(200).json({ success: true, newCode: newCode });
            } else {
                // Si no hay registros previos, generar el primer código
                const newCode = `CZ9TICS-${type}-0001`;
                return res.status(200).json({ success: true, newCode: newCode });
            }
        });
    }
}

module.exports = registerController;