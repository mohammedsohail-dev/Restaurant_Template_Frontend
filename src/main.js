import { createApp } from 'vue';
import App from './App.vue';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import 'vuetify/dist/vuetify.min.css';
import { jwtDecode } from 'jwt-decode'; // Correct import

// Import Keycloak
import keycloak from './keycloak';

// Import Router
import router from '../router';

// Import Store (Vuex or Pinia)
import store from '../store'; // Assuming you're using Vuex

// Vuetify configuration

// Import Bootstrap CSS & JS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Import Bootstrap Icons (optional)
import 'bootstrap-icons/font/bootstrap-icons.css';
 
const vuetify = createVuetify({
  components,
  directives,
});

// Initialize Keycloak before mounting the app
keycloak.init({ onLoad: "check-sso" }).then((authenticated) => {
  if (authenticated) {
    // Decode the token to get user details
    const token = keycloak.token;
    const decodedToken = jwtDecode(token);

    if (!decodedToken.exp || decodedToken.exp * 1000 < Date.now()) {
      console.warn("Token expired, forcing re-authentication");
      keycloak.logout();
      return;
    }

    // Extract user details
    const userDetails = {
      username: decodedToken.preferred_username, // Keycloak default field for username
      email: decodedToken.email, // Keycloak default field for email
      roles: decodedToken.realm_access?.roles || [], // Keycloak roles
      firstName: decodedToken.given_name, // First name
      lastName: decodedToken.family_name, // Last name
    };

    localStorage.setItem('access_token', token);

    // Store user details in Vuex (or Pinia)
    store.commit('setUser', userDetails); // Assuming you have a Vuex mutation called `setUser`
  }

  // Create and mount the app
  const app = createApp(App);
  app.use(router);    // Use Vue Router
  app.use(vuetify);  // Use Vuetify
  app.use(store);    // Use Vuex Store
  app.mount('#app');
}).catch(error => {
  console.error("Keycloak initialization failed:", error);
});