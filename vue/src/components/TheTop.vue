<template>
  <div class="flex gap-4 items-center justify-between p-4">
    <router-link
      :to="{ name: 'home' }"
      class="text-2xl font-bold first-letter:text-indigo-600"
      >RIDOTAX</router-link
    >
    <div class="flex gap-2">
      <div class="w-10 h-10 grid place-content-center bg-white/10 rounded-sm">
        <i class="fas fa-cog"></i>
      </div>
      <div class="w-10 h-10 grid place-content-center bg-white/10 rounded-sm">
        <i class="fas fa-bell"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheTop",
};
</script>

<style>
</style>