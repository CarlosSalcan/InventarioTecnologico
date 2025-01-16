// Función para cargar el último código en el modal
async function openNewRegisterModal(type, modalId) {
    setLoggedUser('modal-newR-Tics')

    try {
        const response = await fetch(`http://localhost:3000/api/lastCode/${type}`);
        const data = await response.json();
        console.log('Respuesta del servidor:', data); // Verifica la estructura de la respuesta

        if (data.success && data.newCode) {
            // Asignar el nuevo código al input
            document.getElementById('modal-lastCode').value = data.newCode;

            // Cargar opciones de los SELECTs
            loadSelectOptions('servicios', 'modal-newR-Ubic');
            loadSelectOptions('pisos', 'modal-newR-Piso');
            loadSelectOptions('marcas', 'modal-newR-Marca');
            loadSelectOptions('procesador', 'modal-newR-Proce');
            loadSelectOptions('memoria', 'modal-newR-Ram');
            loadSelectOptions('tamHdd', 'modal-newR-Hdd');
            loadSelectOptions('disOpt', 'modal-newR-DisOpt');
            loadSelectOptions('sisOpe', 'modal-newR-SisOpe');
            loadSelectOptions('office', 'modal-newR-Off');
            loadSelectOptions('nomAntivirus', 'modal-newR-NomAnt');
            loadSelectOptions('estado', 'modal-newR-Estado');
        } else {
            // Si no se encuentra el código, mostrar un mensaje
            document.getElementById('modal-lastCode').value = `Sin registros para ${type}`;
        }
    } catch (error) {
        console.error('Error al obtener el código:', error);
        document.getElementById('modal-lastCode').value = 'Error al cargar código';
    }

    // Mostrar el modal correspondiente
    const modal = new bootstrap.Modal(document.getElementById(modalId));
    modal.show();
}

function setLoggedUser(inputId) {
    const loggedUser = localStorage.getItem('loggedUser'); // Recuperar el usuario del Local Storage

    if (loggedUser) {
        console.log('Usuario logueado:', loggedUser);
        const inputField = document.getElementById(inputId);
        if (inputField) {
            inputField.value = loggedUser; // Asignar el usuario al input
        } else {
            console.error(`El campo ${inputId} no existe en el DOM.`);
        }
    } else {
        console.error('No se encontró un usuario logueado en Local Storage.');
    }
}

function setCurrentDate(inputId) {
    const today = new Date();

    // Obtener año, mes y día
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Asegurarse de que el mes tenga 2 dígitos
    const day = today.getDate().toString().padStart(2, '0'); // Asegurarse de que el día tenga 2 dígitos

    // Crear la fecha en el formato YYYY-MM-DD
    const currentDate = `${year}-${month}-${day}`;

    // Asignar la fecha al input con el id proporcionado
    document.getElementById(inputId).value = currentDate;
}

async function guardarEquipo() {
    // Obtener los valores del formulario
    const fec_reg = document.getElementById("modal-NewDate").value;
    const cod_almacen = document.getElementById("modal-lastCode").value;
    const tip_equipo = document.querySelector('input[aria-label="Username"]').value;
    const piso_ubic = document.getElementById("modal-newR-Piso").selectedOptions[0].text;
    const serv_depar = document.getElementById("modal-newR-Ubic").selectedOptions[0].text;
    const nom_custodio = document.getElementById("modal-newR-Custodio").value;
    const nom_usua = document.getElementById("modal-newR-Tics").value;

    // Crear el objeto con los datos
    const equipoData = {
        fec_reg,
        cod_almacen,
        tip_equipo,
        piso_ubic,
        serv_depar,
        nom_custodio,
        nom_usua
    };

    try {
        const response = await fetch('http://localhost:3000/api/saveNewEquipo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(equipoData),
        });

        const result = await response.json();
        console.log(result); // Revisa la respuesta del backend.

        if (response.ok) {
            alert("Equipo guardado correctamente.");
        } else {
            alert(`Error al guardar: ${result.message}`);
        }
    } catch (error) {
        console.error("Error al guardar el equipo:", error);
        alert("Ocurrió un error al intentar guardar el equipo.");
    }
}

