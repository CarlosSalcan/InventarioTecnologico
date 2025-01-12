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
    },

    saveEquipo: async (req, res) => {
        try {
            const {
                fec_reg,
                cod_almacen,
                tip_equipo,
                piso_ubic,
                serv_depar,
                nom_custodio,
                nom_usua
            } = req.body;

            const query = `
                INSERT INTO equipo (
                    fec_reg,
                    cod_almacen,
                    tip_equipo,
                    piso_ubic,
                    serv_depar,
                    nom_custodio,
                    nom_usua
                ) VALUES (?, ?, ?, ?, ?, ?, ?)
            `;

            connection.query(query, [
                fec_reg,
                cod_almacen,
                tip_equipo,
                piso_ubic,
                serv_depar,
                nom_custodio,
                nom_usua
            ], (error, results) => {
                if (error) {
                    console.error('Error al insertar los datos:', error);
                    return res.status(500).json({ success: false, message: 'Error al guardar los datos' });
                }

                res.status(200).json({ success: true, message: 'Datos guardados exitosamente' });
            });
        } catch (error) {
            console.error('Error interno del servidor:', error);
            res.status(500).json({ success: false, message: 'Error interno del servidor' });
        }
    },

    savePortatil: async (req, res) => {
        try {
            const {
                cod_tics, marca, modelo, serie, procesador, velocidad,
                memoria, hdd, dis_optico, red_fija, wifi, bluetooth, lector_tarjetas,
                sistema_operativo, office, antivirus, nom_antivirus, version_antivirus,
                host, custodio, estado, observaciones, cod_equipo
            } = req.body;

            // Query para insertar en la base de datos
            const query = `
                INSERT INTO laptop (
                cod_tics_laptop, mar_laptop, mod_laptop, ser_laptop, pro_laptop,
                vel_laptop, mem_laptop, hdd_laptop, dop_laptop, red_laptop, wif_laptop,
                blu_laptop, tar_laptop, so_laptop, off_laptop, antv_laptop, nom_antv_laptop,
                ver_antv_laptop, nom_hots_laptop, nom_usuario_laptop, est_laptop, observacion_laptop, nom_usua
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `;

            // Ejecutar la consulta
            await connection.query(query, [
                cod_tics, marca, modelo, serie, procesador, velocidad,
                memoria, hdd, dis_optico, red_fija, wifi, bluetooth, lector_tarjetas,
                sistema_operativo, office, antivirus, nom_antivirus, version_antivirus,
                host, custodio, estado, observaciones, cod_equipo
            ]);

            res.status(201).json({ message: "Equipo guardado exitosamente" });
        } catch (error) {
            console.error("Error al guardar el equipo:", error);
            res.status(500).json({ error: "Hubo un problema al guardar el equipo" });
        }
    }
}

module.exports = registerController;