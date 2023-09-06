<template>
  <div class="contact">
    <div>
      <h2>Get in touch!</h2>
      <p>Call 070 123 45 67 or</p>
      <p>Email admin@laitalia.com</p>
    </div>
    <div>
      <h2>Where to find us?</h2>
      <p>Odengatan 28</p>
      <p>113 51, Stockholm</p>
      <img :src="gmaps">
    </div>
  </div>
</template>

<script setup lang="ts">
  import gmaps from '../assets/gmapslocation.jpg'

</script>

<style scoped>
@media (min-width: 1024px) {
  .contact {
    min-height: 100vh;
    max-width: 150px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    gap: 1rem;
    align-items: center;
  }

  div {
    width: 280px;
  }

  img {
    margin-top: 1rem;
  }
}
</style>
