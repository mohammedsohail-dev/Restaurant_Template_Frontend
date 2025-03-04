<template>
    <section class="images-section">
      <div class="image-container" v-for="(image, index) in images" :key="index">
        <img :src="image" :alt="'Image ' + (index + 1)" />
      </div>
    </section>
</template>
  
<script>
import image1 from '@/assets/restaurant-bg.jpg';
import image2 from '@/assets/restaurant-bg1.jpg';
import image3 from '@/assets/restaurant-bg2.jpg';
import image4 from '@/assets/restaurant-bg3.jpg';
import image5 from '@/assets/restaurant-bg4.jpg';
import image6 from '@/assets/restaurant-bg5.jpg';
export default {
    name: 'GallerySection',
    data() {
    return {
      images: [image1, image2, image3,image4,image5,image6],
      observer: null
    };
  },
  mounted() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('pop-in');
        } else {
          entry.target.classList.remove('pop-in');
        }
      });
    });

    this.$el.querySelectorAll('.image-container').forEach(el => {
      this.observer.observe(el);
    });
  },
  beforeUnmount() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
};
</script>
  
  <style scoped>
  
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

  .images-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}

.image-container {
  margin: 10px;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.image-container.pop-in {
  opacity: 1;
  transform: translateY(0);
}

.image-container img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

@media (max-width: 768px) {

  .image-container img {
    width: 100%;
  }
}
 
  </style>