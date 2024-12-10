async function mostrarParametros(tabla, campoCodigo, campoNombre, campoMostrar) {
    try {
        // Realizar la solicitud fetch al backend para obtener los parámetros
        const response = await fetch(`http://localhost:3000/api/parameter/${tabla}`);

        // Verificar si la respuesta es exitosa
        const data = await response.json();

        if (data.success) {
            const parametros = data.parametros;

            // Verificar si se encontraron parámetros
            if (parametros.length > 0) {
                // Generar el HTML para la tabla de parámetros
                const html = parametros.map((parametro) => {
                    return `
                        <tr>
                            <td>${parametro[campoCodigo]}</td>
                            <td>${parametro[campoNombre]}</td>
                            <td><button class="edit-btn" onclick="mostrarVentanaEdit('modal2', '${parametro[campoCodigo]}', '${parametro[campoNombre]}', '${tabla}', '${campoNombre}')">
                                    Editar
                                </button>
                            </td>
                            <td><button class="delete-btn" onclick="eliminarParam('${tabla}', '${campoCodigo}', '${parametro[campoCodigo]}', '${parametro[campoNombre]}')">
                                    Borrar
                                </button>
                            </td>
                        </tr>
                    `;
                }).join('');  // Unir todos los elementos generados

                // Insertar el HTML generado en el contenedor con ID "campoMostrar"
                document.getElementById(campoMostrar).innerHTML = `<table><thead><tr><th>ID</th><th>Nombre</th><th>Editar</th><th>Eliminar</th></tr></thead><tbody>${html}</tbody></table>`;
            } else {
                // Si no se encuentran parámetros, mostrar un mensaje
                document.getElementById(campoMostrar).innerHTML = `<p>No se encontraron parámetros para la tabla ${tabla}.</p>`;
            }
        } else {
            // Si la respuesta no es exitosa, mostrar un mensaje de error
            document.getElementById(campoMostrar).innerHTML = `<p>No se pudieron cargar los parámetros de la tabla ${tabla}.</p>`;
        }
    } catch (error) {
        // Si ocurre un error en la solicitud, mostrar un mensaje de error
        document.getElementById(campoMostrar).innerHTML = '<p>Ocurrió un error al cargar los parámetros.</p>';
        console.error('Error al cargar los parámetros:', error);
    }
}

// Función para cargar la tabla seleccionada
function cargarTablaSeleccionada(tabla) {
    // Limpiar el contenido del contenedor
    document.getElementById('searchContainer').innerHTML = '';

    // Llamar a la función mostrarParametros según la tabla seleccionada
    switch (tabla) {
        case 'param_antivirus':
            mostrarParametros('param_antivirus', 'cod_antivirus', 'nom_antivirus', 'searchContainer');
            break;
        case 'param_condicion':
            mostrarParametros('param_condicion', 'cod_condicion', 'nom_condicion', 'searchContainer');
            break;
        case 'param_dis_opt':
            mostrarParametros('param_dis_opt', 'cod_dis_opt', 'nom_dis_opt', 'searchContainer');
            break;
        case 'param_estado':
            mostrarParametros('param_estado', 'cod_estado', 'nom_estado', 'searchContainer');
            break;
        case 'param_marcas':
            mostrarParametros('param_marcas', 'cod_marcas', 'nom_marcas', 'searchContainer');
            break;
        case 'param_memoria':
            mostrarParametros('param_memoria', 'cod_memoria', 'nom_memoria', 'searchContainer');
            break;
        case 'param_num_hdd':
            mostrarParametros('param_num_hdd', 'cod_n_hdd', 'nom_n_hdd', 'searchContainer');
            break;
        case 'param_office':
            mostrarParametros('param_office', 'cod_office', 'nom_office', 'searchContainer');
            break;
        case 'param_piso':
            mostrarParametros('param_piso', 'cod_piso', 'nom_piso', 'searchContainer');
            break;
        case 'param_procesador':
            mostrarParametros('param_procesador', 'cod_proce', 'nom_proce', 'searchContainer');
            break;
        case 'param_puertos':
            mostrarParametros('param_puertos', 'cod_puerto', 'nom_puerto', 'searchContainer');
            break;
        case 'param_servicio':
            mostrarParametros('param_servicio', 'cod_servicio', 'nom_servicio', 'searchContainer');
            break;
        case 'param_sis_ope':
            mostrarParametros('param_sis_ope', 'cod_sis_ope', 'nom_sis_ope', 'searchContainer');
            break;
        case 'param_tamano_hdd':
            mostrarParametros('param_tamano_hdd', 'cod_tam_hdd', 'nom_tam_hdd', 'searchContainer');
            break;
        case 'param_tamano_monitor':
            mostrarParametros('param_tamano_monitor', 'cod_tam_mon', 'nom_tam_mon', 'searchContainer');
            break;
        case 'param_tipo_equipo':
            mostrarParametros('param_tipo_equipo', 'cod_te', 'nom_te', 'searchContainer');
            break;
        case 'param_tipo_impresora':
            mostrarParametros('param_tipo_impresora', 'cod_ti', 'nom_ti', 'searchContainer');
            break;
        case 'param_tipo_monitor':
            mostrarParametros('param_tipo_monitor', 'cod_tm', 'nom_tm', 'searchContainer');
            break;
        case 'param_tipo_mt':
            mostrarParametros('param_tipo_mt', 'cod_tmt', 'nom_tmt', 'searchContainer');
            break;
        default:
            document.getElementById('searchContainer').innerHTML = '<p>Seleccione una tabla para mostrar.</p>';
            break;
    }
}
