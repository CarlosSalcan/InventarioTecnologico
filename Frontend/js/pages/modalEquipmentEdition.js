function editImpresora(cod_impresora) {
    // Realizar la solicitud a la API para obtener los detalles de la impresora
    fetch(`http://localhost:3000/api/impresoras/${cod_impresora}`)
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                const impresora = data.data;

                // Llenar el modal con los datos de la impresora
                document.getElementById('modal-cod-impresora').value = impresora.cod_impresora;
                document.getElementById('modal-cod-equipo-impresora').value = impresora.cod_equipo;
                document.getElementById('modal-cod-tics-impresora').value = impresora.cod_tics_impresora;
                document.getElementById('modal-marca-impresora').value = impresora.mar_imp;
                document.getElementById('modal-modelo-impresora').value = impresora.mod_imp;
                document.getElementById('modal-serie-impresora').value = impresora.ser_imp;
                document.getElementById('modal-tipo-impresora').value = impresora.tip_imp;
                document.getElementById('modal-puerto-impresora').value = impresora.pue_imp;
                document.getElementById('modal-condicion-impresora').value = impresora.con_imp;
                document.getElementById('modal-estado-impresora').value = impresora.est_imp;
                document.getElementById('modal-obs-impresora').value = impresora.obs_imp;
                document.getElementById('nom-usua-impresora').value = impresora.nom_usua;
            } else {
                console.error('Impresora no encontrada');
            }
        })
        .catch(error => {
            console.error('Error al obtener los datos de la impresora:', error);
        });
}

// Función para guardar los cambios de la impresora
function saveImpresoraChanges() {
    const modal = document.getElementById('editImpresora');

    // Obtener los valores de los campos en el modal
    const id = modal.querySelector('[name="cod_impresora"]').value;
    const cod_equipo = modal.querySelector('[name="cod_equipo"]').value;
    const cod_tics_impresora = modal.querySelector('[name="cod_tics_impresora"]').value;
    const mar_imp = modal.querySelector('[name="mar_imp"]').value;
    const mod_imp = modal.querySelector('[name="mod_imp"]').value;
    const ser_imp = modal.querySelector('[name="ser_imp"]').value;
    const tip_imp = modal.querySelector('[name="tip_imp"]').value;
    const pue__imp = modal.querySelector('[name="pue__imp"]').value;
    const con_imp = modal.querySelector('[name="con_imp"]').value;
    const est_imp = modal.querySelector('[name="est_imp"]').value;
    const obs_imp = modal.querySelector('[name="obs_imp"]').value;
    const nom_usua = modal.querySelector('[name="nom_usua"]').value;

    // Crear el objeto para enviar al backend
    const updatedData = {
        mar_imp,
        mod_imp,
        ser_imp,
        tip_imp,
        pue__imp,
        con_imp,
        est_imp,
        obs_imp
    };

    // Enviar los datos al backend
    fetch(`http://localhost:3000/api/impresoras/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.success) {
                alert('Impresora actualizada correctamente');
                location.reload(); // Recargar la página para actualizar los datos
            } else {
                alert('Error al actualizar la impresora: ' + data.message);
            }
        })
        .catch((error) => {
            console.error('Error al guardar los cambios:', error);
            alert('Error interno al guardar los cambios');
        });
}

