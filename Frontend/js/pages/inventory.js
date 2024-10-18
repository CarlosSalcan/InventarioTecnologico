window.onload = function () {
    fetch('http://localhost:3000/api/inventory')
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                const tableBody = document.querySelector('#inventory-table tbody');
                data.data.forEach(item => {
                    // Obtener solo la parte de la fecha
                    const fecha = new Date(item.fec_reg).toISOString().split('T')[0];

                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${item.cod_equipo}</td>
                        <td>${fecha}</td>
                        <td>${item.cod_almacen}</td>
                        <td>${item.tip_equipo}</td>
                        <td>${item.piso_ubic}</td>
                        <td>${item.serv_depar}</td>
                        <td>${item.nom_custodio}</td>
                        <td>${item.nom_usua}</td>
                        <td>
                            <button class="buttonEdit" onclick='openEditModal(${JSON.stringify(item)})'>
                                <svg class="svg-icon" fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <g stroke="#a649da" stroke-linecap="round" stroke-width="2">
                                        <path d="m20 20h-16"></path>
                                        <path clip-rule="evenodd" d="m14.5858 4.41422c.781-.78105 2.0474-.78105 2.8284 0 .7811.78105.7811 2.04738 0 2.82843l-8.28322 8.28325-3.03046.202.20203-3.0304z" fill-rule="evenodd"></path>
                                    </g>
                                </svg>
                            </button>
                        </td>`;
                    tableBody.appendChild(row);
                });
            } else {
                console.error('Error al obtener los datos del inventario');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
};

//-------------------------------> ABRIR MODAL CARGAR DATA
function openEditModal(codEquipo) {
    // Aquí puedes hacer otra solicitud para obtener los detalles del equipo usando codEquipo
    // Por ahora, solo abriré el modal
    const modal = new bootstrap.Modal(document.getElementById('editModal'));
    modal.show();

    // Cargar los datos del equipo en el formulario (esto es un ejemplo, adapta según tu lógica)
    document.getElementById('cod_equipo').value = codEquipo;
    // Aquí puedes agregar más lógica para cargar los otros campos
}

function closeModal() {
    const modal = bootstrap.Modal.getInstance(document.getElementById('editModal'));
    modal.hide();
}