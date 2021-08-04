<template>
  <div class="max-w-screen-sm mx-auto">
    <router-view />

    <div class="bg-blue-400"></div>
    <div class="bg-green-400"></div>
    <div class="bg-red-400"></div>
    <div class="bg-indigo-400"></div>
    <div class="bg-yellow-400"></div>
  </div>
</template>

<style lang="scss">
body {
  @apply bg-gray-900 text-white;
}
a {
  @apply text-blue-400;
}

.base-form {
  @apply p-4 flex flex-col gap-4;
  h1 {
    @apply text-center font-bold text-2xl py-6;
  }
}

.active {
  @apply bg-indigo-700 text-white;
}

.field {
  @apply flex flex-col gap-1;
  label {
    @apply text-[13px] ml-1 text-gray-200;
  }
  input,
  select {
    @apply bg-gray-400 text-gray-900 outline-none placeholder-shown:bg-gray-700 placeholder-shown:text-white placeholder-transparent px-2 py-1 rounded-sm;
  }
  select {
    @apply py-2;
  }
  button[type="submit"] {
    @apply bg-indigo-700/50 text-white/50 py-2 rounded-sm uppercase tracking-wider;
  }
}

.stories {
  @apply w-[100px] h-[125px] rounded-md bg-gray-700 flex-shrink-0;
}

.back-drop {
  @apply fixed inset-0 bg-black/10 z-40;
}

.show-modal-enter-active,
.show-modal-leave-active {
  @apply transition-all ease-out duration-300;
}
.show-modal-enter-from,
.show-modal-leave-to {
  @apply scale-95 opacity-0;
}
.no-scroll::-webkit-scrollbar {
  display: none;
}
</style>