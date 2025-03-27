<template>
  <div>
    <TopBar />
    <UserDashboard />
    <FooterBar />
  </div>
</template>

<script>
import FooterBar from '@/components/FooterBar.vue';
import TopBar from '@/components/TopBar.vue';
import UserDashboard from '@/components/UserDashboard.vue';

export default {
  components: {
    UserDashboard,TopBar,FooterBar
  }
};
</script>

<style scoped>
/* Add any styles specific to the view here */
</style>
