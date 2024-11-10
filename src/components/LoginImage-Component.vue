<template>
    <img :src = "image" />

</template>

<script>
import image from  '../assets/login-screen.png';

export default {
    name: 'loginimage-component',
    data() {
        return{
            image
        };
    }
};

</script>

<style>


</style>