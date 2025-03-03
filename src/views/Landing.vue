<template>
  <div class="landing-page">
    <TopBar />

    <!-- Hero Section -->
    <HeroSection 
      title="Welcome to Restaurant" 
      description="Experience the finest dining experience with our exquisite menu and elegant ambiance." 
    />

    <!-- About Us Section -->
    <AboutSection />

    <!-- Menu Section -->
    <MenuSection />

    <!-- Images Section -->
    <GallerySection />

    <!-- Contact Us Section -->
    <ContactusSection />

    <!-- Footer -->
    <FooterBar />
  </div>
</template>

<script>
import TopBar from '@/components/TopBar.vue';
import FooterBar from '@/components/FooterBar.vue';
import HeroSection from '@/components/HeroSection.vue';
import AboutSection from '@/components/AboutSection.vue';
import MenuSection from '@/components/MenuSection.vue';
import GallerySection from '@/components/GallerySection.vue';
import ContactusSection from '@/components/ContactusSection.vue';

export default {
  name: 'LandingPage',
  components: {
    TopBar, FooterBar, HeroSection, AboutSection,MenuSection, GallerySection,ContactusSection
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

</style>
