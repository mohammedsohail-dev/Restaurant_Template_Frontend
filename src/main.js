import { createApp } from 'vue';
import App from './App.vue';
import 'vuetify/styles';  // Import Vuetify styles
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import 'vuetify/dist/vuetify.min.css';


// Import Router
import index from '../router/index.js';

// Vuetify configuration with components and directives
const vuetify = createVuetify({
  components,
  directives,
});

// Create and mount the app
createApp(App)
  .use(index)    // Use Vue Router
  .use(vuetify)  // Use Vuetify
  .mount('#app');
