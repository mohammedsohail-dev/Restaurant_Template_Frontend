<template>
  <div class="top-bar">
    <router-link to="/" class="top-bar-title btn-primary">Restaurant_name</router-link>
    <div class="menu-icon" @click="toggleMenu">
      <div :class="{ 'bar1': true, 'change': menuOpen }"></div>
      <div :class="{ 'bar2': true, 'change': menuOpen }"></div>
      <div :class="{ 'bar3': true, 'change': menuOpen }"></div>
    </div>
    <div class="nav-links" :class="{ 'open': menuOpen }">
      <router-link to="/reserve" class="btn-primary">Reserve</router-link>
      <div v-if= loggedIn @click = "logout" class="btn-primary">Logout</div>
      <div v-if= !loggedIn @click = "login" class="btn-primary">Login</div>
      <router-link to="/menu" class="btn-primary">Menu</router-link>
    </div>
  </div>
</template>

<script>
import keycloak from '@/keycloak'; // Import keycloak

export default {
  name: 'TopBar',
  data() {
    return {
      menuOpen: false,
      loggedIn: false
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    logout() {
    keycloak.logout({ redirectUri: window.location.origin }); 
    this.$store.commit('clearUser'); 
    localStorage.removeItem('access_token'); 
    sessionStorage.removeItem('user'); 
    localStorage.removeItem('user');
    },
    login(){
      keycloak.login();
    }
  },
  mounted(){
    if(localStorage.getItem('access_token') != null){
      this.loggedIn = true;
    }
  }
};
</script>

<style scoped>
.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000000;
  padding: 15px 20px;
  color: white;
  top: 0;
  width: 100%;
  z-index: 1000;
}

.top-bar-title {
  font-size: calc(15px + 1vw);
  font-weight: bold;
  text-decoration: none;
  padding: 10px 15px;
  background-color: #000000;
  color:  #d4af37;;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}


.top-bar-title:hover {
  background-color: #000000 ;
  color: #f5d061;
}

.menu-icon {
  display: none;
  flex-direction: column;
  cursor: pointer;
}

.menu-icon div {
  width: 25px;
  height: 3px;
  background-color: #d4af37;
  margin: 4px 0;
  transition: 0.4s;
}

.change.bar1 {
  transform: rotate(-45deg) translate(-5px, 10px);
}

.change.bar2 {
  opacity: 0;
}

.change.bar3 {
  transform: rotate(45deg) translate(-5px, -10px);
}

.nav-links {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.nav-links .btn-primary {
  font-size: 1.1rem;
  padding: 10px 15px;
  background-color: #000000;
  color: #d4af37;
  border-radius: 8px;
  text-decoration: none;
  margin-left: 10px;
  transition: background-color 0.3s ease;
}

.nav-links .btn-primary:hover {
  background-color: #000000 ;
  color: #f5d061;
}

@media (max-width: 768px) {
  .menu-icon {
    display: flex;
  }

  .nav-links {
    display: none;
    flex-direction: column;
    width: 100%;
    position: absolute;
    top: 79px;
    left: 0;
    background-color: #000000;
    z-index: 999;
  }

  .nav-links.open {
    display: flex;
  }

  .nav-links .btn-primary {
    margin: 10px 0;
    width: 100%;
    text-align: center;
  }
}
</style>