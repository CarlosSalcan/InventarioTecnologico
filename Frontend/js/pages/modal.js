// Función para cargar opciones en los select
function loadSelectOptions(apiEndpoint, selectId) {
    fetch(`http://localhost:3000/api/options/${apiEndpoint}`)
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                const select = document.getElementById(selectId);
                select.innerHTML = ''; // Limpiar opciones previas
                data.data.forEach(item => {
                    const option = document.createElement('option');
                    option.value = item.cod_piso || item.cod_servicio;
                    option.textContent = item.nom_piso || item.nom_servicio;
                    select.appendChild(option);
                });
            } else {
                console.error(`Error al obtener los ${apiEndpoint}`);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// Función para abrir el modal de edición y cargar los datos
function openEditModal(item) {
    const modalCodEquipo = document.getElementById('modal-cod-equipo');
    const modalFecReg = document.getElementById('modal-fec-reg');
    const modalCodAlmacen = document.getElementById('modal-cod-almacen');
    const modalTipEquipo = document.getElementById('modal-tip-equipo');
    const modalPisoUbic = document.getElementById('modal-piso-ubic');
    const modalServDepar = document.getElementById('modal-serv-depar');
    const modalNomCustodio = document.getElementById('modal-nom-custodio');
    const modalNomUsua = document.getElementById('modal-nom-usua');

    // Cargar los datos del equipo en el modal
    modalCodEquipo.value = item.cod_equipo;
    modalFecReg.value = new Date(item.fec_reg).toISOString().split('T')[0];
    modalCodAlmacen.value = item.cod_almacen;
    modalTipEquipo.value = item.tip_equipo;
    modalNomCustodio.value = item.nom_custodio;
    modalNomUsua.value = item.nom_usua;

    // Establecer el piso y servicio seleccionados en los select
    setSelectedOption(modalPisoUbic, item.piso_ubic);
    setSelectedOption(modalServDepar, item.serv_depar);

    // Mostrar el modal
    const modal = new bootstrap.Modal(document.getElementById('exampleModal'));
    modal.show();
}

// Función para seleccionar la opción correcta en un select
function setSelectedOption(selectElement, valueToSelect) {
    const options = selectElement.options;
    for (let i = 0; i < options.length; i++) {
        if (options[i].textContent === valueToSelect || options[i].value === valueToSelect) {
            selectElement.selectedIndex = i;
            break;
        }
    }
}

// Funcion para enviar cambios en campos del modal
function saveChanges() {
    const codEquipo = document.getElementById('modal-cod-equipo').value;

    const pisoUbic = document.getElementById('modal-piso-ubic').options[document.getElementById('modal-piso-ubic').selectedIndex].text;
    const servDepar = document.getElementById('modal-serv-depar').options[document.getElementById('modal-serv-depar').selectedIndex].text;
    const nomCustodio = document.getElementById('modal-nom-custodio').value;

    // Crear el objeto con los datos actualizados
    const updatedData = {
        cod_equipo: codEquipo,

        piso_ubic: pisoUbic,
        serv_depar: servDepar,
        nom_custodio: nomCustodio
    };

    // Enviar los datos actualizados al servidor con fetch
    fetch(`http://localhost:3000/api/inventory/${codEquipo}`, {
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
                const modal = bootstrap.Modal.getInstance(document.getElementById('exampleModal'));
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