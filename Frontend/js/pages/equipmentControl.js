// Función para cargar los equipos y mostrarlos en la tabla indicada
async function loadEquipos(tipo, tablaId) {
    try {
        // Realizar la solicitud GET a la API para obtener los equipos de tipo específico
        const response = await fetch(`http://localhost:3000/api/inventoryFilter/${tipo}`);
        const data = await response.json();

        // Verificar si la respuesta es exitosa
        if (data.success) {
            // Llamar a la función para mostrar los equipos en la tabla
            showEquipos(data.equipos, tablaId);
        } else {
            alert('No se encontraron equipos de este tipo.');
        }
    } catch (error) {
        console.error('Error al cargar los equipos:', error);
        alert('Hubo un error al cargar los equipos TIPO.');
    }
}

// Función para mostrar los equipos en la tabla específica
function showEquipos(equipos, tablaId) {
    const tabla = document.getElementById(tablaId);
    if (!tabla) {
        console.error(`No se encontró la tabla con ID '${tablaId}'`);
        return;
    }
    
    const tbody = tabla.querySelector('tbody');
    tbody.innerHTML = ''; // Limpiar cualquier contenido previo en la tabla

    // Verificar si hay equipos
    if (equipos.length > 0) {
        equipos.forEach(equipo => {
            // Crear una nueva fila para cada equipo
            const fila = document.createElement('tr');

            // Determinar qué modal y función utilizar según el tipo de equipo
            let modalId, editFunction;
            if (equipo.tip_equipo === 'Impresora') {
                modalId = 'editImpresoraModal';
                editFunction = `editImpresora(${equipo.cod_equipo})`;
            } else if (equipo.tip_equipo === 'Teléfono') {
                modalId = 'editTelefonoModal';
                editFunction = `editTelefono(${equipo.cod_equipo})`;
            } else if (equipo.tip_equipo === 'Portatil') {
                modalId = 'editLaptopModal';
                editFunction = `editPortatil(${equipo.cod_equipo})`;
            }

            // Crear las celdas con los datos del equipo
            fila.innerHTML = `
                <td>${equipo.cod_equipo}</td>
                <td>${new Date(equipo.fec_reg).toLocaleDateString()}</td>
                <td>${equipo.cod_almacen}</td>
                <td>${equipo.tip_equipo}</td>
                <td>${equipo.piso_ubic}</td>
                <td>${equipo.serv_depar}</td>
                <td>${equipo.nom_custodio}</td>
                <td>${equipo.nom_usua}</td>
                <td>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" 
                        data-bs-target="#${modalId}" 
                        onclick="${editFunction}">
                        EDIT
                    </button>
                </td>
            `;

            // Agregar la fila a la tabla
            tbody.appendChild(fila);
        });
    } else {
        tbody.innerHTML = '<tr><td colspan="6">No hay equipos disponibles de este tipo.</td></tr>';
    }

    // Load opciones SELECT-IMPRESORA
    loadSelectOptions('condicion', 'modal-condicion-impresora');
    loadSelectOptions('tipImpresora', 'modal-tipo-impresora');
    loadSelectOptions('puerto', 'modal-puerto-impresora');
    loadSelectOptions('estado', 'modal-estado-impresora');
    loadSelectOptions('marcas', 'modal-marca-impresora');

    // Load opciones SELECT-TELEFONO
    loadSelectOptions('condicion', 'modal-con-telf');
    loadSelectOptions('marcas', 'modal-mar-telf');
    loadSelectOptions('estado', 'modal-est-telf');

    // Load opciones SELECT-LAPTOP
    loadSelectOptions('nomAntivirus', 'modal-nom-antivirus-laptop');
    loadSelectOptions('disOpt', 'modal-disp-optico-laptop');
    loadSelectOptions('procesador', 'modal-proce-laptop');
    loadSelectOptions('memoria', 'modal-memoria-laptop');
    loadSelectOptions('sisOpe', 'modal-sisOpe-laptop');
    loadSelectOptions('estado', 'modal-estado-laptop');
    loadSelectOptions('marcas', 'modal-marca-laptop');
    loadSelectOptions('tamHdd', 'modal-hdd-laptop');
    loadSelectOptions('office', 'modal-off-laptop');
}

// Llamar a la función para cargar los equipos de tipo "Impresora" en la tabla correspondiente
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('impresora-table')) {
        loadEquipos('Impresora', 'impresora-table');
    }
    if (document.getElementById('telefono-table')) {
        loadEquipos('Teléfono', 'telefono-table');
    }
    if (document.getElementById('portatil-table')) {
        loadEquipos('Portatil', 'portatil-table');
    }
});
