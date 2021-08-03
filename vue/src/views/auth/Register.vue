<template>
  <div>
    <form action="#" @submit.prevent="submit" class="base-form">
      <h1>RIDOTAX</h1>
      <div class="field">
        <label for="email">Email</label>
        <input type="email" id="email" placeholder="Email" v-model="email" />
      </div>
      <div class="field">
        <label for="name">Name</label>
        <input type="text" id="name" placeholder="name" v-model="name" />
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
        <label for="password_confirmation">Password Again</label>
        <input
          type="password"
          id="password_confirmation"
          placeholder="Password Again"
          v-model="password_confirmation"
        />
      </div>
      <div class="field">
        <button
          type="submit"
          :disabled="!canSubmit"
          :class="canSubmit ? '!bg-indigo-700 !text-white' : ''"
        >
          register
        </button>
      </div>
      <div class="field">
        <div class="flex text-sm justify-between items-center px-4">
          <p class="font-thin capitalize">already have an account?</p>
          <router-link to="/login" class="text-blue-400 font-bold"
            >Sign In</router-link
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
  name: "Register",
  setup() {
    const store = useStore();
    const router = useRouter();

    const email = ref("");
    const name = ref("");
    const password = ref("");
    const password_confirmation = ref("");

    const canSubmit = computed(() => {
      if (
        email.value.length > 0 &&
        name.value.length > 0 &&
        password.value.length > 0 &&
        password_confirmation.value.length > 0
      ) {
        return true;
      } else {
        return false;
      }
    });

    async function submit() {
      await store.dispatch("auth/register", {
        email: email.value,
        name: name.value,
        password: password.value,
        password_confirmation: password_confirmation.value,
      });
      router.push({ name: "login" });
    }

    return {
      email,
      name,
      password,
      password_confirmation,
      canSubmit,
      submit,
    };
  },
};
</script>


