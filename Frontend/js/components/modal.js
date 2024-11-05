// Cargar el contenido del modal desde el archivo modal.html
fetch('./components/modal.html') // Ruta del componente
    .then(response => response.text())
    .then(data => {
        document.getElementById('modal-container').innerHTML = data;

        // Añadir evento al botón de cerrar el modal
        const modal = document.getElementById('exampleModal');
        modal.addEventListener('hidden.bs.modal', function () {
            document.body.classList.remove('modal-open');
            const backdrop = document.querySelector('.modal-backdrop');
            if (backdrop) {
                backdrop.remove();
            }
        });

    })
    .catch(error => console.error('Error al cargar el modal:', error));
