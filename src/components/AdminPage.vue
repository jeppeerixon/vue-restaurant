<template>
  <div class="admin">
    <h1 class="admin-title">Admin View</h1>
    <ul class="booking-list">
      <li v-for="(booking, index) in bookings" :key="booking._id" class="booking-item">
        <div class="booking-details">
          <span>Date: {{ booking.date }}</span>
          <span>Time: {{ booking.time }}</span>
          <span>Guests: {{ booking.numberOfGuests }}</span>
        </div>
        <div class="booking-actions">
          <button @click="toggleEditMode(index)" class="edit-button">Edit</button>
          <button @click="deleteBooking(booking._id)" class="delete-button">Delete</button>
        </div>
        <div v-if="editMode[index]" class="edit-form">
          <!-- Add your edit form fields here -->
          <input v-model="bookingUpdateData.date" type="text" placeholder="Updated Date">
          <input v-model="bookingUpdateData.time" type="text" placeholder="Updated Time">
          <input v-model="bookingUpdateData.numberOfGuests" type="text" placeholder="Updated Guests">
          <button @click="editBooking(booking, index)" class="update-button">Update</button>
        </div>
      </li>
    </ul>
  </div>
</template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  import type { IBooking } from "../models/IBooking";
  import type { IBookingUpdate } from "../models/IBookingUpdate";

  const bookings = ref<IBooking[]>([]);
  const editMode = ref<boolean[]>([]);
  const bookingUpdateData = ref<IBookingUpdate>({
  date: '',
  time: '',
  numberOfGuests: 0,
}); 

  const toggleEditMode = (index: number) => {
    editMode.value[index] = !editMode.value[index];
};

  const fetchBookings = async () => {
    try {
      const response = await axios.get(
        'https://school-restaurant-api.azurewebsites.net/booking/restaurant/64f5fcb4264e4838c0d69d35'
      );
      bookings.value = response.data;
      console.log(bookings.value);
    } catch (error) {
      console.error(error);
    }
  };
  
  onMounted(() => {
    // Fetch bookings when the component is mounted
    fetchBookings();
  });

  const editBooking = async (booking: IBooking, index: number) => {
  try {
    const updatedBooking: IBookingUpdate = {
      date: bookingUpdateData.value.date,
      time: bookingUpdateData.value.time,
      numberOfGuests: bookingUpdateData.value.numberOfGuests,
    };
    
    // Send a PUT request to update the booking
    await axios.put(`https://school-restaurant-api.azurewebsites.net/booking/update/${booking._id}`, updatedBooking);
    
    // Update the local state and exit edit mode
    booking.date = bookingUpdateData.value.date;
    booking.time = bookingUpdateData.value.time;
    booking.numberOfGuests = bookingUpdateData.value.numberOfGuests;
    editMode.value[index] = false;
  } catch (error) {
    console.error(error);
  }
}

  const deleteBooking = (_id: string) => {
    console.log("klickade radera bokning", _id);
  }
  </script>

<style scoped>
.admin {
  text-align: center;
  padding: 20px;
  display: flex;
  flex-direction: column;
}

li {
  display: flex;
  flex-direction: column;
  padding: 1rem;
}

span {
  margin: 5px;
}

.admin-title {
  font-size: 24px;
  margin-bottom: 20px;
  color: azure;
}

.booking-list {
  list-style: none;
  padding: 0;
}

.booking-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  padding: 10px;
  color: azure;
}

.booking-details {
  flex: 1;
}

.booking-actions {
  display: flex;
  gap: 10px;
}

.edit-button,
.delete-button {
  background-color: #931621;
  color: azure;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  transition: background-color 0.3s;
  border-radius: 10px;
  margin:5px;
}

.edit-button:hover,
.delete-button:hover {
  background-color: #ac3b44;
}
</style>