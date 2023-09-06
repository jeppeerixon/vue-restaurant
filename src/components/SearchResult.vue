<script setup lang="ts">

  const props = defineProps<{
    pickedDate?: string
    full18?: boolean
    full21?: boolean
  }>()

  const emits = defineEmits<{ (e: "userSelect", time: string): void }>();

  const handleClick = (e: Event) => {
      emits("userSelect", (e.target as HTMLInputElement).value);
  };

</script>

<template>
    <div class="searchResult">
      <h1>Step 2 - Select time</h1>
      <h3>{{ props.pickedDate }}</h3>
      <ul class="resultList">
        <li v-if="full18"><button disabled>NO TIME</button></li> 
        <li v-else><button @click.prevent="handleClick" value="18:00">18:00</button></li>
        <li v-if="full21"><button disabled>NO TIME</button></li>
        <li v-else><button @click.prevent="handleClick" value="21:00">21:00</button></li>        
      </ul>
      <!-- v-if / v-else Inga lediga tider, måste göras med fetch om listan är längre än 15 == fullt! -->
    </div>
</template>

<style scoped>

h3 {
  color: azure;
}
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
    background-color: #931621; /* Set the background color */
    color: #fff; /* Set the text color */
    cursor: pointer; /* Show a pointer cursor on hover */
  }

  /* Style the button on hover */
  button:hover {
    background-color: #a73c45; /* Change the background color on hover */
  }

  /* Style the button when clicked */
  button:active {
    background-color: #a73c45; /* Change the background color when clicked */
  }

</style>