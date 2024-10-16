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
                    `;
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
