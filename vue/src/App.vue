<template>
  <div>
    <router-view />
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
  input {
    @apply bg-gray-400 text-gray-900 outline-none placeholder-shown:bg-gray-700 placeholder-shown:text-white placeholder-transparent px-2 py-1 rounded-sm;
  }
  button[type="submit"] {
    @apply bg-indigo-700/50 text-white/50 py-2 rounded-sm uppercase tracking-wider;
  }
}
</style>