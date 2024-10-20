//-------------------------------> ACTUALIZAR ANIO (FOOTER)
function setAnio(label) {
    var today = new Date();
    var year = today.getFullYear();
    document.getElementById(label).innerHTML = year;
}

// Llamar funcion cuando carge
window.onload = function() {
    setAnio("anio");
};