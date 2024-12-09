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
