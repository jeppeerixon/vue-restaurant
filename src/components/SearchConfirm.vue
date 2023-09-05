<script setup lang="ts">
import { ref, type Ref } from 'vue';


  const emits = defineEmits<{ (e: "userConfirm", name: string, phone: string, email: string): void }>();
  const handleClick = () => {
      emits("userConfirm", inputName.value, inputPhone.value, inputEmail.value);
  };

  const inputName: Ref<string> = ref('')
  const inputPhone: Ref<string> = ref('')
  const inputEmail: Ref<string> = ref('')
  const gdprCheck: Ref<boolean> = ref(false)

</script>

<template>
    <div class="confirmBooking">
      <h1>Step 3 - Confirm booking</h1>
      <form id="confirmDate" class="confirmDate">
        <label for="userInfo">Name</label>
        <input required type="text" v-model="inputName">

        <label for="userInfo">Phone</label>
        <input type="text" v-model="inputPhone">

        <label for="userInfo">Email</label>
        <input type="text" v-model="inputEmail">

        <div>
          <label for="userInfo">GDPR</label>
          <input type="checkbox" v-model="gdprCheck">
        </div>

        <button type="submit" @click.prevent="handleClick" :disabled="!gdprCheck">Confirm</button>
      </form>
    </div>
</template>

<style scoped>
  .confirmBooking {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .confirmDate {
    list-style: none;
    display: flex;
    flex-direction: column;
  }

  .confirmDate div {
    display: flex;
    justify-content: space-between;
  }

  button {
    margin-top: 1rem;
  }

  h1 {
        color: azure;
    }

  form {
      color: azure;
  }

  /* Lazy chat gpt css */

  /* Style the form container */
.confirmDate {
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
}

/* Style form labels */
.confirmDate label {
  display: block;
  margin-bottom: 5px;
}

/* Style form inputs */
.confirmDate input[type="text"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

input[type="checkbox"] {
  width: 1.5rem;
  accent-color: #931621;
}

/* Style the submit button */
.confirmDate button {
  background-color: #931621;
  color: azure;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

/* Style the submit button on hover */
.confirmDate button:hover {
  background-color: #a73c45;
}

button:disabled {
  color: darkgrey;
  background-color: lightslategray;
}


</style>