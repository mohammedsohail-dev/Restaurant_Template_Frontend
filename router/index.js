import { createRouter, createWebHistory } from 'vue-router';
import Login from '../src/views/Login.vue';
import Register from '../src/views/Register.vue';
import Reserve from '@/views/Reserve.vue';
import Menu from '@/views/Menu.vue';
import Landing from '@/views/Landing.vue';

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login
    },{
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/menu',
        name: 'menu',
        component: Menu
    },{
        path : '/reserve',
        name : 'Reserve',
        component : Reserve
    },
    {
        path : '/',
        name : 'Landing',
        component : Landing
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;