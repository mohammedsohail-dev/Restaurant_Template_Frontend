<template>
    <div class="landing-page">
      <TopBar />

      <!-- Hero Section -->
      <section class="hero-section">
        <div class="hero-content">
          <h1 class="hero-title">Welcome to Maison</h1>
          <p class="hero-description">Where Culinary Dreams Come True</p>
          <router-link to="/menu" class="btn-primary">Reserve a Table</router-link>
        </div>
      </section>
  
      <!-- About Us Section -->
      <section class="about-section">
        <div class="section-title">
          <h2>About Us</h2>
        </div>
        <p>
          Maison offers an exceptional dining experience with a menu designed to impress. Our dishes are crafted with love and expertise, bringing you the finest ingredients in every bite.
        </p>
      </section>
  
      <!-- Menu Section -->
      <section class="menu-section">
        <div class="section-title">
          <h2>Our Menu</h2>
        </div>
        <p>
          Explore a world of gourmet dishes prepared by our top chefs, from appetizers to desserts. Let your tastebuds embark on a journey.
        </p>
        <router-link to="/menu" class="btn-secondary">View Menu</router-link>
      </section>
  
      <!-- Carousel Section -->
      <section class="carousel-section">
        <div class="section-title">
          <h2>Gallery</h2>
        </div>
        <div class="carousel-container">
          <!-- Left Slide -->
          <div class="slide left-slide">
            <img src="@/assets/mercedes.jpg" alt="Dish 1" />
          </div>
          <!-- Center Slide -->
          <div class="slide center-slide">
            <img src="@/assets/restaurant-bg.jpg" alt="Dish 2" />
          </div>
          <!-- Right Slide -->
          <div class="slide right-slide">
            <img src="@/assets/restaurant-bg.jpg" alt="Dish 3" />
          </div>
          <!-- Navigation Buttons -->
          <a class="prev" @click="moveSlide(-1)">&#10094;</a>
          <a class="next" @click="moveSlide(1)">&#10095;</a>
        </div>
      </section>
  
      <!-- Contact Us Section -->
      <section class="contact-section">
        <div class="section-title">
          <h2>Contact Us</h2>
        </div>
        <p>Feel free to reach out for reservations, inquiries, or feedback!</p>
        <address>
          123 Foodie Street, Gourmet City <br />
          📞 +1 234 567 890 <br />
          📧 contact@restaurant.com
        </address>
      </section>
  
      <!-- Footer -->
      <FooterBar />
    </div>
  </template>
  
  <script>
  import TopBar from '@/components/TopBar.vue';
  import FooterBar from '@/components/FooterBar.vue';
  
  export default {
    name: 'LandingPage',
    components: {
      TopBar,FooterBar
    },
    data() {
      return {
        slideIndex: 1, // Start with the first slide
      };
    },
    mounted() {
      this.showSlides(this.slideIndex);
    },
    methods: {
      showSlides(index) {
        let slides = document.getElementsByClassName("slide");
        if (index > slides.length) {
          this.slideIndex = 1;
        }
        if (index < 1) {
          this.slideIndex = slides.length;
        }
        for (let i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";  
        }
        slides[this.slideIndex - 1].style.display = "block";  
        // Adjust the visibility of left and right slides
        slides[(this.slideIndex - 2 + slides.length) % slides.length].style.display = "block"; // left
        slides[this.slideIndex % slides.length].style.display = "block"; // right
      },
      moveSlide(n) {
        this.slideIndex += n;
        this.showSlides(this.slideIndex);
      }
    }
  };
  </script>
  <style scoped>
  /* 🍽️ General Layout */
  .landing-page {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    overflow: auto;
    min-height: 100vh;
    background-image: linear-gradient(to bottom, gold ,black); /* Soft background color */
  }
  
  
  /* 🌅 Hero Section */
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
  
  /* 🍷 Section Styles */
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
  
  /* 🍽️ Menu Section Button */
  .btn-secondary {
    background-color: #d4af37;
    color: #2e1a07;
    padding: 12px 30px;
    font-size: 1.1rem;
    border-radius: 8px;
    text-decoration: none;
    transition: background-color 0.3s ease;
  }
  
  .btn-secondary:hover {
    background-color: #f5d061;
  }
  
  /* 📸 Carousel Section */
  .carousel-section {
    background-color: #ffffffd3; /* Soft white */
    padding: 60px 20px;
  }
  
  .carousel-container {
    position: relative;
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .slide {
    display: none;
    transition: all 0.5s ease;
  }
  
  .slide img {
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }
  
  .left-slide,
  .right-slide {
    width: 30%;
    opacity: 0.7;
    margin: 20px;
  }
  
  .center-slide {
    width: 50%;
    opacity: 1;
  }
  
  /* Navigation buttons */
  .prev,
  .next {
    position: absolute;
    top: 50%;
    padding: 16px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    border: none;
    background-color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
    transition: background-color 0.3s;
    transform: translateY(-50%);
  }
  
  .prev {
    left: 20px;
  }
  
  .next {
    right: 20px;
  }
  
  .prev:hover,
  .next:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
  
  
  /* 📱 Mobile Responsive Styles */
  @media (max-width: 768px) {

    .hero-section {
      margin-top: 0px; /* Adjusted for top bar */
    }

    .left-slide,
  .right-slide {
    display: none !important; /* Hide left and right slides on mobile */
  }
  .center-slide {
    width: 100%; /* Make the center slide take full width */
    opacity: 1; /* Ensure the center slide is fully visible */
  }

  }
  </style>
  