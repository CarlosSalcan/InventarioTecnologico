const connection = require('../connection');

const paramController = {
    getParameter: async (req, res) => {
        try {
            const { tabla } = req.params;

            const tablasPermitidas = [
                'param_antivirus', 'param_condicion', 'param_dis_opt',
                'param_estado', 'param_marcas', 'param_memoria',
                'param_office', 'param_piso', 'param_procesador',
                'param_puertos', 'param_servicio', 'param_sis_ope',
                'param_tamano_hdd', 'param_tamano_monitor', 'param_tipo_equipo',
                'param_tipo_impresora', 'param_tipo_monitor', 'param_tipo_mt'
            ];

            if (!tablasPermitidas.includes(tabla)) {
                return res.status(400).json({ success: false, message: 'Tabla no válida' });
            }

            const results = await new Promise((resolve, reject) => {
                connection.query(`SELECT * FROM ${tabla}`, (error, results) => {
                    if (error) {
                        reject(error);
                        return;
                    }
                    resolve(results);
                });
            });

            res.json({ success: true, parametros: results });
        } catch (error) {
            console.error('Error al obtener los parámetros:', error);
            res.status(500).json({ success: false, message: 'Error interno del servidor' });
        }
    },

    updateParameter: async (req, res) => {
        try {
            const { tabla, campo, valor, nuevoNombre } = req.params;

            // Verificar si el nuevo nombre ya existe en la tabla
            const countResult = await new Promise((resolve, reject) => {
                connection.query(`SELECT COUNT(*) AS count FROM ${tabla} WHERE ${campo} = ? AND ${campo} <> ?`, [nuevoNombre, valor], (error, results, fields) => {
                    if (error) {
                        reject(error);
                        return;
                    }
                    resolve(results);
                });
            });

            const count = countResult[0].count;
            if (count > 0) {
                return res.status(400).json({ success: false, message: 'El nombre ingresado ya existe en la tabla' });
            }

            // Realizar la actualización en la base de datos
            const updateResult = await new Promise((resolve, reject) => {
                connection.query(`UPDATE ${tabla} SET ${campo} = ? WHERE ${campo} = ?`, [nuevoNombre, valor], (error, results, fields) => {
                    if (error) {
                        reject(error);
                        return;
                    }
                    resolve(results);
                });
            });

            if (updateResult.affectedRows > 0) {
                return res.json({ success: true, message: 'Nombre del registro modificado correctamente' });
            } else {
                return res.status(400).json({ success: false, message: 'No se encontró el registro para modificar' });
            }

        } catch (error) {
            console.error('Error al modificar el nombre del registro:', error);
            res.status(500).json({ success: false, message: 'Error interno del servidor' });
        }
    }

};

module.exports = paramController;