// Función para abrir el modal de edición de monitor y cargar los datos
function openEditMonitorModal(item) {
    const modalCodEqMonitor = document.getElementById('modal-cod-Eqmonitor');
    const modalCodMonitor = document.getElementById('modal-cod-monitor');
    const modalCodTicsMonitor = document.getElementById('modal-cod-tics-monitor');
    const modalMarMonitor = document.getElementById('modal-mar-monitor');
    const modalModMonitor = document.getElementById('modal-mod-monitor');
    const modalSerMonitor = document.getElementById('modal-ser-monitor');
    const modalTamMonitor = document.getElementById('modal-tam-monitor');
    const modalConMonitor = document.getElementById('modal-con-monitor');
    const modalEstMonitor = document.getElementById('modal-est-monitor');
    const modalObservacion = document.getElementById('modal-observacion');
    const modalUsua = document.getElementById('modal-usua');

    // Cargar los datos del monitor en el modal
    modalCodEqMonitor.value = item.cod_equipo;
    modalCodMonitor.value = item.cod_monitor;
    modalCodTicsMonitor.value = item.cod_tics_monitor;
    modalMarMonitor.value = item.mar_monitor;
    modalModMonitor.value = item.mod_monitor;
    modalSerMonitor.value = item.ser_monitor;
    modalTamMonitor.value = item.tam_monitor;
    modalConMonitor.value = item.con_monitor;
    modalEstMonitor.value = item.est_monitor;
    modalObservacion.value = item.observacion;
    modalUsua.value = item.nom_usua;

    // Mostrar el modal
    const modal = new bootstrap.Modal(document.getElementById('editMonitorModal'));
    modal.show();
}

// Función para guardar cambios en el modal de edición del monitor
function saveMonitorChanges() {
    const codMonitor = document.getElementById('modal-cod-monitor').value;
    const codEquipo = document.getElementById('modal-cod-Eqmonitor').value;
    const codTicsMonitor = document.getElementById('modal-cod-tics-monitor').value;
    const marMonitor = document.getElementById('modal-mar-monitor').value;
    const modMonitor = document.getElementById('modal-mod-monitor').value;
    const serMonitor = document.getElementById('modal-ser-monitor').value;
    const tamMonitor = document.getElementById('modal-tam-monitor').value;
    const conMonitor = document.getElementById('modal-con-monitor').value;
    const estMonitor = document.getElementById('modal-est-monitor').value;
    const observacion = document.getElementById('modal-observacion').value;
    const nomUsua = document.getElementById('modal-nom-usua').value;

    // Crear el objeto con los datos actualizados
    const updatedData = {
        cod_equipo: codEquipo,
        cod_tics_monitor: codTicsMonitor,
        mar_monitor: marMonitor,
        mod_monitor: modMonitor,
        ser_monitor: serMonitor,
        tam_monitor: tamMonitor,
        con_monitor: conMonitor,
        est_monitor: estMonitor,
        observacion: observacion,
        nom_usua: nomUsua
    };

    // Enviar los datos actualizados al servidor con fetch
    fetch(`http://localhost:3000/api/monitor/${codMonitor}`, {
        method: 'PUT', // Usamos el método PUT para actualizar
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedData) // Convertimos el objeto a JSON
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Cerrar el modal después de guardar los cambios
                const modal = bootstrap.Modal.getInstance(document.getElementById('editMonitorModal'));
                modal.hide();

                // Recargar los datos de la tabla para reflejar los cambios
                window.location.reload();
            } else {
                console.error('Error al guardar los cambios:', data.message);
            }
        })
        .catch(error => {
            console.error('Error al guardar los cambios:', error);
        });
}

// Función para abrir el modal de edición de Mouse y cargar los datos
function openMouseEditModal(item) {
    // Asignar directamente los valores de 'item' a los campos del formulario
    document.getElementById('modal-cod-mouse').value = item.cod_mouse;
    document.getElementById('modal-cod-equipo-mouse').value = item.cod_equipo;
    document.getElementById('modal-cod-tics-mouse').value = item.cod_tics_mouse;
    document.getElementById('modal-mar-mouse').value = item.mar_mouse;
    document.getElementById('modal-mod-mouse').value = item.mod_mouse;
    document.getElementById('modal-ser-mouse').value = item.ser_mouse;
    document.getElementById('modal-tip-mouse').value = item.tip_mouse;
    document.getElementById('modal-pue-mouse').value = item.pue_mouse;
    document.getElementById('modal-con-mouse').value = item.con_mouse;
    document.getElementById('modal-est-mouse').value = item.est_mouse;
    document.getElementById('modal-obs-mouse').value = item.obs_mouse;
    document.getElementById('modal-usua-mouse').value = item.nom_usua;

    // Mostrar el modal con Bootstrap
    const modal = new bootstrap.Modal(document.getElementById('editMouseModal'));
    modal.show()
}

