// Función para cargar el último código en el modal
async function openNewRegisterModal(type) {
    const loggedUser = localStorage.getItem('loggedUser'); // Recuperar el usuario del Local Storage

    if (loggedUser) {
        console.log('Usuario logueado:', loggedUser);
        const inputField = document.getElementById('modal-newR-Tics');
        if (inputField) {
            inputField.value = loggedUser; // Asignar el usuario al input
        } else {
            console.error('El campo modal-newR-Tics no existe en el DOM.');
        }
    } else {
        console.error('No se encontró un usuario logueado en Local Storage.');
    }

    fetch(`http://localhost:3000/api/lastCode/${type}`)
        .then((response) => response.json())
        .then((data) => {
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
        })
        .catch((error) => {
            console.error('Error al obtener el código:', error);
            document.getElementById('modal-lastCode').value = 'Error al cargar código';
        });

    const modal = new bootstrap.Modal(document.getElementById('newLaptopModal'));
    modal.show();
}

function setCurrentDate() {
    const today = new Date();

    // Obtener año, mes y día
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Asegurarse de que el mes tenga 2 dígitos
    const day = today.getDate().toString().padStart(2, '0'); // Asegurarse de que el día tenga 2 dígitos

    // Crear la fecha en el formato YYYY-MM-DD
    const currentDate = `${year}-${month}-${day}`;

    // Asignar la fecha al input
    document.getElementById('modal-NewDate').value = currentDate;
}

async function guardarEquipo() {
    // Obtener los valores del formulario
    const cod_equipo = document.getElementById("modal-lastCode").value;
    const fec_reg = document.getElementById("modal-NewDate").value;
    const cod_almacen = document.getElementById("modal-newR-Tics").value;
    const tip_equipo = "Portatil"; // Campo fijo en el formulario
    const piso_ubic = document.getElementById("modal-newR-Piso").value;
    const serv_depar = document.getElementById("modal-newR-Ubic").value;
    const nom_custodio = document.getElementById("modal-newR-Custodio").value;
    const nom_usua = document.getElementById("modal-newR-Host").value;

    // Crear el objeto con los datos
    const equipoData = {
        cod_equipo,
        fec_reg,
        cod_almacen,
        tip_equipo,
        piso_ubic,
        serv_depar,
        nom_custodio,
        nom_usua,
    };

    try {
        // Realizar la petición al backend
        const response = await fetch('/saveNewEquipo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(equipoData),
        });

        // Manejar la respuesta
        if (response.ok) {
            alert("Equipo guardado correctamente.");
        } else {
            const error = await response.json();
            alert(`Error al guardar: ${error.message}`);
        }
    } catch (error) {
        console.error("Error al guardar el equipo:", error);
        alert("Ocurrió un error al intentar guardar el equipo.");
    }
}
