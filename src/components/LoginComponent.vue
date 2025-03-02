<template>
    <div class="login-container">
      <div class="login-form">
        <form @submit.prevent="login">
          <div class="title"> Maison </div>
          <div class="text_username"> Email </div>
          <div><input class="username" v-model="username" /> </div>
          <div class="text_password"> Password </div>
          <div><input class="password" type="password" v-model="password" /></div>
          <div><button type="submit" class="button" :disabled="loading"> Login </button> </div>
        </form>
        <div v-if="loading" class="loading-overlay">
          <div class="spinner"></div>
          <p>Logging in...</p>
        </div>
        <!-- Sign in with Google, Facebook, or Discord -->
        <div class="social-login">
          <p>Or sign in with:</p>
          <button @click="signInWith('google')" class="social-button google">Google</button>
          <button @click="signInWith('facebook')" class="social-button facebook">Facebook</button>
          <button @click="signInWith('discord')" class="social-button discord">Discord</button>
        </div>
        <!-- Not a user? Register Link -->
        <div class="register-link">
          <p>Not a user? <router-link to="/register" class="register-text">Register here</router-link></p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'LoginComponent',
  data() {
    return {
      username: '',
      password: '',
      loading: false
    };
  },
  methods: {
    async login() {
      this.loading = true;
      try {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        const urlencoded = new URLSearchParams();
        urlencoded.append("grant_type", "password");
        urlencoded.append("client_id", "sohail-rest-api");
        urlencoded.append("username", this.username);
        urlencoded.append("password", this.password);

        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: urlencoded,
          redirect: "follow"
        };

        const response = await fetch("http://localhost:9090/realms/Sohail/protocol/openid-connect/token", requestOptions);

        if (!response.ok) {
          throw new Error(`Failed to fetch token: ${response.statusText}`);
        }

        const data = await response.json();

        localStorage.setItem('access_token', data.access_token);
        localStorage.setItem('refresh_token', data.refresh_token);

        this.$router.push('/allVehicles');
      } catch (error) {
        console.error('Error:', error);
      } finally {
        this.loading = false;
      }
    },
    signInWith(provider) {
      const keycloakUrl = "http://localhost:9090/realms/Sohail/protocol/openid-connect/auth";
      const clientId = "sohail-rest-api";
      const redirectUri = window.location.origin + "/menu";
      const scope = "openid";

      let providerUrl = `${keycloakUrl}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}&kc_idp_hint=${provider}`;

      window.location.href = providerUrl;
    }
  }
};
</script>

<style scoped>

/* 📜 Login Form - Elegant Dark Theme */
.login-container {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}


.login-form {
  background: rgba(0, 0, 0, 0.8); /* Dark overlay */
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
  width: 100%;
  max-width: 450px;
  text-align: center;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease-in-out;
}

/* 🍷 Title - Restaurant Vibes */
.title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #d4af37; /* Gold accent */
  margin-bottom: 1rem;
  font-family: 'Playfair Display', serif;
  letter-spacing: 2px;
}

/* 📝 Labels */
.text_username,
.text_password {
  font-size: 1.1rem;
  color: #f5f5f5;
  margin-top: 1rem;
  text-align: left;
  display: block;
  font-family: 'Poppins', sans-serif;
}

/* 🍽️ Input Fields - Luxurious Look */
.username,
.password {
  width: 100%;
  padding: 14px;
  margin-top: 8px;
  border: 2px solid rgba(212, 175, 55, 0.6); /* Gold accent */
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.15);
  color: white;
  font-size: 1.1rem;
  outline: none;
  transition: 0.3s;
  font-family: 'Poppins', sans-serif;
}

.username::placeholder,
.password::placeholder {
  color: rgba(255, 255, 255, 0.7);
}

.username:focus,
.password:focus {
  border-color: #d4af37;
  box-shadow: 0px 0px 10px rgba(212, 175, 55, 0.5);
}

/* 🍷 Login Button */
.button {
  width: 100%;
  background: #d4af37; /* Gold */
  color: #2e1a07; /* Dark brown */
  padding: 14px;
  margin-top: 1.8rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
  transition: background 0.3s ease-in-out, transform 0.2s;
}

.button:hover {
  background: #f5d061;
  transform: scale(1.05);
}

.button:disabled {
  background: rgba(212, 175, 55, 0.5);
  cursor: not-allowed;
}

/* 🍽️ Loading Overlay */
.loading-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 12px;
}

/* 🍷 Spinner */
.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #d4af37;
  border-top: 4px solid transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

/* 🌀 Spinner Animation */
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* 🔗 Register Link Style */
.register-link {
  margin-top: 1rem;
  font-family: 'Poppins', sans-serif;
  color:white;
}

.register-text {
  color: #d4af37;
  text-decoration: none;
  font-weight: bold;
}

.register-text:hover {
  text-decoration: underline;
}

/* 🌐 Social Login Buttons */
.social-login {
  margin-top: 1.5rem;
}

.social-login p {
  color: #f5f5f5;
  font-family: 'Poppins', sans-serif;
}

.social-button {
  width: 100%;
  padding: 12px;
  margin-top: 10px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: bold;
  transition: background 0.3s ease-in-out, transform 0.2s;
}

.social-button.google {
  background: #db4437; /* Google Red */
  color: white;
}

.social-button.facebook {
  background: #3b5998; /* Facebook Blue */
  color: white;
}

.social-button.discord {
  background: #7289da; /* Discord Blue */
  color: white;
}

.social-button:hover {
  transform: scale(1.05);
}

/* 📱 Responsive Adjustments */
@media (max-width: 768px) {
  .login-form {
    background: rgba(0, 0, 0, 0.7); /* More transparent on mobile */
    backdrop-filter: blur(12px);
    width: 90%;
  }

  .footer {
    font-size: 0.9rem;
    padding: 10px;
  }

  .register-link p {
    font-size: 0.9rem;
  }
}
</style>