<template>
    <div id="app">
        <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/login">Login</router-link>
        </nav>
        <router-view></router-view> <!-- Aquí se renderizarán las vistas -->
    </div>
</template>


<script>
import authService from '../services/authService'; // Asegúrate de que la ruta sea correcta

export default {
    data() {
        return {
            username: '',
            password: '',
            errorMessage: '',
        };
    },
    methods: {
        async handleLogin() {
            try {
                this.errorMessage = ''; // Reiniciar el mensaje de error
                const response = await authService.login(this.username, this.password);
                console.log('Login exitoso:', response);
                // Aquí puedes redirigir al usuario o almacenar el token
            } catch (error) {
                console.error('Error de inicio de sesión:', error);
                this.errorMessage = 'Error de inicio de sesión'; // Mostrar mensaje de error
            }
        },
    },
};
</script>

<style scoped>
/* Aquí puedes agregar tus estilos */
</style>