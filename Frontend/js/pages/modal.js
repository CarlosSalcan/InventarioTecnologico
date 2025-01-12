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
                    option.value = item.cod_piso || item.cod_servicio || item.nom_marcas || item.nom_memoria || item.nom_proce || item.nom_tam_hdd || item.nom_dis_opt || item.nom_sis_ope || item.nom_office || item.nom_antivirus || item.nom_condicion || item.nom_estado || item.nom_tam_mon || item.nom_tmt || item.nom_puerto || item.nom_ti;
                    option.textContent = item.nom_piso || item.nom_servicio || item.nom_marcas || item.nom_memoria || item.nom_proce || item.nom_tam_hdd || item.nom_dis_opt || item.nom_sis_ope || item.nom_office || item.nom_antivirus || item.nom_condicion || item.nom_estado || item.nom_tam_mon || item.nom_tmt || item.nom_puerto || item.nom_ti;
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
    modalCodEquipo.value = item.cod_equipo_general ;
    modalFecReg.value = new Date(item.fec_reg).toISOString().split('T')[0];
    modalCodAlmacen.value = item.cod_almacen;
    modalTipEquipo.value = item.tip_equipo;
    modalNomCustodio.value = item.nom_custodio;
    modalNomUsua.value = item.nom_usua_equipo;

    // Establecer el piso y servicio seleccionados en los select
    setSelectedOption(modalPisoUbic, item.piso_ubic);
    setSelectedOption(modalServDepar, item.serv_depar);

    // Mostrar el modal
    const modal = new bootstrap.Modal(document.getElementById('exampleModal'));
    modal.show();
}

function openEditParamModal(parametro) {
    // Obtener todas las claves y valores del objeto 'parametro'
    const keys = Object.keys(parametro);
    const values = Object.values(parametro);

    // Seleccionar el campo de código y nombre de forma dinámica
    const inputCodParam = document.getElementById('modal-cod-param');
    const inputParam = document.getElementById('modal-param');

    // Configurar los valores en los inputs
    if (keys.length > 0 && inputCodParam) {
        inputCodParam.value = values[0]; // Primer campo del objeto, por convención asumimos que es el ID
    }
    if (keys.length > 1 && inputParam) {
        inputParam.value = values[1]; // Segundo campo del objeto, asumimos que es el nombre
    }

    // Abrir el modal (si estás usando Bootstrap)
    const modal = new bootstrap.Modal(document.getElementById('editParamModal'));
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

// Función genérica para aplicar límite de caracteres a varios inputs
function setCharacterLimit(selector, limit) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
        element.maxLength = limit;
    });
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

function switchModal(currentModalId, nextModalId) {
    const currentModal = new bootstrap.Modal(document.getElementById(currentModalId));
    const nextModal = new bootstrap.Modal(document.getElementById(nextModalId));

    // Cierra el modal actual
    currentModal.hide();

    // Abre el siguiente modal después de un pequeño retraso
    setTimeout(() => {
        nextModal.show();
    }, 300); // Puedes ajustar este tiempo si es necesario
}


// Llamadas a la función para diferentes inputs
setCharacterLimit('#modal-ser-cpu', 20);  // Para el input con id "input1"
setCharacterLimit('#modal-ser-monitor', 20);  // Para el input con id "input2"
setCharacterLimit('#modal-ser-mouse', 20);  // Para el input con id "input3"
