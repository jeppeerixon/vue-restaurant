<template>
    <div class="search">
        <h1>Step 1 - Search Day</h1>
        <form id="searchDate" class="searchDate">
        <label for="totalGuests">Number of guests</label>
        <select name="guests" id="guests">
            <option value="">?</option>
            <option value=1>1</option>
            <option value=2>2</option>
            <option value=3>3</option>
            <option value=4>4</option>
            <option value=5>5</option>
            <option value=6>6</option>
        </select>

        <label for="start">Select Date:</label>
        <input type="date" id="date" name="date" value="2023-09-25" min="2023-09-25" max="2023-12-31" />
        <button>Search</button>
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
