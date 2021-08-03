<template>
  <div class="flex gap-4 p-4">
    <div class="stories text-2xl grid place-content-center" @click="addCar">
      <i class="fas fa-plus"></i>
    </div>
    <div v-for="car in cars" :key="car.id" class="stories">
      {{ car.name }}
    </div>

    <teleport to="body">
      <transition name="show-modal">
        <add-car-modal v-show="showCarModal" />
      </transition>
    </teleport>
  </div>
</template>

<script>
import { computed, inject, ref } from "@vue/runtime-core";
// import { useRouter } from 'vue-router';
import { useStore } from "vuex";
export default {
  name: "Stories",
  setup() {
    const store = useStore();
    // const router = useRouter();

    // Handle Modal
    const showCarModal = ref(false);
    const mitt = inject("mitt");
    mitt.on("close-modal", () => {
      addCar();
    });
    function addCar() {
      showCarModal.value = !showCarModal.value;
    }

    // Get Cars
    const cars = computed(() => store.state.cars.cars);
    store.dispatch("cars/list");

    return {
      cars,
      addCar,
      showCarModal,
    };
  },
};
</script>

<style>
</style>