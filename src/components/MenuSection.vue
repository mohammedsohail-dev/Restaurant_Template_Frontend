<template>
    <section class="menu-section">
      <div class="section-title">
        <h2>Our Menu</h2>
      </div>
      <p>
        Explore a world of gourmet dishes prepared by our top chefs, from appetizers to desserts. Let your tastebuds embark on a journey.
      </p>
      <router-link to="/menu" class="btn-secondary">View Menu</router-link>
    </section>
</template>
  
  <script>
  export default {
    name: 'MenuSection'
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
 
  </style>