<script setup lang="ts">
    import { ref, type Ref } from 'vue'

    const selectedGuests: Ref<number> = ref(0)
    const todaysDate: string = new Date().toJSON().slice(0, 10);
    const selectedDate = ref(todaysDate)

    const emits = defineEmits<{ (e: "userInput", date: string, guests: number): void }>();

    const handleClick = () => {
        emits("userInput", selectedDate.value, selectedGuests.value);
    };

</script>

<template>
    <div class="search">
        <h1>Step 1 - Search Day</h1>

        <form id="searchDate" class="searchDate">
        <label for="totalGuests">Number of guests</label>
        <select name="guests" id="guests" v-model="selectedGuests">
            <option disabled value=0>?</option>
            <option value=1>1</option>
            <option value=2>2</option>
            <option value=3>3</option>
            <option value=4>4</option>
            <option value=5>5</option>
            <option value=6>6</option>
        </select>

        <label for="start">Select Date:</label>
        <input type="date" id="date" name="date" :min=todaysDate  max="2023-12-31" v-model="selectedDate"/>
        <button @click.prevent="handleClick" :disabled="selectedGuests == 0" >Search</button>
        </form>
    </div>
</template>

<style scoped>
    .search {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .searchDate {
        display: flex;
        flex-direction: column;
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

    /* Lazy chat gpt css styling*/
    
    select {
    /* Add your desired styles here */
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #fff;
    color: #333;
    }

    /* Style the options within the select element */
    select option {
    /* Add your desired styles here */
    background-color: #fff;
    color: #333;
    font-size: 16px;
    padding: 8px;
    }

    /* Style the selected option when the dropdown is open */
    select option:checked {
    /* Add your desired styles here */
    background-color: #007bff;
    color: #fff;
    }

    input[type="date"] {
  /* Remove default arrow icon in some browsers */
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  cursor: pointer; /* Show a pointer cursor on hover */
  padding: 8px; /* Add some padding for spacing */
  border: 1px solid #ccc; /* Add a border */
  border-radius: 4px; /* Add rounded corners */
  font-size: 16px; /* Set the font size */
}

/* Style when the input is focused */
input[type="date"]:focus {
  outline: none; /* Remove the default focus outline */
  border-color: #007bff; /* Change the border color on focus */
}

/* Style the date picker calendar icon (not supported in all browsers) */
input[type="date"]::-webkit-calendar-picker-indicator {
  color: #007bff; /* Change the calendar icon color */
  font-size: 16px; /* Adjust the font size of the icon */
  cursor: pointer; /* Show a pointer cursor on hover */
}

button {
  padding: 10px 20px; /* Add padding to the button */
  font-size: 16px; /* Set the font size */
  border: none; /* Remove the default button border */
  border-radius: 4px; /* Add rounded corners to the button */
  background-color: #931621; /* Set the background color */
  color: azure; /* Set the text color */
  cursor: pointer; /* Show a pointer cursor on hover */
}

/* Style the button on hover */
button:hover {
  background-color: #ac3b44; /* Change the background color on hover */
}

/* Style the button when clicked */
button:active {
  background-color: #ac3b44; /* Change the background color when clicked */
}

button:disabled {
  color: darkgrey;
  background-color: lightslategray;
}

</style>
