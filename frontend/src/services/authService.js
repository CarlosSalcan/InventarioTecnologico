import axios from 'axios';

export const login = async (username, password) => {
    try {
        const response = await axios.post('http://localhost:3000/api/login', {
            username,
            password,
        });
        return response.data;
    } catch (error) {
        console.error('Error en el inicio de sesión:', error);
        throw error; // Lanza el error para manejarlo más tarde
    }
};

export default {
    login,
};