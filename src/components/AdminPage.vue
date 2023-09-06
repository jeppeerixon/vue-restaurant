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
          <button @click="deleteBooking(booking)" class="delete-button">Delete</button>
        </div>
        <div v-if="editMode[index]" class="edit-form">
          <input v-model="bookingUpdateData.date" type="date" placeholder="Updated Date">
          <input v-model="bookingUpdateData.time" type="time" placeholder="Updated Time">
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
    fetchBookings();
  });

  const editBooking = async (booking: IBooking, index: number) => {
  try {
    booking.date = bookingUpdateData.value.date;
    booking.time = bookingUpdateData.value.time;
    booking.numberOfGuests = bookingUpdateData.value.numberOfGuests;
    editMode.value[index] = false;
    booking.id = booking._id
    await axios.put(`https://school-restaurant-api.azurewebsites.net/booking/update/${booking._id}`, booking);
    console.log(booking);
  } catch (error) {
    console.error(error);
  }
}

  const deleteBooking = async (booking: IBooking) => {
    console.log("klickade radera bokning", booking._id);
    try {
      await axios.delete(`https://school-restaurant-api.azurewebsites.net/booking/delete/${booking._id}`);
    } catch (error) {
      console.error(error);
    }
    fetchBookings();
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