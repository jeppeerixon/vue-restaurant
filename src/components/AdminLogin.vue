<template>
    <div class="admin">
      <div :class="{ 'hidden': isAdminLoggedIn }">
        <button @click="logInAsAdmin">Log In as Admin</button>
      </div>
      <AdminPage v-if="isAdminLoggedIn"></AdminPage>
    </div>
  </template>

<script setup lang="ts">
    import { ref } from 'vue';
    import AdminPage from './AdminPage.vue';

    const isAdminLoggedIn = ref(false);

    const logInAsAdmin = () => {
    console.log('Log In button clicked');
    isAdminLoggedIn.value = true;

    console.log('isAdminLoggedIn:', isAdminLoggedIn.value);
    };
</script>

<style scoped>
    button {
    background-color: #931621;
    color: azure;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    transition: background-color 0.3s;
    border-radius: 10px;
    margin:5px;
    width:12rem;
    }

    .hidden {
    display: none; /* Hide the button when it has the 'hidden' class */
  }

</style>