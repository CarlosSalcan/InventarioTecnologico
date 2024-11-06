const connection = require('../connection');

const componentController = {
    updateComponent: (req, res) => {
        const codMonitor = req.params.cod_monitor;
        const {
            cod_equipo,
            cod_tics_monitor,
            mar_monitor,
            mod_monitor,
            ser_monitor,
            tam_monitor,
            con_monitor,
            est_monitor,
            observacion,
            nom_usua
        } = req.body;

        // Consulta SQL para actualizar el monitor en la base de datos
        const sql = `
            UPDATE monitor SET 
                cod_equipo = ?,
                cod_tics_monitor = ?,
                mar_monitor = ?,
                mod_monitor = ?,
                ser_monitor = ?,
                tam_monitor = ?,
                con_monitor = ?,
                est_monitor = ?,
                observacion = ?,
                nom_usua = ?
            WHERE cod_monitor = ?
    `;

        const values = [
            cod_equipo,
            cod_tics_monitor,
            mar_monitor,
            mod_monitor,
            ser_monitor,
            tam_monitor,
            con_monitor,
            est_monitor,
            observacion,
            nom_usua,
            codMonitor
        ];

        // Ejecutar la consulta
        connection.query(sql, values, (error, result) => {
            if (error) {
                console.error('Error al actualizar el monitor:', error);
                return res.status(500).json({ success: false, message: 'Error al actualizar el monitor' });
            }
            return res.status(200).json({ success: true, message: 'Monitor actualizado exitosamente' });
        });
    }
}

module.exports = componentController;