<template>
<div class="register-container">
      <div class="register-form">
        <form @submit.prevent="register">
          <div class="title"> Register </div>
          <div class="text_username"> Email </div>
          <div><input class="username" v-model="email" /> </div>
          <div class="text_password"> Password </div>
          <div><input class="password" type="password" v-model="password" /></div>
          <div class="text_confirm_password"> Confirm Password </div>
          <div><input class="confirm-password" type="password" v-model="confirmPassword" /></div>
          <div><button type="submit" class="button" :disabled="loading"> Register </button> </div>
        </form>
        <div v-if="loading" class="loading-overlay">
          <div class="spinner"></div>
          <p>Registering...</p>
        </div>
        <!-- Already a user? Login Link -->
        <div class="login-link">
          <p>Already a user? <router-link to="/login" class="login-text">Login here</router-link></p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'RegisterComponent',
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      loading: false
    };
  },
  methods: {
    async register() {
      this.loading = true;
      // ...existing code for registration logic...
      this.loading = false;
    }
  }
};
</script>

<style scoped>
/* 📜 Register Form - Elegant Dark Theme */
.register-container {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
}

.register-form {
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
.text_password,
.text_confirm_password {
  font-size: 1.1rem;
  color: #f5f5f5;
  margin-top: 1rem;
  text-align: left;
  display: block;
  font-family: 'Poppins', sans-serif;
}

/* 🍽️ Input Fields - Luxurious Look */
.username,
.password,
.confirm-password {
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
.password::placeholder,
.confirm-password::placeholder {
  color: rgba(255, 255, 255, 0.7);
}

.username:focus,
.password:focus,
.confirm-password:focus {
  border-color: #d4af37;
  box-shadow: 0px 0px 10px rgba(212, 175, 55, 0.5);
}

/* 🍷 Register Button */
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

/* 🔗 Login Link Style */
.login-link {
  margin-top: 1rem;
  font-family: 'Poppins', sans-serif;
}

.login-text {
  color: #d4af37;
  text-decoration: none;
  font-weight: bold;
}

.login-text:hover {
  text-decoration: underline;
}

/* 📱 Responsive Adjustments */
@media (max-width: 768px) {
  .register-form {
    background: rgba(0, 0, 0, 0.7); /* More transparent on mobile */
    backdrop-filter: blur(12px);
    width: 90%;
  }

  .title {
    font-size: 2rem;
  }

  .text_username,
  .text_password,
  .text_confirm_password {
    font-size: 1rem;
  }

  .button {
    font-size: 1rem;
    padding: 12px;
  }
}
</style>
