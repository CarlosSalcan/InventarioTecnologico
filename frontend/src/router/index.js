import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/UserLogin.vue'; // Asegúrate de que el nombre del archivo sea Login.vue

const routes = [
    { path: '/', component: Login },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

// Middleware para proteger rutas
router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token');
    if (to.matched.some(record => record.meta.requiresAuth) && !token) {
        next('/index'); // Redirige a la página de inicio de sesión si no hay token
    } else {
        next();
    }
});

export default router;
