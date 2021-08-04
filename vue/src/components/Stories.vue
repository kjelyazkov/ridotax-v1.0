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
        hover:bg-gray-800/50
        hover:text-indigo-600
        text-indigo-400
      "
      @click="showAddCarModal"
    >
      <i class="fas fa-plus"></i>
    </div>
    <div
      v-for="car in cars"
      :key="car.id"
      class="
        stories
        py-2
        px-2
        cursor-pointer
        hover:bg-gray-700/75
        flex flex-col
        justify-between
        items-start
      "
      @click="goToCar(car.id)"
    >
      <div class="uppercase flex flex-col w-full">
        <div
          class="w-full h-2 rounded-full"
          :class="`bg-${car.color}-400`"
        ></div>
        <p class="truncate font-bold">{{ car.name }}</p>
        <p class="truncate">{{ car.model }}</p>
      </div>
      <div class="flex items-center gap-2 p-1" v-if="car.id != 13">
        <div
          class="w-1 h-1 bg-yellow-500 rounded-full"
          v-if="car.id == 8"
        ></div>
        <div class="w-1 h-1 bg-red-500 rounded-full" v-if="car.id == 5"></div>
        <p class="text-yellow-500 block" v-if="car.id == 8">soon</p>
        <p class="text-red-500 block" v-if="car.id == 5">expired</p>
      </div>
      <p class="truncate font-bold text-gray-500 uppercase">{{ car.number }}</p>
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