function copySelectValues(selectId1, inputId1, selectId2, inputId2) {
    // Obtener el select de Modal1
    const select1 = document.getElementById(selectId1);
    const input1 = document.getElementById(inputId1);

    // Obtener el select de Modal2
    const select2 = document.getElementById(selectId2);
    const input2 = document.getElementById(inputId2);

    // Verificar si los elementos existen
    if (select1) {
        const selectedOption1 = select1.selectedOptions[0]; // Obtener la opción seleccionada
        if (selectedOption1) {
            console.log(`Texto de la opción seleccionada en ${selectId1}: `, selectedOption1.text);
            if (input1) {
                input1.value = selectedOption1.text;  // Copiar texto de la opción al input
            } else {
                console.error(`No se encontró el input con ID: ${inputId1}`);
            }
        }
    } else {
        console.error(`No se encontró el select con ID: ${selectId1}`);
    }

    if (select2) {
        const selectedOption2 = select2.selectedOptions[0]; // Obtener la opción seleccionada
        if (selectedOption2) {
            console.log(`Texto de la opción seleccionada en ${selectId2}: `, selectedOption2.text);
            if (input2) {
                input2.value = selectedOption2.text;  // Copiar texto de la opción al input
            } else {
                console.error(`No se encontró el input con ID: ${inputId2}`);
            }
        }
    } else {
        console.error(`No se encontró el select con ID: ${selectId2}`);
    }
}

function transferInputValue(inputId1, inputId2) {
    // Obtener el input del Modal1
    const input1 = document.getElementById(inputId1);

    // Obtener el input del Modal2
    const input2 = document.getElementById(inputId2);

    // Verificar si los inputs existen
    if (input1 && input2) {
        // Copiar el valor del input1 al input2
        input2.value = input1.value;
    } else {
        console.error(`No se encontraron los inputs con los IDs: ${inputId1}, ${inputId2}`);
    }
}

function setInputValue(inputId, value) {
    const inputElement = document.getElementById(inputId);
    if (inputElement) {
        inputElement.value = value;
    } else {
        console.error("El elemento con id " + inputId + " no se encontró.");
    }
}

async function loadinfo() {
    // Obtener el valor del campo 'tipoEq'
    const tipoEq = document.getElementById('tipoEq').value;

    // Verificar el tipo de equipo y abrir el modal correspondiente
    if (tipoEq === 'Portatil') {
        guardarSwitchEquipo('newEquipModal', 'newLapModal');
        setCurrentDate('modal-NewDateP');
        setLoggedUser('modal-newR-TicsP');
        transferInputValue('modal-lastCode', 'modal-lastCodeP');
        transferInputValue('modal-newR-Custodio', 'modal-newR-CustodioP');

        loadSelectOptions('marcas', 'modal-newR-MarcaP');
        loadSelectOptions('procesador', 'modal-newR-ProceP');
        loadSelectOptions('memoria', 'modal-newR-RamP');
        loadSelectOptions('tamHdd', 'modal-newR-HddP');
        loadSelectOptions('disOpt', 'modal-newR-DisOptP');
        loadSelectOptions('sisOpe', 'modal-newR-SisOpeP');
        loadSelectOptions('office', 'modal-newR-OffP');
        loadSelectOptions('nomAntivirus', 'modal-newR-NomAntP');
        loadSelectOptions('estado', 'modal-newR-EstadoP');
    } else if (tipoEq === 'Telefono') {
        guardarSwitchEquipo('newEquipModal', 'newTelModal');
        setLoggedUser('modal-newR-TicsT');
        setCurrentDate('modal-NewDateT');
        transferInputValue('modal-lastCode', 'modal-lastCodeT');

        loadSelectOptions('marcas', 'modal-newR-MarcaT');
        loadSelectOptions('estado', 'modal-newR-EstadoT');
        loadSelectOptions('condicion', 'modal-newR-CondicionT');
    } else {
        console.error("Tipo de equipo desconocido");
    }
}

