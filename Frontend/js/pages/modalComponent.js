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
    modalCodEqMonitor.value = item.cod_equipo_monitor;
    modalCodMonitor.value = item.cod_monitor;
    modalCodTicsMonitor.value = item.cod_tics_monitor;
    modalMarMonitor.value = item.mar_monitor;
    modalModMonitor.value = item.mod_monitor;
    modalSerMonitor.value = item.ser_monitor;
    modalTamMonitor.value = item.tam_monitor;
    modalConMonitor.value = item.con_monitor;
    modalEstMonitor.value = item.est_monitor;
    modalObservacion.value = item.observacion_monitor;
    modalUsua.value = item.nom_usua_monitor;

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
        cod_equipo_monitor: codEquipo,
        cod_tics_monitor: codTicsMonitor,
        mar_monitor: marMonitor,
        mod_monitor: modMonitor,
        ser_monitor: serMonitor,
        tam_monitor: tamMonitor,
        con_monitor: conMonitor,
        est_monitor: estMonitor,
        observacion_monitor: observacion,
        nom_usua_monitor: nomUsua
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
    document.getElementById('modal-cod-equipo-mouse').value = item.cod_equipo_mouse;
    document.getElementById('modal-cod-tics-mouse').value = item.cod_tics_mouse;
    document.getElementById('modal-mar-mouse').value = item.mar_mouse;
    document.getElementById('modal-mod-mouse').value = item.mod_mouse;
    document.getElementById('modal-ser-mouse').value = item.ser_mouse;
    document.getElementById('modal-tip-mouse').value = item.tip_mouse;
    document.getElementById('modal-pue-mouse').value = item.pue_mouse;
    document.getElementById('modal-con-mouse').value = item.con_mouse;
    document.getElementById('modal-est-mouse').value = item.est_mouse;
    document.getElementById('modal-obs-mouse').value = item.observacion_mouse;
    document.getElementById('modal-usua-mouse').value = item.nom_usua_mouse;

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
        cod_equipo_mouse: codEquipo,
        cod_tics_mouse: codTicsMouse,
        mar_mouse: marMouse,
        mod_mouse: modMouse,
        ser_mouse: serMouse,
        tip_mouse: tipMouse,
        pue_mouse: pueMouse,
        con_mouse: conMouse,
        est_mouse: estMouse,
        observacion_mouse: obsMouse,
        nom_usua_mouse: nomUsua
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
    document.getElementById('modal-cod-equipo-teclado').value = tcd.cod_equipo_teclado;
    document.getElementById('modal-cod-tics-teclado').value = tcd.cod_tics_teclado;
    document.getElementById('modal-mar-teclado').value = tcd.mar_teclado;
    document.getElementById('modal-mod-teclado').value = tcd.mod_teclado;
    document.getElementById('modal-ser-teclado').value = tcd.ser_teclado;
    document.getElementById('modal-tip-teclado').value = tcd.tip_teclado;
    document.getElementById('modal-pue-teclado').value = tcd.pue_teclado;
    document.getElementById('modal-con-teclado').value = tcd.con_teclado;
    document.getElementById('modal-est-teclado').value = tcd.est_teclado;
    document.getElementById('modal-obs-teclado').value = tcd.observacion_teclado;
    document.getElementById('modal-usua-teclado').value = tcd.nom_usua_teclado;

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
        cod_equipo_teclado: codEquipo,
        cod_tics_teclado: codTicsTeclado,
        mar_teclado: marTeclado,
        mod_teclado: modTeclado,
        ser_teclado: serTeclado,
        tip_teclado: tipTeclado,
        pue_teclado: pueTeclado,
        con_teclado: conTeclado,
        est_teclado: estTeclado,
        observacion_teclado: obsTeclado,
        nom_usua_teclado: nomUsua
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

