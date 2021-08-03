<template>
  <div>
    <form action="#" @submit.prevent="submit" class="base-form">
      <h1>RIDOTAX</h1>
      <div class="field">
        <label for="email">Email</label>
        <input type="email" id="email" placeholder="Email" v-model="email" />
      </div>
      <div class="field">
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          v-model="password"
        />
      </div>
      <div class="field">
        <button
          type="submit"
          :disabled="!canSubmit"
          :class="canSubmit ? '!bg-indigo-700 !text-white' : ''"
        >
          login
        </button>
      </div>
      <div class="field">
        <div class="flex text-sm justify-between items-center px-4">
          <p class="font-thin capitalize">create an account now!</p>
          <router-link to="/register" class="text-blue-400 font-bold"
            >Sign Up</router-link
          >
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  name: "Login",
  setup() {
    const store = useStore();
    const router = useRouter();

    const email = ref("");
    const password = ref("");

    const canSubmit = computed(() => {
      if (email.value.length > 0 && password.value.length > 0) {
        return true;
      } else {
        return false;
      }
    });

    async function submit() {
      await store.dispatch("auth/login", {
        email: email.value,
        password: password.value,
      });
      router.push({ name: "home" });
    }

    return {
      email,
      password,
      canSubmit,
      submit,
    };
  },
};
</script>


