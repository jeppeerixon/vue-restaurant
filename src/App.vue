<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import StartPage from './components/StartPage.vue';
import FooterPage from './components/FooterPage.vue';
</script>

<template>
  <header>

    <div class="wrapper">
      <StartPage></StartPage>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
        <RouterLink to="/booking">Booking</RouterLink>
        <RouterLink to="/admin">Admin</RouterLink>

      </nav>
    </div>
  </header>
  <div class="routerView"><RouterView /></div>

  <footer>
    <FooterPage></FooterPage>
  </footer>

  
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  
}

.routerView {
  display: flex;
  align-items: center;
  justify-content: center;
}

nav a.router-link-exact-active {
  color: #28464B;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

footer {
  background-color: #28464B;
}
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
