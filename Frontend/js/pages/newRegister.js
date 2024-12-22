// Función para cargar el último código en el modal
async function openNewRegisterModal(type) {
    fetch(`http://localhost:3000/api/lastCode/${type}`)
        .then((response) => response.json())
        .then((data) => {
            console.log('Respuesta del servidor:', data); // Verifica la estructura de la respuesta

            if (data.success && data.lastCode) {
                // Si el código está disponible, asignarlo al input
                document.getElementById('modal-lastCode').value = data.lastCode;

                // Load Options SELECT-EQUIPO
                loadSelectOptions('servicios', 'modal-newR-Ubic');
                loadSelectOptions('pisos', 'modal-newR-Piso');
            } else {
                // Si no se encuentra el código, mostrar un mensaje
                document.getElementById('lastCodeInput').value = `Sin registros para ${type}`;
            }
        })
        .catch((error) => {
            console.error('Error al obtener el último código:', error);
            document.getElementById('lastCodeInput').value = 'Error al cargar código';
        });

    const modal = new bootstrap.Modal(document.getElementById('newLaptopModal'));
    modal.show();


}

// Función para obtener la fecha actual en formato YYYY-MM-DD
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

