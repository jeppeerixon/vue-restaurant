<script setup lang="ts">
  import AdminPage from '@/components/AdminPage.vue';
</script>

<template>
    <div class="admin">
      <AdminPage></AdminPage>
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