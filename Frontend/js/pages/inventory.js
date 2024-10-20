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
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick='openEditModal(${JSON.stringify(item)})'> E </button>
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

    // Obtener pisos
    fetch('http://localhost:3000/api/options/pisos')
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                const selectPisoUbic = document.getElementById('modal-piso-ubic');
                data.data.forEach(piso => {
                    const option = document.createElement('option');
                    option.value = piso.cod_piso; // o el valor que necesites
                    option.textContent = piso.nom_piso; // o el texto que necesites
                    selectPisoUbic.appendChild(option);
                });
            } else {
                console.error('Error al obtener los pisos');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });


    fetch('http://localhost:3000/api/options/pisos')
        .then(response => response.json())
        .then(data => {
            const pisoSelect = document.getElementById('modal-piso-ubic');
            if (data.success) {
                data.data.forEach(piso => {
                    const option = document.createElement('option');
                    option.value = piso.nom_piso; // Establece el valor de la opción
                    option.textContent = piso.nom_piso; // Texto que se mostrará
                    pisoSelect.appendChild(option);
                });
            }
        });

    fetch('http://localhost:3000/api/options/servicios')
        .then(response => response.json())
        .then(data => {
            const servicioSelect = document.getElementById('modal-serv-depar');
            if (data.success) {
                data.data.forEach(servicio => {
                    const option = document.createElement('option');
                    option.value = servicio.nom_servicio; // Establece el valor de la opción
                    option.textContent = servicio.nom_servicio; // Texto que se mostrará
                    servicioSelect.appendChild(option);
                });
            }
        });
};

//-------------------------------> ABRIR MODAL CARGAR DATA
function openEditModal(item) {
    // Referencias a los campos dentro del modal
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
    modalPisoUbic.value = item.piso_ubic;
    modalServDepar.value = item.serv_depar;
    modalNomCustodio.value = item.nom_custodio;
    modalNomUsua.value = item.nom_usua;

    // Mostrar el modal
    const modal = new bootstrap.Modal(document.getElementById('exampleModal'));
    modal.show();
}
