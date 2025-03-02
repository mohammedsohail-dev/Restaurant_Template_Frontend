<template>
  <div class="flex-box">
    <TopBar />
    <RegisterComponent />
    <FooterBar />
  </div>
</template>

<script>
import FooterBar from '@/components/FooterBar.vue';
import TopBar from '@/components/TopBar.vue';
import RegisterComponent from '@/components/RegisterComponent.vue';

export default {
  name: 'register-website',
  components: {
    TopBar, FooterBar, RegisterComponent
  },
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
      try {
        // Registration logic here
        // Example: Send a POST request to your registration endpoint
        const response = await fetch("http://localhost:9090/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email: this.email,
            password: this.password,
            confirmPassword: this.confirmPassword
          })
        });

        if (!response.ok) {
          throw new Error(`Failed to register: ${response.statusText}`);
        }

        // const data = await response.json();

        // Handle successful registration (e.g., redirect to login page)
        this.$router.push('/login');
      } catch (error) {
        console.error('Error:', error);
      } finally {
        this.loading = false;
      }
    }
  }
}
</script>

<style scoped>
/* 🍽️ Main Background */
.flex-box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
  background: url('@/assets/restaurant-bg.jpg') no-repeat center center/cover;
  padding: 0;
  box-sizing: border-box;
  position: relative;
}


</style>