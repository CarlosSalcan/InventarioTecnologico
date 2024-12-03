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
            const modal = bootstrap.Modal.getInstance(document.getElementById('editImpresoraModal'));
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

function editTelefono(cod_telfono) {
    // Realizar la solicitud a la API para obtener los detalles de la impresora
    fetch(`http://localhost:3000/api/telefonos/${cod_telfono}`)
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                const telefono = data.data;

                document.getElementById('modal-cod-telf').value = telefono.cod_telf;
                document.getElementById('modal-cod-equipo-telf').value = telefono.cod_equipo;
                document.getElementById('modal-cod-tics-telf').value = telefono.cod_tics_telf;
                document.getElementById('modal-mar-telf').value = telefono.mar_telf;
                document.getElementById('modal-mod-telf').value = telefono.mod_telf;
                document.getElementById('modal-ser-telf').value = telefono.ser_telf;
                document.getElementById('modal-con-telf').value = telefono.con_telf;
                document.getElementById('modal-est-telf').value = telefono.est_telf;
                document.getElementById('modal-obs-telf').value = telefono.obs_telf;
                document.getElementById('modal-nom-usua-telf').value = telefono.nom_usua;
            } else {
                console.error('Telfono no encontrado');
            }
        })
        .catch(error => {
            console.error('Error al obtener los datos del telefono:', error);
        });
}

async function saveTelefonoChanges() {
    const codTelefono = document.getElementById('modal-cod-telf').value;
    const marTelef = document.getElementById('modal-mar-telf').value;
    const modTelef = document.getElementById('modal-mod-telf').value;
    const serTelef = document.getElementById('modal-ser-telf').value;
    const conTelef = document.getElementById('modal-con-telf').value;
    const estTelef = document.getElementById('modal-est-telf').value;
    const obsTelef = document.getElementById('modal-obs-telf').value;

    const impresoraData = {
        mar_telf: marTelef,
        mod_telf: modTelef,
        ser_telf: serTelef,
        con_telf: conTelef,
        est_telf: estTelef,
        obs_telf: obsTelef
    };

    try {
        const response = await fetch(`http://localhost:3000/api/editTelefonos/${codTelefono}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(impresoraData),
        });

        const data = await response.json();
        if (data.success) {
            alert('Telefono actualizada exitosamente');
            const modal = bootstrap.Modal.getInstance(document.getElementById('editTelefonoModal'));
            modal.hide();
            location.reload();
        } else {
            alert(`Error al actualizar el telfono: ${data.message}`);
        }
    } catch (error) {
        console.error('Error al enviar la solicitud:', error);
        alert('Hubo un error al actualizar los datos');
    }
}
