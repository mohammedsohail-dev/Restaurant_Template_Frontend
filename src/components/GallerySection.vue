<template>
    <section class="images-section">
      <div class="image-container" v-for="(image, index) in images" :key="index">
        <img :src="image" :alt="'Image ' + (index + 1)" />
      </div>
    </section>
</template>
  
<script>
import image1 from '@/assets/mercedes.jpg';
import image2 from '@/assets/restaurant-bg.jpg';
import image3 from '@/assets/login-screen.png';
export default {
    name: 'GallerySection',
    data() {
    return {
      images: [image1, image2, image3]
    };
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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 50px;
}

.image-container {
  margin: 10px;
}

.image-container img {
  width: 300px;
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