async function obtenerUltimoCodEquipo() {
    try {
        const response = await fetch('http://localhost:3000/api/ultimo-cod-equipo');
        if (response.ok) {
            const data = await response.json();
            console.log('Último código de equipo:', data.cod_equipo);
            return data.cod_equipo;
        } else {
            console.error('Error al obtener el último código de equipo:', await response.text());
        }
    } catch (error) {
        console.error('Error en la solicitud:', error);
    }
}

async function newPortatil() {
    try {
        // Obtener el último código de equipo desde el servidor
        const codEquipoResponse = await fetch('http://localhost:3000/api/lasCodeEq');
        let cod_equipo = "";
        console.log(codEquipoResponse );
        if (codEquipoResponse.ok) {
            const codEquipoData = await codEquipoResponse.json();
            cod_equipo = codEquipoData.cod_equipo || ""; // Asignar el último código o vacío si no existe
            console.log(codEquipoData);
        } else {
            console.error("Error al obtener el último código de equipo:", await codEquipoResponse.text());
            alert("No se pudo obtener el último código de equipo");
            return; // Detener ejecución si no se puede obtener el código
        }
        

        // Obtener valores de los campos del formulario
        const cod_tics = document.getElementById("modal-lastCodeP").value;
        const marca = document.getElementById("modal-newR-MarcaP").value;
        const modelo = document.getElementById("modal-newR-ModelP").value;
        const serie = document.getElementById("modal-newR-SerieP").value;
        const procesador = document.getElementById("modal-newR-ProceP").value;
        const velocidad = document.getElementById("modal-newR-GhzP").value;
        const memoria = document.getElementById("modal-newR-RamP").value;
        const hdd = document.getElementById("modal-newR-HddP").value;
        const dis_optico = document.getElementById("modal-newR-DisOptP").value;
        const red_fija = document.getElementById("modal-red-newR-RFP").checked ? 'SI' : 'NO';
        const wifi = document.getElementById("modal-newR-RIP").checked ? 'SI' : 'NO';
        const bluetooth = document.getElementById("modal-newR-BP").checked ? 'SI' : 'NO';
        const lector_tarjetas = document.getElementById("modal-newR-LTP").checked ? 'SI' : 'NO';
        const sistema_operativo = document.getElementById("modal-newR-SisOpeP").value;
        const office = document.getElementById("modal-newR-OffP").value;
        const antivirus = document.getElementById("modal-newR-AntP").value;
        const nom_antivirus = document.getElementById("modal-newR-NomAntP").value;
        const version_antivirus = document.getElementById("modal-newR-VerAntP").value;
        const host = document.getElementById("modal-newR-HostP").value;
        const custodio = document.getElementById("modal-newR-CustodioP").value; // Usuario
        const estado = document.getElementById("modal-newR-EstadoP").value;
        const observaciones = document.getElementById("modal-newR-ObsP").value;
        const personal = document.getElementById("modal-newR-TicsP").value;

        // Crear el objeto de datos
        const data = {
            cod_equipo,
            cod_tics,
            marca,
            modelo,
            serie,
            procesador,
            velocidad,
            memoria,
            hdd,
            dis_optico,
            red_fija,
            wifi,
            bluetooth,
            lector_tarjetas,
            sistema_operativo,
            office,
            antivirus,
            nom_antivirus,
            version_antivirus,
            host,
            custodio,
            estado,
            observaciones,
            personal
        };

        // Realizar la solicitud POST al servidor
        const response = await fetch('http://localhost:3000/api/saveNewPortatil', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        // Manejar la respuesta
        if (response.ok) {
            const result = await response.json();
            alert("Equipo guardado exitosamente");
            // Opcional: Cierra el modal
            const modalElement = document.getElementById('newLapModal');
            const modalInstance = bootstrap.Modal.getInstance(modalElement);
            modalInstance.hide();
        } else {
            const error = await response.json();
            console.error("Error al guardar el equipo:", error);
            alert("Error al guardar el equipo");
        }
    } catch (error) {
        console.error("Error en la solicitud:", error);
        alert("Hubo un error al guardar el equipo");
    }
}