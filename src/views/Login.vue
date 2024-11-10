<template>
  <div class ="flex-box">
    <div class = "image">
      <LoginImage />
      </div>
      <div class = "login-form">
    <form  @submit.prevent = "login">
      <div class = "title" > CARCONNECT </div>
      <div class = "text_username"> Username </div>
      <div><input class = "username" v-model = "username" /> </div>
      <div class = "text_password"> Password </div>
      <div><input class = "password" type = "password" v-model = "password" /></div>
      <div><button type = "submit" class = "button"> Login </button> </div>

    </form>
  </div>
    </div>

</template>

<script>
import LoginImage from '../components/LoginImage-Component.vue';

export default {
    name: 'login-website',
    components: {
      LoginImage
    },
    data() {
      return {
        username:'',
        password:''
      };
    },
    methods: {
    async login() {
  try {
    const formData = new FormData();
    const user = {
      email: this.username,
      password: this.password,
    };

    formData.append('user', new Blob([JSON.stringify(user)], { type: 'application/json' }));
    // JSON is not application/json (wierd)
    const response = await fetch('http://localhost:9090/api/login', {
      method: 'POST',
      body: formData
    });

    const data = await response.json();
    console.log(data.accessToken); // Handle the response data
    localStorage.setItem('accessToken', data.accessToken);
  } catch (error) {
    console.error('Error:', error);
  }
}
    }}
</script>

<style>


.flex-box {
  display: flex;
  flex-direction: row; /* Horizontal alignment */
  justify-content: center; /* Centers content horizontally */
  align-items: center; /* Centers content vertically */
  height: 100vh; /* Full viewport height */
  background-color: #f4f4f4;
}

.image {
  margin-right: 20px; /* Space between image and form */
}

.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.title {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
}

.text_username,
.text_password {
  margin: 10px 0;
  font-weight: bold;
  color: #555;
}

.username,
.password {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 15px;
  font-size: 16px;
}

.button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}

.button:hover {
  background-color: #0056b3;
}
</style>



