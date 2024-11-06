// Función para abrir el modal de edición de monitor y cargar los datos
function openEditMonitorModal(item) {
    const modalCodEqMonitor = document.getElementById('modal-cod-Eqmonitor');
    const modalCodMonitor = document.getElementById('modal-cod-monitor');
    const modalCodTicsMonitor = document.getElementById('modal-cod-tics');
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