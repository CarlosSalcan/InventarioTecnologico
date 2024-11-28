const connection = require('../connection');

const componentController = {
    updateMonitor: (req, res) => {
        try {
            const codMonitor = req.params.cod_monitor; // ID del monitor a actualizar
            const {
                mar_monitor,
                mod_monitor,
                ser_monitor,
                tam_monitor,
                con_monitor,
                est_monitor,
                observacion
            } = req.body;

            // Consulta SQL para actualizar el monitor en la base de datos
            const sql = `
                UPDATE monitor SET 
                    mar_monitor = ?,
                    mod_monitor = ?,
                    ser_monitor = ?,
                    tam_monitor = ?,
                    con_monitor = ?,
                    est_monitor = ?,
                    observacion = ?
                WHERE cod_monitor = ?
            `;

            const values = [
                mar_monitor,
                mod_monitor,
                ser_monitor,
                tam_monitor,
                con_monitor,
                est_monitor,
                observacion,
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
        } catch (error) {
            console.error('Error en el controlador al intentar actualizar el monitor:', error);
            res.status(500).json({ success: false, message: 'Error en el servidor al actualizar el monitor' });
        }
    },

    updateMouse: (req, res) => {
        try {
            const codMouse = req.params.cod_mouse; // ID del mouse a actualizar
            const {
                mar_mouse,
                mod_mouse,
                ser_mouse,
                tip_mouse,
                pue_mouse,
                con_mouse,
                est_mouse,
                obs_mouse
            } = req.body;

            // Consulta SQL para actualizar el mouse en la base de datos
            const sql = `
                UPDATE mouse SET 
                    mar_mouse = ?,
                    mod_mouse = ?,
                    ser_mouse = ?,
                    tip_mouse = ?,
                    pue_mouse = ?,
                    con_mouse = ?,
                    est_mouse = ?,
                    obs_mouse = ?
                WHERE cod_mouse = ?
            `;

            const values = [
                mar_mouse,
                mod_mouse,
                ser_mouse,
                tip_mouse,
                pue_mouse,
                con_mouse,
                est_mouse,
                obs_mouse,
                codMouse
            ];

            // Ejecutar la consulta
            connection.query(sql, values, (error, result) => {
                if (error) {
                    console.error('Error al actualizar el mouse:', error);
                    return res.status(500).json({ success: false, message: 'Error al actualizar el m' });
                }
                return res.status(200).json({ success: true, message: 'Mouse actualizado exitosamente' });
            });
        } catch (error) {
            console.error('Error en el controlador al intentar actualizar el mouse:', error);
            res.status(500).json({ success: false, message: 'Error en el servidor al actualizar el mouse' });
        }
    },

    updateTeclado: (req, res) => {
        try {
            const codTeclado = req.params.cod_teclado;
            const {
                cod_equipo,
                cod_tics_teclado,
                mar_teclado,
                mod_teclado,
                ser_teclado,
                tip_teclado,
                pue_teclado,
                con_teclado,
                est_teclado,
                obs_teclado
            } = req.body;

            // Consulta SQL para actualizar el teclado en la base de datos
            const sql = `
                UPDATE teclado SET 
                    cod_equipo = ?,
                    cod_tics_teclado = ?,
                    mar_teclado = ?,
                    mod_teclado = ?,
                    ser_teclado = ?,
                    tip_teclado = ?,
                    pue_teclado = ?,
                    con_teclado = ?,
                    est_teclado = ?,
                    obs_teclado = ?
                WHERE cod_teclado = ?
            `;

            const values = [
                cod_equipo,
                cod_tics_teclado,
                mar_teclado,
                mod_teclado,
                ser_teclado,
                tip_teclado,
                pue_teclado,
                con_teclado,
                est_teclado,
                obs_teclado,
                codTeclado // Asegúrate de que `codTeclado` sea un valor correcto
            ];

            // Ejecutar la consulta
            connection.query(sql, values, (error, result) => {
                if (error) {
                    console.error('Error al actualizar el teclado:', error);
                    return res.status(500).json({ success: false, message: 'Error al actualizar el teclado' });
                }
                return res.status(200).json({ success: true, message: 'Teclado actualizado exitosamente' });
            });
        } catch (error) {
            console.error('Error en el controlador al intentar actualizar el teclado:', error);
            res.status(500).json({ success: false, message: 'Error en el servidor al actualizar el teclado' });
        }
    },

    updateCPU: (req, res) => {
        try {
            const codCPU = req.params.cod_cpu; // ID del CPU a actualizar

            // Desestructuración de los datos enviados en el cuerpo de la solicitud
            const {
                mar_cpu,
                ser_cpu,
                tar_madre,
                procesador,
                velocidad,
                memoria,
                tam_hdd,
                disp_optico,
                red_fija,
                red_inalam,
                bluetooth,
                lec_tarjeta,
                sis_ope,
                office,
                antivirus,
                nom_antivirus,
                ver_antivirus,
                nom_hots,
                nom_usuario,
                ip_equipo,
                con_cpu,
                est_cpu,
                observacion
            } = req.body;

            // Validación: Verifica si alguno de los campos requeridos está vacío
            if (!codCPU || !mar_cpu || !ser_cpu) {
                return res.status(400).json({ success: false, message: 'Faltan datos requeridos' });
            }

            // Consulta SQL para actualizar la CPU en la base de datos
            const sql = `
                UPDATE cpu_equipo SET 
                    mar_cpu = ?, 
                    ser_cpu = ?, 
                    tar_madre = ?, 
                    procesador = ?, 
                    velocidad = ?, 
                    memoria = ?, 
                    tam_hdd = ?, 
                    disp_optico = ?, 
                    red_fija = ?, 
                    red_inalam = ?, 
                    bluetooth = ?, 
                    lec_tarjeta = ?, 
                    sis_ope = ?, 
                    office = ?, 
                    antivirus = ?, 
                    nom_antivirus = ?, 
                    ver_antivirus = ?, 
                    nom_hots = ?, 
                    nom_usuario = ?, 
                    ip_equipo = ?, 
                    con_cpu = ?, 
                    est_cpu = ?, 
                    observacion = ? 
                WHERE cod_cpu = ?
            `;

            // Valores a insertar en la consulta SQL
            const values = [
                mar_cpu || null,
                ser_cpu || null,
                tar_madre || null,
                procesador || null,
                velocidad || null,
                memoria || null,
                tam_hdd || null,
                disp_optico || null,
                red_fija || null,
                red_inalam || null,
                bluetooth || null,
                lec_tarjeta || null,
                sis_ope || null,
                office || null,
                antivirus || null,
                nom_antivirus || null,
                ver_antivirus || null,
                nom_hots || null,
                nom_usuario || null,
                ip_equipo || null,
                con_cpu || null,
                est_cpu || null,
                observacion || null,
                codCPU
            ];

            // Ejecutar la consulta en la base de datos
            connection.query(sql, values, (error, result) => {
                if (error) {
                    console.error('Error al actualizar el CPU:', error);
                    return res.status(500).json({ success: false, message: 'Error al actualizar el CPU' });
                }

                // Verificar si se afectaron filas (CPU existente)
                if (result.affectedRows === 0) {
                    return res.status(404).json({ success: false, message: 'No se encontró el CPU con el código proporcionado' });
                }

                // Respuesta exitosa
                return res.status(200).json({ success: true, message: 'CPU actualizado exitosamente' });
            });
        } catch (error) {
            console.error('Error en el controlador al intentar actualizar el CPU:', error);
            return res.status(500).json({ success: false, message: 'Error interno del servidor' });
        }
    },

    updateImpresora: (req, res) => {
        try {
            const id = req.params.cod_impresora; // ID de la impresora
            const {
                mar_imp,
                mod_imp,
                ser_imp,
                tip_imp,
                pue_imp,
                con_imp,
                est_imp,
                obs_imp
            } = req.body;

            const sql = `
                UPDATE impresora 
                SET mar_imp = ?, 
                    mod_imp = ?, 
                    ser_imp = ?, 
                    tip_imp = ?, 
                    pue_imp = ?, 
                    con_imp = ?, 
                    est_imp = ?, 
                    obs_imp = ?
                WHERE cod_impresora = ?`;

            const values = [
                mar_imp,
                mod_imp,
                ser_imp,
                tip_imp,
                pue_imp,
                con_imp,
                est_imp,
                obs_imp,
                id,
            ];

            connection.query(sql, values, (error, result) => {
                if (error) {
                    console.error('Error al actualizar la impresora:', error);
                    return res.status(500).json({
                        success: false,
                        message: 'Error al ejecutar la consulta SQL',
                    });
                }
                if (result.affectedRows === 0) {
                    return res.status(404).json({
                        success: false,
                        message: 'No se encontró la impresora con el ID especificado',
                    });
                }
                return res.status(200).json({
                    success: true,
                    message: 'Impresora actualizada exitosamente',
                });
            });
        } catch (error) {
            console.error('Error en el controlador al intentar actualizar la impresora:', error);
            res.status(500).json({
                success: false,
                message: 'Error en el servidor al actualizar la impresora',
            });
        }
    }
}

module.exports = componentController;