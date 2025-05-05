<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue';
</script>

<template>
  <header>
    <HeaderComponent />
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
</style>