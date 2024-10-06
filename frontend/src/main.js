import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Importa el router
import axios from 'axios';

// Configura Axios para que use la misma URL base para las solicitudes
axios.defaults.baseURL = 'http://localhost:3000/api/'; // Cambia el puerto si es necesario

// Crea la aplicación de Vue y usa el router
const app = createApp(App);

// Agrega Axios a la instancia de Vue para que esté disponible en toda la aplicación
app.config.globalProperties.$http = axios; // Ahora puedes usar this.$http en cualquier componente

// Configura Vue Router
import { createRouter, createWebHistory } from 'vue-router';
import Login from '../src/components/UserLogin.vue'; // Tu vista de inicio de sesión

// Define las rutas
const routes = [
    { path: '/login', component: Login },
];

// Crea el router
const routerInstance = createRouter({
    history: createWebHistory(),
    routes,
});

// Usa el router aquí
app.use(router); // Asegúrate de que esta línea esté presente

// Usa el router en la aplicación
app.use(routerInstance)
    .mount('#app');
