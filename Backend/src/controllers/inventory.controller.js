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
                c.cod_cpu, 
                c.cod_equipo AS cod_cpu_equipo, 
                c.cod_tics_cpu, 
                c.mar_cpu, 
                c.ser_cpu, 
                c.tar_madre, 
                c.procesador, 
                c.velocidad, 
                c.memoria, 
                c.tam_hdd, 
                c.disp_optico, 
                c.red_fija, 
                c.red_inalam, 
                c.bluetooth, 
                c.lec_tarjeta, 
                c.sis_ope, 
                c.office, 
                c.antivirus, 
                c.nom_antivirus, 
                c.ver_antivirus, 
                c.nom_hots, 
                c.nom_usuario AS nom_usuario_cpu, 
                c.ip_equipo, 
                c.con_cpu, 
                c.est_cpu, 
                c.observacion AS observacion_cpu, 
                c.nom_usua AS nom_usua_cpu,
                e.cod_equipo AS cod_equipo_general,
                e.fec_reg, 
                e.cod_almacen, 
                e.tip_equipo, 
                e.piso_ubic, 
                e.serv_depar, 
                e.nom_custodio, 
                e.nom_usua AS nom_usua_equipo, 
                m.cod_monitor, 
                m.cod_equipo AS cod_equipo_monitor, 
                m.cod_tics_monitor, 
                m.mar_monitor, 
                m.mod_monitor,
                m.ser_monitor, 
                m.tam_monitor, 
                m.con_monitor, 
                m.est_monitor, 
                m.observacion AS observacion_monitor, 
                m.nom_usua AS nom_usua_monitor, 
                t.cod_teclado, 
                t.cod_equipo AS cod_equipo_teclado, 
                t.cod_tics_teclado, 
                t.mar_teclado, 
                t.mod_teclado, 
                t.ser_teclado, 
                t.tip_teclado, 
                t.pue_teclado, 
                t.con_teclado, 
                t.est_teclado, 
                t.obs_teclado AS observacion_teclado, 
                t.nom_usua AS nom_usua_teclado, 
                mo.cod_mouse, 
                mo.cod_equipo AS cod_equipo_mouse, 
                mo.cod_tics_mouse, 
                mo.mar_mouse, 
                mo.mod_mouse, 
                mo.ser_mouse, 
                mo.tip_mouse, 
                mo.pue_mouse, 
                mo.con_mouse, 
                mo.est_mouse, 
                mo.obs_mouse AS observacion_mouse, 
                mo.nom_usua AS nom_usua_mouse 
            FROM 
                equipo e
            LEFT JOIN 
                cpu_equipo c ON e.cod_equipo = c.cod_equipo
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
    },

    getEquipoInventory: (req, res) => {
        const { tipo } = req.params; // Obtener el tipo de equipo desde la URL (por ejemplo, 'Escritorio' o 'Impresora')

        const query = 'SELECT * FROM equipo WHERE tip_equipo = ?'; // Consulta SQL con un filtro por tipo de equipo

        connection.query(query, [tipo], (error, results) => {
            if (error) {
                console.error('Error al obtener los equipos:', error);
                return res.status(500).json({ success: false, message: 'Error interno del servidor' });
            }

            if (results.length > 0) {
                res.status(200).json({ success: true, equipos: results });
            } else {
                res.status(404).json({ success: false, message: 'No se encontraron equipos de este tipo.' });
            }
        });
    }
}

module.exports = inventoryController;