// Función para mostrar los datos del CPU en el modal
function openCpuEditModal(cpuData) {
    // Asignar los valores a los inputs del modal
    document.getElementById('modal-cod-cpu').value = cpuData.cod_cpu;
    document.getElementById('modal-cod-equipo-cpu').value = cpuData.cod_cpu_equipo;
    document.getElementById('modal-marca-cpu').value = cpuData.mar_cpu;
    document.getElementById('modal-cod-tics-cpu').value = cpuData.cod_tics_cpu;
    document.getElementById('modal-ser-cpu').value = cpuData.ser_cpu;
    document.getElementById('modal-tarjeta-cpu').value = cpuData.tar_madre;
    document.getElementById('modal-proce-cpu').value = cpuData.procesador;
    document.getElementById('modal-alimentacion-cpu').value = cpuData.velocidad;
    document.getElementById('modal-ram-cpu').value = cpuData.memoria;
    document.getElementById('modal-almacenamiento-cpu').value = cpuData.tam_hdd;
    document.getElementById('modal-disp-optico-cpu').value = cpuData.disp_optico;
    document.getElementById('modal-sistema-operativo-cpu').value = cpuData.sis_ope;
    document.getElementById('modal-office-cpu').value = cpuData.office;
    document.getElementById('modal-antivirus-cpu').value = cpuData.antivirus;
    document.getElementById('modal-nombre-antivirus-cpu').value = cpuData.nom_antivirus;
    document.getElementById('modal-version-antivirus-cpu').value = cpuData.ver_antivirus;
    document.getElementById('modal-host-cpu').value = cpuData.nom_hots;
    document.getElementById('modal-usuario-cpu').value = cpuData.nom_usuario_cpu;
    document.getElementById('modal-generacion-cpu').value = cpuData.ip_equipo;
    document.getElementById('modal-condicion-cpu').value = cpuData.con_cpu;
    document.getElementById('modal-estado-cpu').value = cpuData.est_cpu;
    document.getElementById('modal-observacion-cpu').value = cpuData.observacion_cpu;
    document.getElementById('modal-nom-tics-cpu').value = cpuData.nom_usua_cpu;

    // Asignar valores a los checkboxes
    document.getElementById("modal-red-fija-cpu").checked = cpuData.red_fija === "SI";
    document.getElementById("modal-red-cpu").checked = cpuData.red_inalam === "SI";
    document.getElementById("modal-bluetooth-cpu").checked = cpuData.bluetooth === "SI";
    document.getElementById("modal-lector-tarjeta-cpu").checked = cpuData.lec_tarjeta === "SI";

    // Mostrar el modal
    const modal = new bootstrap.Modal(document.getElementById('editCpuModal'));
    modal.show();
}

async function saveCpuChanges() {
    try {
        // Obtener los valores de los campos del modal
        const codCpu = document.getElementById('modal-cod-cpu').value;

        if (!codCpu) {
            alert('El código del CPU es obligatorio.');
            return;
        }

        // Obtener valores de los checkboxes y convertir a "SI" o "NO"
        const redFija = document.getElementById('modal-red-fija-cpu').checked ? "SI" : "NO";
        const redInalam = document.getElementById('modal-red-cpu').checked ? "SI" : "NO";
        const bluetooth = document.getElementById('modal-bluetooth-cpu').checked ? "SI" : "NO";
        const lecTarjeta = document.getElementById('modal-lector-tarjeta-cpu').checked ? "SI" : "NO";

        // Crear el objeto con los datos
        const cpuData = {
            mar_cpu: document.getElementById('modal-marca-cpu').value,
            ser_cpu: document.getElementById('modal-ser-cpu').value,
            tar_madre: document.getElementById('modal-tarjeta-cpu').value,
            procesador: document.getElementById('modal-proce-cpu').value,
            velocidad: document.getElementById('modal-alimentacion-cpu').value,
            memoria: document.getElementById('modal-ram-cpu').value,
            tam_hdd: document.getElementById('modal-almacenamiento-cpu').value,
            disp_optico: document.getElementById('modal-disp-optico-cpu').value,
            red_fija: redFija,
            red_inalam: redInalam,
            bluetooth: bluetooth,
            lec_tarjeta: lecTarjeta,
            sis_ope: document.getElementById('modal-sistema-operativo-cpu').value,
            office: document.getElementById('modal-office-cpu').value,
            antivirus: document.getElementById('modal-antivirus-cpu').value,
            nom_antivirus: document.getElementById('modal-nombre-antivirus-cpu').value,
            ver_antivirus: document.getElementById('modal-version-antivirus-cpu').value,
            nom_hots: document.getElementById('modal-host-cpu').value,
            nom_usuario: document.getElementById('modal-usuario-cpu').value,
            ip_equipo: document.getElementById('modal-generacion-cpu').value,
            con_cpu: document.getElementById('modal-condicion-cpu').value,
            est_cpu: document.getElementById('modal-estado-cpu').value,
            observacion: document.getElementById('modal-observacion-cpu').value,
        };

        // Verificar conexión antes de realizar la solicitud
        if (!navigator.onLine) {
            alert('Parece que no tienes conexión a internet.');
            return;
        }

        // Realizar la solicitud fetch
        const response = await fetch(`http://localhost:3000/api/cpu/${codCpu}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cpuData), // Convertimos el objeto a JSON
        });

        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status}`);
        }

        const data = await response.json();

        if (data.success) {
            alert('CPU actualizado exitosamente');
            // Cerrar el modal
            const modal = bootstrap.Modal.getInstance(document.getElementById('editCpuModal'));
            modal.hide();
            window.location.reload();
        } else {
            alert(data.message || 'Error al actualizar el CPU');
        }
    } catch (error) {
        console.error('Error al enviar la solicitud:', error);
        alert('Hubo un error al intentar actualizar el CPU.');
    }
}
