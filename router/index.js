import { createRouter, createWebHistory } from 'vue-router';
import Reserve from '@/views/Reserve.vue';
import Menu from '@/views/Menu.vue';
import Landing from '@/views/Landing.vue';
import UserDashboardView from '@/views/UserDashboardView.vue'; // Import the UserDashboardView
import keycloak from '@/keycloak';

const routes = [
    {
        path: '/menu',
        name: 'menu',
        component: Menu
    },
    {
        path: '/reserve',
        name: 'Reserve',
        component: Reserve,
        meta: { requiresAuth: true }
    },
    {
        path: '/',
        name: 'Landing',
        component: Landing
    },
    {
        path: '/dashboard',
        name: 'UserDashboard',
        component: UserDashboardView,
        meta: { requiresAuth: true, roles: ['admin'] } // Add authentication and role requirement
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach(async (to, _from, next) => {
    if (to.meta.requiresAuth) {
        if (!keycloak.authenticated) {
            // Save the intended route and redirect to login
            const redirectUrl = window.location.origin + to.fullPath;
            keycloak.login({ redirectUri: redirectUrl });
            return;
        }

        if (to.meta.roles && to.meta.roles.length > 0) {
            const hasRole = to.meta.roles.some(role => keycloak.tokenParsed.resource_access['the-backend-client'].roles.includes(role));
            if (!hasRole) {
                alert('You do not have the required permissions to access this page.');
                return;
            }
        }
    } else {
        let refreshAttempts = 0; // Reset the refresh attempts counter
        if (refreshAttempts < 2) {
            try {
                const refreshed = await keycloak.updateToken(5);
                if (refreshed) {
                    console.log("Token refreshed");
                    refreshAttempts = 0; // Reset counter after a successful refresh
                }
            } catch (error) {
                console.error("Token refresh failed:", error);
                refreshAttempts += 1; // Increment the refresh attempts counter
                if (refreshAttempts >= 4) {
                    keycloak.logout();
                    console.warn("Maximum refresh attempts reached");
                }
            }
        }
    }
    next();
});

export default router;