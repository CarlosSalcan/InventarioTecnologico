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
async function saveImpresoraChanges() {
    const codImpresora = document.getElementById('modal-cod-impresora').value;
    const marImp = document.getElementById('modal-marca-impresora').value;
    const modImp = document.getElementById('modal-modelo-impresora').value;
    const serImp = document.getElementById('modal-serie-impresora').value;
    const tipImp = document.getElementById('modal-tipo-impresora').value;
    const pueImp = document.getElementById('modal-puerto-impresora').value;
    const conImp = document.getElementById('modal-condicion-impresora').value;
    const estImp = document.getElementById('modal-estado-impresora').value;
    const obsImp = document.getElementById('modal-obs-impresora').value;

    const impresoraData = {
        mar_imp: marImp,
        mod_imp: modImp,
        ser_imp: serImp,
        tip_imp: tipImp,
        pue_imp: pueImp,
        con_imp: conImp,
        est_imp: estImp,
        obs_imp: obsImp,
    };

    try {
        const response = await fetch(`http://localhost:3000/api/editImpresoras/${codImpresora}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(impresoraData),
        });

        const data = await response.json();
        if (data.success) {
            alert('Impresora actualizada exitosamente');
            const modal = bootstrap.Modal.getInstance(document.getElementById('editImpresora'));
            modal.hide();
            location.reload();
        } else {
            alert(`Error al actualizar la impresora: ${data.message}`);
        }
    } catch (error) {
        console.error('Error al enviar la solicitud:', error);
        alert('Hubo un error al actualizar los datos');
    }
}


