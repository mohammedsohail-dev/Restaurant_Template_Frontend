<template>
  <div class="menu-page">
    <TopBar />
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">Our Menu</h1>
        <p class="hero-description">Discover our delicious and curated selection of dishes, prepared to perfection.</p>
      </div>
    </section>

    <!-- Menu Categories Section -->
    <section class="categories-section">
      <div class="section-title">
        <h2>Appetizers</h2>
      </div>
      <div class="dish-list">
        <div class="dish-item">
          <img src="@/assets/restaurant-bg.jpg" alt="Dish 1" />
          <div class="dish-details">
            <h3>Bruschetta</h3>
            <p class="dish-description">Crispy toasted bread topped with tomatoes, basil, and balsamic glaze.</p>
            <p class="dish-price">$12</p>
          </div>
        </div>
        <div class="dish-item">
          <img src="@/assets/restaurant-bg.jpg" alt="Dish 2" />
          <div class="dish-details">
            <h3>Stuffed Mushrooms</h3>
            <p class="dish-description">Mushrooms stuffed with garlic, cheese, and fresh herbs.</p>
            <p class="dish-price">$10</p>
          </div>
        </div>
        <!-- Add more dishes here -->
      </div>
    </section>

    <!-- Main Dishes Section -->
    <section class="categories-section">
      <div class="section-title">
        <h2>Main Dishes</h2>
      </div>
      <div class="dish-list">
        <div class="dish-item">
          <img src="@/assets/restaurant-bg.jpg" alt="Dish 3" />
          <div class="dish-details">
            <h3>Grilled Salmon</h3>
            <p class="dish-description">Fresh salmon fillet, grilled with lemon and herbs.</p>
            <p class="dish-price">$25</p>
          </div>
        </div>
        <div class="dish-item">
          <img src="@/assets/restaurant-bg.jpg" alt="Dish 4" />
          <div class="dish-details">
            <h3>Spaghetti Carbonara</h3>
            <p class="dish-description">Classic pasta with creamy sauce, pancetta, and parmesan.</p>
            <p class="dish-price">$18</p>
          </div>
        </div>
        <!-- Add more dishes here -->
      </div>
    </section>

    <!-- Desserts Section -->
    <section class="categories-section">
      <div class="section-title">
        <h2>Desserts</h2>
      </div>
      <div class="dish-list">
        <div class="dish-item">
          <img src="@/assets/restaurant-bg.jpg" alt="Dish 5" />
          <div class="dish-details">
            <h3>Tiramisu</h3>
            <p class="dish-description">Layers of coffee-soaked sponge cake, mascarpone, and cocoa powder.</p>
            <p class="dish-price">$8</p>
          </div>
        </div>
        <div class="dish-item">
          <img src="@/assets/restaurant-bg.jpg" alt="Dish 6" />
          <div class="dish-details">
            <h3>Chocolate Lava Cake</h3>
            <p class="dish-description">Decadent molten chocolate cake with a rich center.</p>
            <p class="dish-price">$9</p>
          </div>
        </div>
        <!-- Add more dishes here -->
      </div>
    </section>

    <!-- Footer -->
   <FooterBar />
  </div>
</template>

<script>
import FooterBar from '@/components/FooterBar.vue';
import TopBar from '@/components/TopBar.vue';

export default {
  name: 'MenuPage',
  components: {
    TopBar,FooterBar
  }
};
</script>

<style scoped>
/* 🍽️ General Layout */
.menu-page {
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  overflow: auto;
  background-color: rgb(255, 255, 255);
  min-height: 100vh; /* Ensure the entire height of the screen is used */
}

/* 🌅 Hero Section */
.hero-section {
  background: url('@/assets/restaurant-bg.jpg') no-repeat center center/cover;
  height: 50vh; /* Fixed height for the hero section */
  min-height: 300px; /* Minimum height if viewport is small */
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
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
  color: #d4af37;
}

.hero-description {
  font-size: 1.4rem;
  color: white;
  margin-bottom: 20px;
}

/* 🍷 Menu Section */
.categories-section {
  padding: 60px 20px;
  text-align: center;
}

.section-title h2 {
  font-size: 2.5rem;
  color: #2e1a07;
  margin-bottom: 20px;
  font-weight: bold;
}

/* Dish List Centering */
.dish-list-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.dish-list {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  margin-top: 30px;
  width: 100%;
}

.dish-item {
  background-color: rgba(255, 255, 255, 0.644);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 1);
  width: 100%;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.dish-item img {
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.dish-details h3 {
  font-size: 1.5rem;
  color: #2e1a07;
  margin-top: 15px;
}

.dish-description {
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 15px;
}

.dish-price {
  font-size: 1.3rem;
  color: #d4af37;
  font-weight: bold;
}


</style>
