<template>
  <div class="admin">
    <h1>This is the admin view!</h1>
    <ul>
      <li v-for="booking in bookings" :key="booking._id">
        {{ booking.date }} - {{ booking.time }} - Guests: {{ booking.numberOfGuests }}
        <button @click="editBooking(booking._id)">Edit</button>
        <button @click="deleteBooking(booking._id)">Delete</button>
      </li>
    </ul>
  </div>
</template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  import type { IBooking } from "../models/IBooking"

  
  const bookings = ref<IBooking[]>([]);
  
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

  const editBooking = (_id: string) => {
    console.log("klickade ändra bokning", _id);
  }

  const deleteBooking = (_id: string) => {
    console.log("klickade radera bokning", _id);
  }
  </script>