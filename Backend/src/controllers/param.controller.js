const connection = require('../connection');

const paramController = {
    getParameter: async (req, res) => {
        try {
            const { tabla } = req.params;
    
            const tablasPermitidas = [
                'param_antivirus', 'param_condicion', 'param_dis_opt',
                'param_estado','param_marcas','param_memoria',
                'param_num_hdd','param_office','param_piso',
                'param_procesador','param_puertos','param_servicio',
                'param_sis_ope','param_tamano_hdd','param_tamano_monitor',
                'param_tipo_equipo','param_tipo_impresora','param_tipo_monitor',
                'param_tipo_mt'
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

};

module.exports = paramController;