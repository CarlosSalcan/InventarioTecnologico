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
