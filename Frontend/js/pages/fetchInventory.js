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
            `<td>${equipo.cod_equipo}</td>
            <td>${new Date(equipo.fec_reg).toLocaleDateString()}</td>
            <td>${equipo.cod_almacen}</td>
            <td>${equipo.tip_equipo}</td>
            <td>${equipo.piso_ubic}</td>
            <td>${equipo.serv_depar}</td>
            <td>${equipo.nom_custodio}</td>
            <td>${equipo.nom_usua}</td>
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
                                            <th>Cod_Equipo</th>
                                            <th>Cod_Tics</th>
                                            <th>Marca</th>
                                            <th>Procesador</th>
                                            <th>Memoria</th>
                                            <th>Almacenamiento</th>
                                            <th>Editar</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            ${equipo.cod_mouse ? `
                                                <td>${equipo.cod_equipo}</td>
                                                <td>${equipo.cod_tics_cpu}</td>
                                                <td>${equipo.mar_cpu}</td>
                                                <td>${equipo.procesador}</td>
                                                <td>${equipo.memoria}</td>
                                                <td>${equipo.tam_hdd}</td>
                                                <td>Edicion</td>
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
                                            <th>Cod_Equipo</th>
                                            <th>Cod_Tics</th>
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
                                                <td>${equipo.cod_equipo}</td>
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
                                            <th>Cod_Equipo</th>
                                            <th>Cod_Tics</th>
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
                                                <td>${equipo.cod_equipo}</td>
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
                                            <th>Cod_Equipo</th>
                                            <th>Cod_Tics</th>
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
                                                <td>${equipo.cod_equipo}</td>
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
    // Cargar opciones para los select (pisos y servicios)
    loadSelectOptions('pisos', 'modal-piso-ubic');
    loadSelectOptions('servicios', 'modal-serv-depar');
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
