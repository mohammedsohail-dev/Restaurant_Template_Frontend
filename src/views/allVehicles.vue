<template>
<div class = "container">
    <div class = "left-sidebar">
    <div class = "title">  RENT A CAR </div>
    <input class = "search" type="search" placeholder="Search for vehicles..." name="" id="">
    <div class = "slider">
        Max Price per day
    <v-slider color = "white" >
    </v-slider>
    </div>

    <div class = "slider">
        Number of seats
    <v-slider color = "white" >
    </v-slider>
    </div>

    <div class = "slider">
        Approximate Mileage
    <v-slider color = "white" >
    </v-slider>
    </div>


    <div class = "checkbox-total">
        4 Seater
        <input class = "checkbox" type = "checkbox" />
    </div>
    <div class = "checkbox-total">
        6 Seater
        <input class = "checkbox" type = "checkbox" />
    </div>
    <div class = "checkbox-total">
        8 Seater
        <input class = "checkbox" type = "checkbox" />
    </div>
    <div class = "checkbox-total">
        Petrol
        <input class = "checkbox" type = "checkbox" />
    </div>
    <div class = "checkbox-total">
        Diesel
        <input class = "checkbox" type = "checkbox" />
    </div>
    <div class = "checkbox-total">
        Electric
        <input class = "checkbox" type = "checkbox" />
    </div>


    </div>
    <div class = "content">
        <div class="selected-item">
                <img class ="selected-image" :src = "image" />
            <div class = "selected-details">
                <div class = "details-container" v-if="items.length > 0" >
                    <ul>
                        <li> {{ selecteditem.model }} </li>
                        <li> S class </li>
                        <li> Petrol </li>
                        <li> Montreal </li>
                        <li> Calender </li>
                        <li><h1> BOOK NOW </h1> </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class = "location-bar"> Vehicles from Montreal </div>
        <div class = "all-vehicles" >
            <div  class = "vehicle" v-for="item in items" :key="item" >
                <img class= "card-image" :src = "image" />
                <div class = "card-details">
                    <ul>
                    <li>{{ item.model}}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

  <script>
  import image from '../assets/mercedes.jpg';
  export default {
    name: 'vehicles-website',
    data() {
        return {
            items: [],
            selecteditem: null,
            errorMessage: '', // To store any error messages
            loading: false,
            image,
            checkbox:false
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
                this.selecteditem = this.items[0]
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

@import url('https://fonts.googleapis.com/css2?family=Kodchasan&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%; /* Ensure the body takes up the full height of the viewport */
  margin: 0; /* Explicitly remove margin */
  padding: 0; /* Explicitly remove padding */
  overflow: hidden; /* Prevent any unwanted scrollbars */
}

.container {
  background-image: linear-gradient(#030420, #cecece);
  background-size: cover;
  background-position: cover;
  height: 100vh; /* Full viewport height */
  width: 100vw; /* Full viewport width */
  flex-direction: row;
  display: flex;
}

.left-sidebar {
    margin: 0 1vw;
    height: 100vh;
    width: 20vw;
    min-width:300px ;
    background-image: linear-gradient(#0B0D16 10%,#1700E9 40%,#A7A7A7 100%);
    border-radius: 15px;
    box-shadow: -1px -1px 10px 5px #1f1f1f63;
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    padding: 20px;

}

.title{
    font-family: 'Kodchasan',sans-serif ;
    font-size: clamp(30px, 3vw, 40px);
    color: white;
}

.search {
    width:100%;
    height: clamp(25px,1vh,30px);
    border-radius: 15px;
    font-size: 100%;
    padding-left: 10px;
    font-family: 'Kodchasan',sans-serif ;
    background-color: white;
    margin-bottom: 10px;
}

.content{
    display: flex;
    flex-direction: column;
    height: 100vh;
    width:80vw;
}

.selected-item {
    display: flex;
    height:auto;
    width:auto;
    flex-direction: row;
    padding-left: 1vw;
}

.selected-image {
    height:clamp(400px,35vh,600px);
    width:clamp(600px,40vw,1000px);
    border-radius: 15px;
    box-shadow: -1px -1px 10px 5px #20202063;
    object-fit: cover; /* Maintain aspect ratio */
    object-position: center; /* Focus on the top portion of the image */
}

.selected-details {
    height:clamp(400px,35vh,600px);
    width:clamp(600px,37vw,1000px);
    border-radius: 15px;
    background-image: linear-gradient(#0B0D16 10%,#1700E9 40%,#A7A7A7 100%);
    margin: 0 1vw;
    box-shadow: -1px -1px 10px 5px #29292963;
    padding: 10px;
}

.all-vehicles {
    margin: 1vh 1vw;
    height: 100%;
    width: 78vw;
    background-image: linear-gradient(#1B1A1A, #D9D9D9);
    border-radius: 15px;
    box-shadow: -1px -1px 10px 5px #27272763;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    overflow:auto;

}

.details-container{
    padding: 1vw 1vh;
    margin: 5%;
    height: clamp(330px,33vh,600px);
    width: 33vw;
    border-radius: 15px;
    background-color: #e6e6e698;
    font-family: 'Kodchasan',sans-serif ;
    font-size: 23px;
}

.vehicle {
    margin-top:1%;
    margin-left: 60px;
    margin-right: -40px;
    height: 250px;
    width: 250px;
    background-color: #bbbbbb59;
    border-radius: 15px;
}
.slider {
margin-top: 1vh;
color: white;
font-family: 'Kodchasan',sans-serif ;
font-size: 20px;
}

.checkbox {
  color: white;
  transform: scale(1.5);
}
.checkbox-total {
    margin: 1vh;
    font-family: 'Kodchasan',sans-serif ;
    color: white;
}
.card-image {
    width:100%;
    height:70%;
    border-radius: 15px;
    margin-top: 0;
    min-height: 15vh; /* Add minimum height */
}

.card-details {
    width: 100%;
    height: 20%;
    min-height: 8vh; /* Ensure text doesn't clip */
    background-color: rgba(255, 255, 255, 0.932);
    border-radius: 15px;
    font-family: 'Kodchasan',sans-serif ;
    font-size: 15px;
    padding-left: 0.5vw;
    padding-top: 5px; /* Add padding for spacing */
}

ul {
    list-style-type: none;
}

.location-bar{
    width: 78vw;
    height: 5vh;
    background-image: linear-gradient(#1B1A1A, #040c839d);
    border-radius: 15px;
    margin-top: 1vh;
    margin-left:1vw;
    padding-left: 10px;
    font-family: 'Kodchasan',sans-serif ;
    color: white;
}







</style>






