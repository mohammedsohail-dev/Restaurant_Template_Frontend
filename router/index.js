import { createRouter, createWebHistory } from 'vue-router';
import Login from '../src/views/Login.vue';
import ListVehicles from '../src/views/allVehicles.vue';

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/allVehicles',
        name: 'AllVehicles',
        component: ListVehicles
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;