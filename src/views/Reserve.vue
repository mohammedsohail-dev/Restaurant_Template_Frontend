<template>
  <TopBar />
  <div class="flex-box">
    <div class="reserve-container">
      <div class="reserve-form">
        <form @submit.prevent="reserve">
          <div class="title"> Reserve a Table </div>
          <div class="text_name"> Name </div>
          <div><input class="name" v-model="name" placeholder="Your Name" /> </div>
          <div class="text_date"> Date </div>
          <div><input class="date" type="date" v-model="date" /> </div>
          <div class="text_requests"> Special Requests </div>
          <div><textarea class="requests" v-model="requests" placeholder="Any special requests?" /></div>
          <div><button type="submit" class="button" :disabled="loading"> Reserve </button> </div>
        </form>
        <div v-if="loading" class="loading-overlay">
          <div class="spinner"></div>
          <p>Reserving...</p>
        </div>
      </div>
    </div>
  </div>
  <FooterBar />
</template>

<script>
import FooterBar from '@/components/FooterBar.vue';
import TopBar from '@/components/TopBar.vue';

export default {
  name: 'reserve-website',
  components: {
    TopBar, FooterBar
  },
  data() {
    return {
      name: '',
      date: '',
      requests: '',
      loading: false
    };
  },
  methods: {
    async reserve() {
      this.loading = true;
      try {
        // Reservation logic here
        // Example: Send a POST request to your reservation endpoint
        const response = await fetch("http://localhost:9090/reserve", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: this.name,
            date: this.date,
            requests: this.requests
          })
        });

        if (!response.ok) {
          throw new Error(`Failed to reserve: ${response.statusText}`);
        }

        // Handle successful reservation (e.g., show a confirmation message)
        alert('Reservation successful!');
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
  font-family: 'Kanit', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
  background: url('@/assets/restaurant-bg.jpg') no-repeat center center/cover;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
}

/* 📜 Reserve Form - Elegant Dark Theme */
.reserve-container {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.reserve-form {
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
  letter-spacing: 2px;
}

/* 📝 Labels */
.text_name,
.text_date,
.text_requests {
  font-size: 1.1rem;
  color: #f5f5f5;
  margin-top: 1rem;
  text-align: left;
  display: block;
  font-family: 'Poppins', sans-serif;
}

/* 🍽️ Input Fields - Luxurious Look */
.name,
.date,
.requests {
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

.name::placeholder,
.date::placeholder,
.requests::placeholder {
  color: rgba(255, 255, 255, 0.7);
}

.name:focus,
.date:focus,
.requests:focus {
  border-color: #d4af37;
  box-shadow: 0px 0px 10px rgba(212, 175, 55, 0.5);
}

/* 🍷 Reserve Button */
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
</style>