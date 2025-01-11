// Función para llenar la tabla con los datos obtenidos
function populateTable(equipos) {
    const tableBody = document.querySelector('#escritorio-table tbody');
    tableBody.innerHTML = ''; // Limpiar la tabla antes de agregar nuevos datos

    equipos.forEach((equipo, index) => {
        // Crear una fila para el equipo con los detalles en una sola fila
        const equipoRow = document.createElement('tr');
        equipoRow.innerHTML =
            `<tr>
                <th>Cod.</th>
                <th>Fecha Reg.</th>
                <th>Cod. Almacen</th>
                <th>Tipo Eq.</th>
                <th>Piso</th>
                <th>Departamento</th>
                <th>Custodio</th>
                <th>Usuario</th>
                <th>Editar</th>
            </tr>`;
        tableBody.appendChild(equipoRow);

        const detalleRow = document.createElement('tr');
        detalleRow.innerHTML =
            `<td>${equipo.cod_equipo_general}</td>
            <td>${new Date(equipo.fec_reg).toLocaleDateString()}</td>
            <td>${equipo.cod_almacen}</td>
            <td>${equipo.tip_equipo}</td>
            <td>${equipo.piso_ubic}</td>
            <td>${equipo.serv_depar}</td>
            <td>${equipo.nom_custodio}</td>
            <td>${equipo.nom_usua_equipo}</td>
            <td>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick='openEditModal(${JSON.stringify(equipo)})'> E </button>
            </td>`;
        tableBody.appendChild(detalleRow);

        // Crear acordeón para los componentes
        const accordionRow = document.createElement('tr');
        accordionRow.innerHTML =
            `<td colspan="9" style="padding: 0; margin: 0;">
                <div class="accordion" id="accordion-${index}">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseCPU-${index}" aria-expanded="false" aria-controls="collapseCPU-${index}">
                                CPU
                            </button>
                        </h2>
                        <div id="collapseCPU-${index}" class="accordion-collapse collapse" data-bs-parent="#accordion-${index}">
                            <div class="accordion-body">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>Cod. CPU</th>
                                            <th>Cod. Tics</th>
                                            <th>Marca</th>
                                            <th>Procesador</th>
                                            <th>Memoria</th>
                                            <th>Almacenamiento</th>
                                            <th>Edición</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            ${equipo.cod_cpu ? `
                                                <td>${equipo.cod_cpu_equipo}</td>
                                                <td>${equipo.nom_usuario_cpu}</td>
                                                <td>${equipo.mar_cpu}</td>
                                                <td>${equipo.procesador}</td>
                                                <td>${equipo.memoria}</td>
                                                <td>${equipo.tam_hdd}</td>
                                                <td><button type="button" class="btn btn-primary" data-bs-target="#exampleModal" onclick='openCpuEditModal(${JSON.stringify(equipo)})'> CPU </button></td>
                                            ` : `<td colspan="6">No disponible</td>`}
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseMonitor-${index}" aria-expanded="true" aria-controls="collapseMonitor-${index}">
                                Monitor
                            </button>
                        </h2>
                        <div id="collapseMonitor-${index}" class="accordion-collapse collapse" data-bs-parent="#accordion-${index}">
                            <div class="accordion-body">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>Cod. Monitor</th>
                                            <th>Cod. Tics</th>
                                            <th>Marca</th>
                                            <th>Modelo</th>
                                            <th>Tamaño</th>
                                            <th>Condición</th>
                                            <th>Edición</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            ${equipo.cod_monitor ? `
                                                <td>${equipo.cod_monitor}</td>
                                                <td>${equipo.cod_tics_monitor}</td>
                                                <td>${equipo.mar_monitor}</td>
                                                <td>${equipo.mod_monitor}</td>
                                                <td>${equipo.tam_monitor}</td>
                                                <td>${equipo.con_monitor}</td>
                                                <td><button type="button" class="btn btn-primary" data-bs-target="#exampleModal" onclick='openEditMonitorModal(${JSON.stringify(equipo)})'> EMO </button></td>
                                            ` : `<td colspan="6">No disponible</td>`}
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTeclado-${index}" aria-expanded="false" aria-controls="collapseTeclado-${index}">
                                Teclado
                            </button>
                        </h2>
                        <div id="collapseTeclado-${index}" class="accordion-collapse collapse" data-bs-parent="#accordion-${index}">
                            <div class="accordion-body">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>Cod. Teclado</th>
                                            <th>Cod. Tics</th>
                                            <th>Marca</th>
                                            <th>Modelo</th>
                                            <th>Puerto</th>
                                            <th>Condición</th>
                                            <th>Edidición</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            ${equipo.cod_teclado ? `
                                                <td>${equipo.cod_teclado}</td>
                                                <td>${equipo.cod_tics_teclado}</td>
                                                <td>${equipo.mar_teclado}</td>
                                                <td>${equipo.mod_teclado}</td>
                                                <td>${equipo.pue_teclado}</td>
                                                <td>${equipo.con_teclado}</td>
                                                <td><button type="button" class="btn btn-primary" data-bs-target="#exampleModal" onclick='openTecladoEditModal(${JSON.stringify(equipo)})'> ETC </button></td>
                                            ` : `<td colspan="6">No disponible</td>`}
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseMouse-${index}" aria-expanded="false" aria-controls="collapseMouse-${index}">
                                Mouse
                            </button>
                        </h2>
                        <div id="collapseMouse-${index}" class="accordion-collapse collapse" data-bs-parent="#accordion-${index}">
                            <div class="accordion-body">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>Cod. Mouse</th>
                                            <th>Cod. Tics</th>
                                            <th>Marca</th>
                                            <th>Modelo</th>
                                            <th>Puerto</th>
                                            <th>Condición</th>
                                            <th>Edición</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            ${equipo.cod_mouse ? `
                                                <td>${equipo.cod_mouse}</td>
                                                <td>${equipo.cod_tics_mouse}</td>
                                                <td>${equipo.mar_mouse}</td>
                                                <td>${equipo.mod_mouse}</td>
                                                <td>${equipo.pue_mouse}</td>
                                                <td>${equipo.con_mouse}</td>
                                                <td><button type="button" class="btn btn-primary" data-bs-target="#exampleModal" onclick='openMouseEditModal(${JSON.stringify(equipo)})'> EMOU </button></td>
                                            ` : `<td colspan="6">No disponible</td>`}
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </td>`;
        tableBody.appendChild(accordionRow);
    });

    // Load Options SELECT-EQUIPO
    loadSelectOptions('servicios', 'modal-serv-depar');
    loadSelectOptions('pisos', 'modal-piso-ubic');
    
    // Load Opption SELECT-CPU
    loadSelectOptions('nomAntivirus', 'modal-nombre-antivirus-cpu');
    loadSelectOptions('sisOpe', 'modal-sistema-operativo-cpu');
    loadSelectOptions('tamHdd', 'modal-almacenamiento-cpu');
    loadSelectOptions('condicion', 'modal-condicion-cpu');
    loadSelectOptions('disOpt', 'modal-disp-optico-cpu');
    loadSelectOptions('procesador', 'modal-proce-cpu');
    loadSelectOptions('estado', 'modal-estado-cpu');
    loadSelectOptions('office', 'modal-office-cpu');
    loadSelectOptions('marcas', 'modal-marca-cpu');
    loadSelectOptions('memoria', 'modal-ram-cpu');
    
    // Load Opption SELECT-MONITOR
    loadSelectOptions('condicion', 'modal-con-monitor');
    loadSelectOptions('estado', 'modal-est-monitor');
    loadSelectOptions('marcas', 'modal-mar-monitor');
    loadSelectOptions('tamMtr', 'modal-tam-monitor');
    
    // Load Opption SELECT-MONITOR
    loadSelectOptions('condicion', 'modal-con-teclado');
    loadSelectOptions('estado', 'modal-est-teclado');
    loadSelectOptions('marcas', 'modal-mar-teclado');
    loadSelectOptions('conexion', 'modal-tip-teclado');
    loadSelectOptions('puerto', 'modal-pue-teclado');
    
    // Load Opption SELECT-MONITOR
    loadSelectOptions('marcas', 'modal-mar-mouse');
    loadSelectOptions('conexion', 'modal-tip-mouse');
    loadSelectOptions('puerto', 'modal-pue-mouse');
    loadSelectOptions('condicion', 'modal-con-mouse');
    loadSelectOptions('estado', 'modal-est-mouse');
}

// fetchInventory.js
async function fetchEquiposEscritorio() {
    try {
        const response = await fetch('http://localhost:3000/api/inventory/escritorio');
        if (!response.ok) {
            throw new Error('Error al obtener los datos del inventario');
        }
        const data = await response.json();
        if (data.success) {
            populateTable(data.data);
        } else {
            console.error(data.message);
        }
    } catch (error) {
        console.error('Error al obtener los datos del inventario', error);
    }
}

// Llamar a la función para obtener datos al cargar la página
document.addEventListener('DOMContentLoaded', fetchEquiposEscritorio);
