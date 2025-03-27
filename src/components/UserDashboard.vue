<template>
  <div class="container-fluid dashboard">
    <h1 class="my-4 text-center">Reservations Dashboard</h1>
    <div class="row">
      <div class="col-md-4 mb-4" v-for="reservation in reservations" :key="reservation.id">
        <div class="card h-100">
          <div class="card-body">
            <h2 class="card-title">{{ reservation.title }}</h2>
            <p class="card-text">{{ reservation.description }}</p>
            <p class="card-text"><strong>Date:</strong> {{ reservation.date }}</p>
            <p class="card-text"><strong>Status:</strong> {{ reservation.status }}</p>
            <button class="btn btn-primary" @click="updateReservation(reservation.id)">Update</button>
            <button class="btn btn-danger" @click="deleteReservation(reservation.id)">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reservations: [
        { id: 1, title: 'Reservation 1', description: 'Description for reservation 1', date: '2023-10-01', status: 'Confirmed' },
        { id: 2, title: 'Reservation 2', description: 'Description for reservation 2', date: '2023-10-02', status: 'Pending' },
        // ...add more reservations as needed...
      ]
    };
  },
  methods: {
    updateReservation(id) {
      // Implement the update logic here
      console.log(`Update reservation with id: ${id}`);
    },
    deleteReservation(id) {
      // Implement the delete logic here
      console.log(`Delete reservation with id: ${id}`);
      this.reservations = this.reservations.filter(reservation => reservation.id !== id);
    }
  }
};
</script>

<style scoped>
.dashboard {
  padding: 20px;
  background-color: #e9ecef;
  min-height: 100vh;
  overflow-y: auto; /* Make the dashboard scrollable */
}

.card {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.card:hover {
  transform: scale(1.05);
}

.card-title {
  margin-top: 0;
  font-size: 1.5em;
  color: #007bff;
}

.card-text {
  margin: 5px 0;
  color: #6c757d;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}

.btn-danger {
  background-color: #dc3545;
  border-color: #dc3545;
}
</style>
