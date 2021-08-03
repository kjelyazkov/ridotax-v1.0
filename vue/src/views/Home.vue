<template>
  <div>
    <the-top />
    <stories />
  </div>
</template>

<script>
// import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import TheTop from "./../components/TheTop.vue";
import Stories from "./../components/Stories.vue";
export default {
  name: "Home",
  components: { TheTop, Stories },
  setup() {
    const store = useStore();
    const router = useRouter();
    // const token = computed(() => store.state.auth.token);
    // const profile = computed(() => store.state.profile);
    // const cars = computed(() => store.state.cars.cars);

    // store.dispatch("profile/get");
    // store.dispatch("cars/list");

    async function logout() {
      await store.dispatch("auth/logout");
      router.push({ name: "login" });
    }

    return {
      // token,
      logout,
      // profile,
      // cars,
    };
  },
};
</script>
