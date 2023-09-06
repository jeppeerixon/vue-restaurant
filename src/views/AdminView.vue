<script setup lang="ts">
  import AdminLoginVue from '@/components/AdminLogin.vue';
</script>

<template>
    <div class="admin">
      <AdminLoginVue></AdminLoginVue>
    </div>
</template>
  
<style>
  @media (min-width: 1024px) {
    .admin {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
</style>