<template>
  <div>
    <the-top />
    <div>Home</div>
    <div>TOKEN: {{ token }}</div>
    <div
      @click="logout"
      class="
        text-white
        bg-red-400
        px-4
        py-1
        inline-block
        rounded-md
        m-4
        cursor-pointer
      "
    >
      LOGOUT
    </div>
    <div>
      <h1>Profile</h1>
      <div>
        <p>Name: {{ profile.name }}</p>
        <p>Email: {{ profile.email }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
import TheTop from "../components/TheTop.vue";
import { useRouter } from "vue-router";
export default {
  components: { TheTop },
  name: "Home",
  setup() {
    const store = useStore();
    const router = useRouter();
    const token = computed(() => store.state.auth.token);
    const profile = computed(() => store.state.profile);

    store.dispatch("profile/get");

    async function logout() {
      await store.dispatch("auth/logout");
      router.push({ name: "login" });
    }

    return {
      token,
      logout,
      profile,
    };
  },
};
</script>
