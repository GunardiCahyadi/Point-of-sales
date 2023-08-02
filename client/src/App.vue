<script>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container">
      <!-- Cart Icon -->
      <RouterLink to="/order">
        <a class="navbar-brand" href="#">
          <i class="fas fa-shopping-cart"></i>
        </a>
      </RouterLink>
      <RouterLink to="/">
        <a class="navbar-brand" href="#">
          <i class="MENU">MENU</i>
        </a>
      </RouterLink>
    </div>
  </nav>
  <RouterView></RouterView>
</template>

<style></style>
