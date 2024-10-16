document.addEventListener("DOMContentLoaded", function() {
    fetch('./components/header.html') //Ruta del componente
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar el header');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
        })
        .catch(error => {
            console.error('Error:', error);
        });
});
