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
function openMouseEditModal(mouseData) {
    document.getElementById('mouse-cod-mouse').value = mouseData.cod_mouse;
    document.getElementById('mouse-cod-equipo').value = mouseData.cod_equipo;
    document.getElementById('mouse-cos-tics-mouse').value = mouseData.cod_tics_mouse;
    document.getElementById('mouse-mar-mouse').value = mouseData.mar_mouse;
    document.getElementById('mouse-mod-mouse').value = mouseData.mod_mouse;
    document.getElementById('mouse-ser-mouse').value = mouseData.ser_mouse;
    // ... cargar otros campos de mouse según corresponda

    const mouseModal = new bootstrap.Modal(document.getElementById('mouseModal'));
    mouseModal.show();
}

// Función para guardar cambios del modal de Mouse
function saveMouseChanges() {
    const updatedMouseData = {
        cod_mouse: document.getElementById('mouse-cod-mouse').value,
        cod_equipo: document.getElementById('mouse-cod-equipo').value,
        cod_tics_mouse: document.getElementById('mouse-cos-tics-mouse').value,
        mar_mouse: document.getElementById('mouse-mar-mouse').value,
        mod_mouse: document.getElementById('mouse-mod-mouse').value,
        ser_mouse: document.getElementById('mouse-ser-mouse').value,
        // ... incluir otros campos de mouse según sea necesario
    };

    fetch(`http://localhost:3000/api/mouse/${updatedMouseData.cod_mouse}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedMouseData)
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                const mouseModal = bootstrap.Modal.getInstance(document.getElementById('mouseModal'));
                mouseModal.hide();
                window.location.reload();
            } else {
                console.error('Error al guardar los cambios:', data.message);
            }
        })
        .catch(error => console.error('Error al guardar los cambios:', error));
}
