<template>
    <img :src = "image" />

</template>

<script>
import image from  '../assets/login-screen.jpg';

export default {
    name: 'LoginImage',
    data() {
        return{
            image
        };
    }
};

</script>

<style>
.image{
    height:100%;
    width: 75%;
    position:fixed;
    left:0%;
    top:0%;
}

</style>