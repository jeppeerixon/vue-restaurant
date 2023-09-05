<script setup lang="ts">
  import SearchDate from '@/components/SearchDate.vue';
  import SearchResult from '@/components/SearchResult.vue'
  import SearchConfirm from '@/components/SearchConfirm.vue'
  import { ref, type Ref } from 'vue'

  const stepTracker: Ref<object> = ref({
    step2: false,
    step3: false
  })

  const bookingData: Ref<object> = ref({
    restaurantId: '98asd6a87sduoi897sda',
    date: '',
    numberOfGuests: 0,
    time: '',
    name: '',
    phone: '',
    email: ''
  })

  const handleSubmitDate = (date: string, guests: number) => {
    console.log(date)
    console.log(guests)
    bookingData.value.date = date;
    bookingData.value.numberOfGuests = guests;
    stepTracker.value.step2 = true;
  }

  const handleSubmitSearch = (time: string) => {
    console.log(time)
    bookingData.value.time = time;
    stepTracker.value.step3 = true;
  }

  const handleSubmitConfirm = (name: string, phone: string, email: string) => {
    console.log(name, phone, email)
    bookingData.value.name = name;
    bookingData.value.phone = phone;
    bookingData.value.email = email;
  }

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