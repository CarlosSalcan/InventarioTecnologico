fetch('./components/modal.html')
.then(response => response.text())
.then(data => {
    document.getElementById('modal-container').innerHTML = data;
})
.catch(error => console.error('Error al cargar el modal:', error));