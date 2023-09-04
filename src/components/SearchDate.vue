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
        <button @click.prevent="handleClick">Search</button>
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

</style>