// Función para guardar cambios del modal de Mouse
async function saveMouseChanges() {
    // Obtener los valores de los campos del modal
    const codMouse = document.getElementById('modal-cod-mouse').value;
    const codEquipo = document.getElementById('modal-cod-equipo-mouse').value;
    const codTicsMouse = document.getElementById('modal-cod-tics-mouse').value;
    const marMouse = document.getElementById('modal-mar-mouse').value;
    const modMouse = document.getElementById('modal-mod-mouse').value;
    const serMouse = document.getElementById('modal-ser-mouse').value;
    const tipMouse = document.getElementById('modal-tip-mouse').value;
    const pueMouse = document.getElementById('modal-pue-mouse').value;
    const conMouse = document.getElementById('modal-con-mouse').value;
    const estMouse = document.getElementById('modal-est-mouse').value;
    const obsMouse = document.getElementById('modal-obs-mouse').value;
    const nomUsua = document.getElementById('modal-usua-mouse').value;

    // Crear el objeto con los datos a enviar
    const mouseData = {
        cod_mouse: codMouse,
        cod_equipo: codEquipo,
        cod_tics_mouse: codTicsMouse,
        mar_mouse: marMouse,
        mod_mouse: modMouse,
        ser_mouse: serMouse,
        tip_mouse: tipMouse,
        pue_mouse: pueMouse,
        con_mouse: conMouse,
        est_mouse: estMouse,
        obs_mouse: obsMouse,
        nom_usua: nomUsua
    };

    // Enviar los datos al servidor usando fetch
    fetch(`http://localhost:3000/api/mouse/${codMouse}`, {
        method: 'PUT', // Usamos PUT para actualizar
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(mouseData) // Convertimos el objeto a JSON
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Mostrar un mensaje de éxito (puedes usar un modal o alert)
                alert('Mouse actualizado exitosamente');
                // Cerrar el modal
                const modal = bootstrap.Modal.getInstance(document.getElementById('editMouseModal'));
                modal.hide();
            } else {
                alert('Error al actualizar el mouse');
            }
        })
        .catch(error => {
            console.error('Error al enviar la solicitud:', error);
            alert('Hubo un error al actualizar los datos');
        });
}

function openTecladoEditModal(tcd) {
    console.log(tcd); // Verifica todo el objeto item
    // Asignar directamente los valores de 'item' a los campos del formulario
    document.getElementById('modal-cod-teclado').value = tcd.cod_teclado;
    document.getElementById('modal-cod-equipo-teclado').value = tcd.cod_equipo;
    document.getElementById('modal-cod-tics-teclado').value = tcd.cod_tics_teclado;
    document.getElementById('modal-mar-teclado').value = tcd.mar_teclado;
    document.getElementById('modal-mod-teclado').value = tcd.mod_teclado;
    document.getElementById('modal-ser-teclado').value = tcd.ser_teclado;
    document.getElementById('modal-tip-teclado').value = tcd.tip_teclado;
    document.getElementById('modal-pue-teclado').value = tcd.pue_teclado;
    document.getElementById('modal-con-teclado').value = tcd.con_teclado;
    document.getElementById('modal-est-teclado').value = tcd.est_teclado;
    document.getElementById('modal-obs-teclado').value = tcd.obs_teclado;
    document.getElementById('modal-usua-teclado').value = tcd.nom_usua;

    // Mostrar el modal con Bootstrap
    const modal = new bootstrap.Modal(document.getElementById('editTecladoModal'));
    modal.show()
}

async function saveTecladoChanges() {
    // Obtener los valores de los campos del modal
    const codTeclado = document.getElementById('modal-cod-teclado').value;
    const codEquipo = document.getElementById('modal-cod-equipo-teclado').value;
    const codTicsTeclado = document.getElementById('modal-cod-tics-teclado').value;
    const marTeclado = document.getElementById('modal-mar-teclado').value;
    const modTeclado = document.getElementById('modal-mod-teclado').value;
    const serTeclado = document.getElementById('modal-ser-teclado').value;
    const tipTeclado = document.getElementById('modal-tip-teclado').value;
    const pueTeclado = document.getElementById('modal-pue-teclado').value;
    const conTeclado = document.getElementById('modal-con-teclado').value;
    const estTeclado = document.getElementById('modal-est-teclado').value;
    const obsTeclado = document.getElementById('modal-obs-teclado').value;
    const nomUsua = document.getElementById('modal-usua-teclado').value;

    // Crear el objeto con los datos a enviar
    const tecladoData = {
        cod_teclado: codTeclado,
        cod_equipo: codEquipo,
        cod_tics_teclado: codTicsTeclado,
        mar_teclado: marTeclado,
        mod_teclado: modTeclado,
        ser_teclado: serTeclado,
        tip_teclado: tipTeclado,
        pue_teclado: pueTeclado,
        con_teclado: conTeclado,
        est_teclado: estTeclado,
        obs_teclado: obsTeclado,
        nom_usua: nomUsua
    };

    // Enviar los datos al servidor usando fetch
    fetch(`http://localhost:3000/api/teclado/${codTeclado}`, {
        method: 'PUT', // Usamos PUT para actualizar
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(tecladoData) // Convertimos el objeto a JSON
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Mostrar un mensaje de éxito (puedes usar un modal o alert)
                alert('Teclado actualizado exitosamente');
                // Cerrar el modal
                const modal = bootstrap.Modal.getInstance(document.getElementById('editTecladoModal'));
                modal.hide();
            } else {
                alert('Error al actualizar el teclado');
            }
        })
        .catch(error => {
            console.error('Error al enviar la solicitud:', error);
            alert('Hubo un error al actualizar los datos');
        });
}
