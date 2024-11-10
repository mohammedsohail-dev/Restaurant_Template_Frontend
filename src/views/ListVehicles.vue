<template>
    <div class="topbar">
      <div class="title-top-bar">CarConnect</div>
    </div>
    <div class="columns">
      <div class="left-bar">
        <div class="left-item">4 seaters</div>
        <div class="left-item">6 seaters</div>
        <div class="left-item">8 seaters</div>
      </div>
      <div class="middle-bar">
        <div class="cards" v-for="item in items" :key="item">
          <div class="card">
            <div> {{item.model}} </div>
            <div> {{item.version}} </div>
            <div> {{item.fuel_type}} </div>
            <div> {{item.dropOff_location}} </div>
            <div> {{item.price}}</div>
          </div>
        </div>
      </div>
      <div class="right-bar"></div>
    </div>
  </template>

  <script>
  export default {
    name: 'vehicles-website',
    data() {
        return {
            items: [],
            errorMessage: '', // To store any error messages
            loading: false // To manage loading state
        };
    },
    mounted() {
        this.fetchVehicles();
    },
    methods: {
        async fetchVehicles() {
            this.loading = true; // Set loading to true while fetching
            this.errorMessage = ''; // Clear any previous error messages

            const token = localStorage.getItem('accessToken');
            console.log(`Bearer ${token}`)
            try {
                const response = await fetch('http://localhost:9090/api/listvehicles?page=1&no=10', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json' // Include Content-Type header
                    }
                });

                if (!response.ok) {
                    // Handle HTTP errors
                    const errorData = await response.json();
                    throw new Error(errorData.message || 'Failed to fetch vehicles');
                }

                const data = await response.json();
                this.items = data.content;
                console.log(data);
            } catch (error) {
                // Catch any errors and set the error message
                this.errorMessage = error.message;
                console.error('Error fetching vehicles:', error); // Log error for debugging
            } finally {
                this.loading = false; // Set loading to false after fetching
            }
        }
    }
}

  </script>

  <style>
  .topbar {
    height: 60px;
    background-color: black;
    width: 100%;
    color: white;
    position: fixed;
    top:0%;
    left: 0%;
    font-family: "K2D", serif;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
    font-size: 20px;
    display: flex;
    align-items: center;
    padding-left: 30px;
  }

  .columns {
    display: flex;
    height:100vh;
    position:fixed;
    top:60px;

  }

  .left-bar{
    width: 10vw;
    min-width: 130px;
    background-color: rgb(195, 150, 255);
    padding : 2vh;
  }

  .left-item {
    font-family: "K2D",serif;
    overflow: hidden;
    padding: 1vh;
  }

  .right-bar {
    width:20vw;
    background-color: rgb(153, 0, 255);
  }

  .middle-bar {
    display:flex;
    width:70vw;
    flex-direction: column;
    align-items: center;
    padding: clamp(70px,5vh, 150px);
    min-width: 550px;
    background-color: rgb(255, 255, 255);
    overflow-y: auto;
  }

  .card{
    width: clamp(400px,50vw,900px);
    height: clamp(50px,10vh,100px);
    background-color: rgb(156, 156, 156);
    margin:2vh;
    display: flex; /* Enable flexbox */
    align-items: center; /* Center items vertically */
    justify-content: center; /* Center items horizontally */
    text-align: center; /* Center text within the card */
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%; /* Ensure the body takes up the full height of the viewport */
}


  </style>



