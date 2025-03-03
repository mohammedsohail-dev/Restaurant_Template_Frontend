<template>
  <section class="hero-section">
    <div class="hero-content">
      <h1 class="hero-title">{{ title }}</h1>
      <p class="hero-description">{{ description }}</p>
      <router-link to="/menu" class="btn-primary">Reserve a Table</router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.hero-section {
  margin-top: -10px;
  background: url('@/assets/restaurant-bg.jpg') no-repeat center center/cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  background-position: center;
}

.hero-content {
  background: rgba(0, 0, 0, 0.7);
  padding: 30px;
  border-radius: 10px;
  max-width: 600px;
  width: 100%;
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: #d4af37; /* Gold accent */
}

.hero-description {
  font-size: 1.4rem;
  margin-bottom: 30px;
  color: white;
}

section {
  padding: 60px 20px;
  text-align: center;
  margin-top: 50px;
  background-color: #ffffffd3; /* Soft white */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.section-title h2 {
  font-size: 2.5rem;
  color: #2e1a07;
  margin-bottom: 20px;
  font-weight: bold;
}

p {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #333;
  max-width: 800px;
  margin: 0 auto 30px;
}

.btn-primary {
  background-color: #d4af37;
  color: #2e1a07;
  padding: 15px 30px;
  font-size: 1.2rem;
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #f5d061;
}

@media (max-width: 768px) {
  .hero-section {
    margin-top: 0px; /* Adjusted for top bar */
  }

}
</style>