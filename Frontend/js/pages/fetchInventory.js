// Función para llenar la tabla con los datos obtenidos
function populateTable(equipos) {
    const tableBody = document.querySelector('#escritorio-table tbody');
    tableBody.innerHTML = ''; // Limpiar la tabla antes de agregar nuevos datos

    equipos.forEach((equipo, index) => {
        // Crear una fila para el equipo con los detalles en una sola fila
        const equipoRow = document.createElement('tr');
        equipoRow.innerHTML = `
            <td colspan="4"><strong>Equipo #${index + 1}</strong></td>
        `;
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
        `;
        tableBody.appendChild(detalleRow);

        // Añadir detalles del monitor
        const monitorRow = document.createElement('tr');
        monitorRow.innerHTML = `
            <td colspan="4"><strong>Monitor</strong></td>
        `;
        tableBody.appendChild(monitorRow);

        const monitorHeaderRow = document.createElement('tr');
        monitorHeaderRow.innerHTML = `
            <td>COD_EQUIPO</td>
            <td>CODIGO_TICS</td>
            <td>MARCA</td>
            <td>TAMAÑO</td>
        `;
        tableBody.appendChild(monitorHeaderRow);

        const monitorDetailsRow = document.createElement('tr');
        if (equipo.cod_monitor) {
            monitorDetailsRow.innerHTML = `
                <td>${equipo.cod_equipo}</td>
                <td>${equipo.cod_tics_monitor}</td>
                <td>${equipo.mar_monitor}</td>
                <td>${equipo.tam_monitor}</td>
            `;
        } else {
            monitorDetailsRow.innerHTML = `
                <td colspan="4">No disponible</td>
            `;
        }
        tableBody.appendChild(monitorDetailsRow);

        // Añadir detalles del teclado
        const tecladoRow = document.createElement('tr');
        tecladoRow.innerHTML = `
            <td colspan="4"><strong>Teclado</strong></td>
        `;
        tableBody.appendChild(tecladoRow);

        const tecladoHeaderRow = document.createElement('tr');
        tecladoHeaderRow.innerHTML = `
            <td>COD_EQUIPO</td>
            <td>CODIGO_TICS</td>
            <td>MARCA</td>
            <td>MODELO</td>
        `;
        tableBody.appendChild(tecladoHeaderRow);

        const tecladoDetailsRow = document.createElement('tr');
        if (equipo.cod_teclado) {
            tecladoDetailsRow.innerHTML = `
                <td>${equipo.cod_equipo}</td>
                <td>${equipo.cod_tics_teclado}</td>
                <td>${equipo.mar_teclado}</td>
                <td>${equipo.mod_teclado}</td>
            `;
        } else {
            tecladoDetailsRow.innerHTML = `
                <td colspan="4">No disponible</td>
            `;
        }
        tableBody.appendChild(tecladoDetailsRow);

        // Añadir detalles del mouse
        const mouseRow = document.createElement('tr');
        mouseRow.innerHTML = `
            <td colspan="4"><strong>Mouse</strong></td>
        `;
        tableBody.appendChild(mouseRow);

        const mouseHeaderRow = document.createElement('tr');
        mouseHeaderRow.innerHTML = `
            <td>COD_EQUIPO</td>
            <td>CODIGO_TICS</td>
            <td>MARCA</td>
            <td>MODELO</td>
        `;
        tableBody.appendChild(mouseHeaderRow);

        const mouseDetailsRow = document.createElement('tr');
        if (equipo.cod_mouse) {
            mouseDetailsRow.innerHTML = `
                <td>${equipo.cod_equipo}</td>
                <td>${equipo.cod_tics_mouse}</td>
                <td>${equipo.mar_mouse}</td>
                <td>${equipo.mod_mouse}</td>
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
