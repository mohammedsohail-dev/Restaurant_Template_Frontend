<template>
    <section class="about-section">
      <div class="section-title">
        <h2>About Us</h2>
      </div>
      <p>
        Maison offers an exceptional dining experience with a menu designed to impress. Our dishes are crafted with love and expertise, bringing you the finest ingredients in every bite.
      </p>
    </section>
  </template>
  
  <script>
  export default {
    name: 'AboutSection'
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
 
  </style>