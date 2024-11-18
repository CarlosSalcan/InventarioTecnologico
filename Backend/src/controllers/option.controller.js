const connection = require('../connection');

// TODO: Optimizar
const optionController = {
    // Load Option SELECT-EQUIPO
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
    },

    getMarca: (req, res) => {
        const query = 'SELECT * FROM param_marcas'; // Consulta SQL para obtener servicios

        connection.query(query, (error, results) => {
            if (error) {
                console.error('Error al obtener las Marcas:', error);
                return res.status(500).json({ success: false, message: 'Error interno del servidor' });
            }

            res.status(200).json({ success: true, data: results });
        });
    },

    getCondicion: (req, res) => {
        const query = 'SELECT * FROM param_condicion'; // Consulta SQL para obtener servicios

        connection.query(query, (error, results) => {
            if (error) {
                console.error('Error al obtener los Condiciones:', error);
                return res.status(500).json({ success: false, message: 'Error interno del servidor' });
            }

            res.status(200).json({ success: true, data: results });
        });
    },

    getEstado: (req, res) => {
        const query = 'SELECT * FROM param_estado'; // Consulta SQL para obtener servicios

        connection.query(query, (error, results) => {
            if (error) {
                console.error('Error al obtener los Estados:', error);
                return res.status(500).json({ success: false, message: 'Error interno del servidor' });
            }

            res.status(200).json({ success: true, data: results });
        });
    },

    // Load Option SELECT-CPU
    getMemoria: (req, res) => {
        const query = 'SELECT * FROM param_memoria'; // Consulta SQL para obtener servicios

        connection.query(query, (error, results) => {
            if (error) {
                console.error('Error al obtener los memoria:', error);
                return res.status(500).json({ success: false, message: 'Error interno del servidor' });
            }

            res.status(200).json({ success: true, data: results });
        });
    },

    getProcesador: (req, res) => {
        const query = 'SELECT * FROM param_procesador'; // Consulta SQL para obtener servicios

        connection.query(query, (error, results) => {
            if (error) {
                console.error('Error al obtener los procesador:', error);
                return res.status(500).json({ success: false, message: 'Error interno del servidor' });
            }

            res.status(200).json({ success: true, data: results });
        });
    },

    getTamHdd: (req, res) => {
        const query = 'SELECT * FROM param_tamano_hdd'; // Consulta SQL para obtener servicios

        connection.query(query, (error, results) => {
            if (error) {
                console.error('Error al obtener los hdd:', error);
                return res.status(500).json({ success: false, message: 'Error interno del servidor' });
            }

            res.status(200).json({ success: true, data: results });
        });
    },

    getDisOpt: (req, res) => {
        const query = 'SELECT * FROM param_dis_opt'; // Consulta SQL para obtener servicios

        connection.query(query, (error, results) => {
            if (error) {
                console.error('Error al obtener los Dispositivos Opticos:', error);
                return res.status(500).json({ success: false, message: 'Error interno del servidor' });
            }

            res.status(200).json({ success: true, data: results });
        });
    },
    
    getSisOpe: (req, res) => {
        const query = 'SELECT * FROM param_sis_ope'; // Consulta SQL para obtener servicios

        connection.query(query, (error, results) => {
            if (error) {
                console.error('Error al obtener los Sistemas Operativos:', error);
                return res.status(500).json({ success: false, message: 'Error interno del servidor' });
            }

            res.status(200).json({ success: true, data: results });
        });
    },

    getOffice: (req, res) => {
        const query = 'SELECT * FROM param_office'; // Consulta SQL para obtener servicios

        connection.query(query, (error, results) => {
            if (error) {
                console.error('Error al obtener los OFFICE:', error);
                return res.status(500).json({ success: false, message: 'Error interno del servidor' });
            }

            res.status(200).json({ success: true, data: results });
        });
    },
    
    getNomAntivirus: (req, res) => {
        const query = 'SELECT * FROM param_antivirus'; // Consulta SQL para obtener servicios

        connection.query(query, (error, results) => {
            if (error) {
                console.error('Error al obtener los OFFICE:', error);
                return res.status(500).json({ success: false, message: 'Error interno del servidor' });
            }

            res.status(200).json({ success: true, data: results });
        });
    },

    // Load Option SELECT-MONITOR
    getTamMonitor: (req, res) => {
        const query = 'SELECT * FROM param_tamano_monitor'; // Consulta SQL para obtener servicios

        connection.query(query, (error, results) => {
            if (error) {
                console.error('Error al obtener los Tamanos Monitor:', error);
                return res.status(500).json({ success: false, message: 'Error interno del servidor' });
            }

            res.status(200).json({ success: true, data: results });
        });
    },

    // Load Option SELECT-TECLADO
    getTipConexion: (req, res) => {
        const query = 'SELECT * FROM param_tipo_mt'; // Consulta SQL para obtener servicios

        connection.query(query, (error, results) => {
            if (error) {
                console.error('Error al obtener los Tamanos Monitor:', error);
                return res.status(500).json({ success: false, message: 'Error interno del servidor' });
            }

            res.status(200).json({ success: true, data: results });
        });
    },

    getPuerto: (req, res) => {
        const query = 'SELECT * FROM param_puertos'; // Consulta SQL para obtener servicios

        connection.query(query, (error, results) => {
            if (error) {
                console.error('Error al obtener los Tamanos Monitor:', error);
                return res.status(500).json({ success: false, message: 'Error interno del servidor' });
            }

            res.status(200).json({ success: true, data: results });
        });
    }
};

module.exports = optionController;
