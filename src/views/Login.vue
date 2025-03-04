<template>
  
  <div class="flex-box">
    <TopBar />
    <LoginComponent />
    <FooterBar />
  </div>
  
</template>

<script>
import FooterBar from '@/components/FooterBar.vue';
import TopBar from '@/components/TopBar.vue';
import LoginComponent from '@/components/LoginComponent.vue';

export default {
  name: 'login-website',
  components: {
    TopBar,FooterBar,LoginComponent
  }
}
</script>

<style scoped>
.flex-box {
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Change from center to space-between */
  align-items: center;
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  position: relative;
  margin: 0;
  padding: 0;
}

</style>






