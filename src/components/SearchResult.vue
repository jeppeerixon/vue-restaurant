<script setup lang="ts">

  const props = defineProps<{
    pickedDate?: string
  }>()

</script>

<template>
    <div class="searchResult">
      <h1>Step 2 - Select time</h1>
      <h3>{{ props.pickedDate }}</h3>
      <ul class="resultList">
        <li><button>18:00</button></li> <!-- tid i knappen! && visa datumet tydligt -->
        <li><button>20:00</button></li>
      </ul>
      <!-- v-if / v-else Inga lediga tider -->
    </div>
</template>

<style scoped>
  .searchResult {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .resultList {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding-left: 0;
  }

  h1 {
        color: azure;
    }

  form {
      color: azure;
  }

  li {
    color: azure;
  }

  /* Lazy chat gpt css styling*/

  button {
    padding: 10px 20px; /* Add padding to the button */
    font-size: 16px; /* Set the font size */
    border: none; /* Remove the default button border */
    border-radius: 4px; /* Add rounded corners to the button */
    background-color: #007bff; /* Set the background color */
    color: #fff; /* Set the text color */
    cursor: pointer; /* Show a pointer cursor on hover */
  }

  /* Style the button on hover */
  button:hover {
    background-color: #0056b3; /* Change the background color on hover */
  }

  /* Style the button when clicked */
  button:active {
    background-color: #004192; /* Change the background color when clicked */
  }

</style>