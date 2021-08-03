<template>
  <div class="flex gap-4 p-4 overflow-x-scroll no-scroll">
    <div
      class="
        stories
        bg-gray-800
        text-2xl
        grid
        place-content-center
        cursor-pointer
      "
      @click="showAddCarModal"
    >
      <i class="fas fa-plus"></i>
    </div>
    <div
      v-for="car in cars"
      :key="car.id"
      class="stories py-1 px-2"
      @click="goToCar(car.id)"
    >
      <p class="truncate">{{ car.name }}</p>
      <p class="truncate">{{ car.model }}</p>
      <p class="truncate">{{ car.number }}</p>
    </div>

    <template v-if="showCarModal">
      <teleport to="body">
        <transition name="show-modal">
          <add-car-modal />
        </transition>
      </teleport>
    </template>
  </div>
</template>

<script>
import { computed, inject, ref } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
export default {
  name: "Stories",
  setup() {
    const store = useStore();
    const router = useRouter();

    // Handle Modal
    const showCarModal = ref(false);
    const mitt = inject("mitt");
    mitt.on("close-modal", () => {
      showAddCarModal();
    });
    function showAddCarModal() {
      showCarModal.value = !showCarModal.value;
    }

    //Go to car
    function goToCar(id) {
      router.push({ name: "car", params: { id: parseInt(id) } });
    }

    // Get Cars
    store.dispatch("cars/list");
    const cars = computed(() => store.state.cars.cars);

    return {
      cars,
      showAddCarModal,
      showCarModal,
      goToCar,
    };
  },
};
</script>

<style>
</style>