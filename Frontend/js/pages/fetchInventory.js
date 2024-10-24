// Función para llenar la tabla con los datos obtenidos
function populateTable(equipos) {
    const tableBody = document.querySelector('#escritorio-table tbody');
    tableBody.innerHTML = ''; // Limpiar la tabla antes de agregar nuevos datos

    equipos.forEach((equipo, index) => {
        // Crear una fila para el equipo con los detalles en una sola fila
        const equipoRow = document.createElement('tr');
        equipoRow.innerHTML = `
            <tr>
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
        detalleRow.innerHTML = `
            <td>${equipo.cod_equipo}</td>
            <td>${new Date(equipo.fec_reg).toLocaleDateString()}</td>
            <td>${equipo.cod_almacen}</td>
            <td>${equipo.tip_equipo}</td>
            <td>${equipo.piso_ubic}</td>
            <td>${equipo.serv_depar}</td>
            <td>${equipo.nom_custodio}</td>
            <td>${equipo.nom_usua}</td>
            <td>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick='openEditModal(${JSON.stringify(equipo)})'> E </button>
            </td>
        `;
        tableBody.appendChild(detalleRow);

        // Cargar opciones para los select (pisos y servicios)
    loadSelectOptions('pisos', 'modal-piso-ubic');
    loadSelectOptions('servicios', 'modal-serv-depar');

        // Añadir detalles del monitor
        const monitorRow = document.createElement('tr');
        monitorRow.innerHTML = `
            <td colspan="9"  style="background-color: #e0e0e0"><strong>Monitor</strong></td>
        `;
        tableBody.appendChild(monitorRow);

        const monitorHeaderRow = document.createElement('tr');
        monitorHeaderRow.innerHTML = `
            <td>Cod_Equipo</td>
            <td colspan="2">Cod_Tics</td>
            <td>Marca</td>
            <td colspan="2">Modelo</td>
            <td>Tamaño</td>
            <td colspan="2">Condición</td>
        `;
        tableBody.appendChild(monitorHeaderRow);

        const monitorDetailsRow = document.createElement('tr');
        if (equipo.cod_monitor) {
            monitorDetailsRow.innerHTML = `
                <td>${equipo.cod_equipo}</td>
                <td colspan="2">${equipo.cod_tics_monitor}</td>
                <td>${equipo.mar_monitor}</td>
                <td colspan="2">${equipo.mod_monitor}</td>
                <td>${equipo.tam_monitor}</td>
                <td>${equipo.con_monitor}</td>
                <td>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"> E </button>
                </td>
            `;
        } else {
            monitorDetailsRow.innerHTML = `
                <td colspan="9">No disponible</td>
            `;
        }
        tableBody.appendChild(monitorDetailsRow);

        // Añadir detalles del teclado
        const tecladoRow = document.createElement('tr');
        tecladoRow.innerHTML = `
            <td colspan="9" style="background-color: #e0e0e0"><strong>Teclado</strong></td>
        `;
        tableBody.appendChild(tecladoRow);

        const tecladoHeaderRow = document.createElement('tr');
        tecladoHeaderRow.innerHTML = `
            <td>Cod_Equipo</td>
            <td colspan="2">Cod_Tics</td>
            <td>Marca</td>
            <td colspan="2">Modelo</td>
            <td>Puerto</td>
            <td colspan="2">Condición</td>
        `;
        tableBody.appendChild(tecladoHeaderRow);

        const tecladoDetailsRow = document.createElement('tr');
        if (equipo.cod_teclado) {
            tecladoDetailsRow.innerHTML = `
                <td>${equipo.cod_equipo}</td>
                <td colspan="2">${equipo.cod_tics_teclado}</td>
                <td>${equipo.mar_teclado}</td>
                <td colspan="2">${equipo.mod_teclado}</td>
                <td>${equipo.pue_teclado}</td>
                <td>${equipo.con_teclado}</td>
                <td>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"> E </button>
                </td>
            `;
        } else {
            tecladoDetailsRow.innerHTML = `
                <td colspan="9">No disponible</td>
            `;
        }
        tableBody.appendChild(tecladoDetailsRow);

        // Añadir detalles del mouse
        const mouseRow = document.createElement('tr');
        mouseRow.innerHTML = `
            <td colspan="9" style="background-color: #e0e0e0"><strong>Mouse</strong></td>
        `;
        tableBody.appendChild(mouseRow);

        const mouseHeaderRow = document.createElement('tr');
        mouseHeaderRow.innerHTML = `
            <td>Cod_Equipo</td>
            <td colspan="2">Cod_Tics</td>
            <td>Marca</td>
            <td colspan="2">Modelo</td>
            <td>Puerto</td>
            <td colspan="2">Condición</td>
        `;
        tableBody.appendChild(mouseHeaderRow);

        const mouseDetailsRow = document.createElement('tr');
        if (equipo.cod_mouse) {
            mouseDetailsRow.innerHTML = `
                <td>${equipo.cod_equipo}</td>
                <td colspan="2">${equipo.cod_tics_mouse}</td>
                <td>${equipo.mar_mouse}</td>
                <td colspan="2">${equipo.mod_mouse}</td>
                <td>${equipo.pue_mouse}</td>
                <td>${equipo.con_mouse}</td>
                <td>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"> E </button>
                </td>
            `;
        } else {
            mouseDetailsRow.innerHTML = `
                <td colspan="4">No disponible</td>
            `;
        }
        tableBody.appendChild(mouseDetailsRow);
    });
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
