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

        // Consulta SQL
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
    },

    getEscritorioInventory: (req, res) => {
        const query = `
        SELECT 
            e.cod_equipo, e.fec_reg, e.cod_almacen, e.tip_equipo, e.piso_ubic, e.serv_depar, e.nom_custodio, e.nom_usua,
            m.cod_monitor, m.cod_tics_monitor, m.mar_monitor, m.mod_monitor, m.ser_monitor, m.tam_monitor, m.con_monitor, m.est_monitor, m.observacion AS observacion_monitor,
            t.cod_teclado, t.cod_tics_teclado, t.mar_teclado, t.mod_teclado, t.ser_teclado, t.tip_teclado, t.pue_teclado, t.con_teclado, t.obs_teclado AS observacion_teclado,
            mo.cod_mouse, mo.cod_tics_mouse, mo.mar_mouse, mo.mod_mouse, mo.ser_mouse, mo.tip_mouse, mo.pue_mouse, mo.con_mouse, mo.est_mouse, mo.obs_mouse AS observacion_mouse
        FROM 
            equipo e
        LEFT JOIN 
            monitor m ON e.cod_equipo = m.cod_equipo
        LEFT JOIN 
            teclado t ON e.cod_equipo = t.cod_equipo
        LEFT JOIN 
            mouse mo ON e.cod_equipo = mo.cod_equipo
        WHERE 
            e.tip_equipo = 'Escritorio';
    `;

        connection.query(query, (err, results) => {
            if (err) {
                console.error('Error al ejecutar la consulta:', err); // Agregar logging
                return res.status(500).json({ success: false, message: 'Error al obtener datos', error: err });
            }
            return res.status(200).json({ success: true, data: results });
        });
    }
}

module.exports = inventoryController;
