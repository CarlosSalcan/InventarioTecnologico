document.getElementById('loginForm').addEventListener('submit', async function (event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();

        if (data.success) {
            console.log('Usuario logueado:', data.username); // Verificar que el usuario sea correcto
            localStorage.setItem('loggedUser', data.username); // Guardar el usuario logueado
            window.location.href = 'registro.html'; // Redirigir
        } else {
            alert(data.message);
        }
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        alert('Error en el servidor. Inténtalo de nuevo más tarde.');
    }
});

