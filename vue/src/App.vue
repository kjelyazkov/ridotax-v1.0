<template>
  <div>
    <div class="flex gap-4">
      <router-link to="/">Home</router-link>
      <router-link to="/car">Car</router-link>
      <router-link to="/fee">Fee</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/register">Register</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
a {
  @apply text-blue-400;
}
</style>