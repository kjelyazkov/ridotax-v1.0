<template>
  <div>
    <the-top />
    <div
      class="w-8 h-8 bg-white/10 grid place-content-center m-4"
      @click="goBack"
    >
      <i class="fas fa-arrow-left"></i>
    </div>
    <div>
      <p>Id: {{ car.id }}</p>
      <p>Name: {{ car.name }}</p>
      <p>Model: {{ car.model }}</p>
      <p>Number: {{ car.number }}</p>
      <p>Color: {{ car.color }}</p>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
import TheTop from "../components/TheTop.vue";
import { useRouter } from "vue-router";
export default {
  name: "Car",
  components: { TheTop },
  props: ["id"],
  setup() {
    const store = useStore();
    const router = useRouter();
    const car = computed(() => store.getters["cars/showOne"]);

    function goBack() {
      router.push({ name: "home" });
    }

    return {
      car,
      goBack,
    };
  },
};
</script>
