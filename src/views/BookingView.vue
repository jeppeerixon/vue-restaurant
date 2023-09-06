<script setup lang="ts">
  import SearchDate from '@/components/SearchDate.vue';
  import SearchResult from '@/components/SearchResult.vue'
  import SearchConfirm from '@/components/SearchConfirm.vue'
  import { onMounted, ref, type Ref } from 'vue'
  import type { INewBooking } from '@/models/INewBooking';
  import type { IBooking } from '@/models/IBooking';
  import axios from 'axios';


  const bookings = ref<IBooking[]>([]);
  const full18 = ref<boolean>(false);
  const full21 = ref<boolean>(false);
  const stepTracker: Ref<object> = ref({
    step2: false,
    step3: false
  })
  const bookingData: Ref<INewBooking> = ref({
    restaurantId: '64f5fcb4264e4838c0d69d35',
    date: '',
    numberOfGuests: 0,
    time: '',
    customer: {
      name: '',
      lastname: '',
      phone: '',
      email: ''
    }
  })

  const postNewBooking = async (newBooking: INewBooking) => {
    try {
      await axios.post('https://school-restaurant-api.azurewebsites.net/booking/create/', newBooking);
      alert('booking successfull')
    } catch (error) {
      console.error(error);
      alert('booking ERROR check console')
    }
  }

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

  const checkIfFull = (fetchedData: IBooking[], date: string, time: string) => {
    const tempList = []
    fetchedData.forEach((element: IBooking) => {
      if (element.date === date && element.time === time) {
        tempList.push(element)
      }
    });
    if (tempList.length >= 15) {
      return true
    } else {
      return false
    }
  };

  const handleSubmitDate = (date: string, guests: number) => {
    full18.value = checkIfFull(bookings.value, date, '18:00')
    full21.value = checkIfFull(bookings.value, date, '21:00')
    bookingData.value.date = date;
    bookingData.value.numberOfGuests = guests;
    stepTracker.value.step2 = true;
  }

  const handleSubmitSearch = (time: string) => {
    bookingData.value.time = time;
    stepTracker.value.step3 = true;
  }

  const handleSubmitConfirm = (name: string, last: string, phone: string, email: string) => {
    bookingData.value.customer.name = name;
    bookingData.value.customer.lastname = last;
    bookingData.value.customer.phone = phone;
    bookingData.value.customer.email = email;
    postNewBooking(bookingData.value)
  }

  onMounted(() => {
    fetchBookings();
  });

</script>

<template>
  <div class="booking">
    <SearchDate @user-input="handleSubmitDate"/>
    <SearchResult v-if="stepTracker.step2" :picked-date="bookingData.date" @user-select="handleSubmitSearch"/>
    <SearchConfirm v-if="stepTracker.step3" @user-confirm="handleSubmitConfirm"/>
    <!-- 3.5 GPDR checkbox -->
    <!-- 4. Step Bokningsbekräftelse -->
  </div>
</template>
  
<style scoped>
  .booking {
    margin-top: 1rem;
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  @media (min-width: 1024px) {
  .booking {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
}
</style>