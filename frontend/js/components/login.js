document.querySelector('form').addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevenir el envío por defecto del formulario

    const username = document.getElementById('inputEmail1').value;
    const password = document.getElementById('inputPassword1').value;

    try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        const result = await response.json();

        if (result.success) {
            // Redirigir al inventario si el login es exitoso
            window.location.href = 'inventario.html';
        } else {
            // Mostrar mensaje de error si el login falla
            alert(result.message);
        }
    } catch (error) {
        console.error('Error:', error);
    }
});
