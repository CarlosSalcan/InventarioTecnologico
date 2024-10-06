//-------------------------------> ACTUALIZAR ANIO
function setAnio(label) {
    var today = new Date();
    var year = today.getFullYear();
    document.getElementById(label).innerHTML = year;
}

// Llamamos a la función cuando se carga la página
window.onload = function() {
    setAnio("anio");
};
