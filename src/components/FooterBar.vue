<template>
<footer class="footer">
        <div class="footer-content">
          <div class="footer-info">
            <p>&copy; 2025 Maison Restaurant. All rights reserved.</p>
            <p>Follow us:</p>
            <p>
              <a href="#">Instagram</a> | <a href="#">Facebook</a> | <a href="#">Twitter</a>
            </p>
          </div>
          <router-link to="/register" class="btn-primary">Become a Premium Member</router-link>
        </div>
</footer>
</template>

<script>
export default {
  name: 'FooterBar',
  data() {
    return {};
  }
};
</script>

<style scoped>  
 .footer {
    background-color: #000000;
    text-align: center;
    padding: 30px;
    width: 100%;
  }
  
  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .footer-info p {
    font-size: 1rem;
    color: rgb(255, 255, 255);
    margin: 0;
  }
  
  .footer-info a {
    color: #d4af37;
    text-decoration: none;
  }
  
  .footer-info a:hover {
    text-decoration: underline;
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
  
</style>