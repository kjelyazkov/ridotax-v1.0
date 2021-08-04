<template>
  <div>
    <the-top />
    <div
      class="
        w-10
        h-10
        bg-white/10
        grid
        place-content-center
        m-8
        rounded-sm
        cursor-pointer
      "
      @click="goBack"
    >
      <i class="fas fa-arrow-left"></i>
    </div>
    <div class="pl-24 pr-4 uppercase flex flex-col gap-4">
      <div>
        <h1 class="text-3xl font-bold">{{ car.name }}</h1>
        <h2 class="text-2xl text-gray-400">{{ car.model }}</h2>
      </div>
      <h2 class="text-4xl font-bold text-gray-700">{{ car.number }}</h2>
      <div class="w-full h-4 rounded-full" :class="`bg-${car.color}-400`"></div>
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
  setup(props) {
    const store = useStore();
    const router = useRouter();
    const car = computed(() => store.getters["cars/showOne"](props.id));

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
