<template>
    <div class="confirmBooking">
      <h1>Step 3 - Confirm booking</h1>
      <form id="confirmDate" class="confirmDate">
        <label for="totalGuests">Name</label>
        <input type="text">

        <label for="totalGuests">Phone</label>
        <input type="text">

        <label for="totalGuests">Email</label>
        <input type="text">

        <button>Confirm</button>
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

  button {
    margin-top: 1rem;
  }

</style>