<template>
  <div class="fixed inset-0 p-3 flex items-center justify-center">
    <div class="back-drop" @click="closeModal"></div>
    <form
      action="#"
      @submit.prevent="submit"
      class="base-form bg-gray-700 rounded-sm z-50"
    >
      <h1 class="!py-0 !text-left">Edit Car</h1>
      <div class="field">
        <label for="name">Name</label>
        <input type="text" name="name" v-model="name" />
      </div>
      <div class="field">
        <label for="model">Model</label>
        <input type="text" name="model" v-model="model" />
      </div>
      <div class="field">
        <label for="number">Number</label>
        <input type="text" name="number" v-model="number" />
      </div>
      <div class="field">
        <label for="color">Choose:</label>
        <div class="flex gap-2 p-2">
          <div v-for="(avColor, index) in availableColors" :key="index">
            <label
              for="color"
              class="w-8 h-8 block"
              :class="[
                `bg-${avColor}-400`,
                avColor == color[0] ? 'ring ring-white' : '',
              ]"
              @click="$event.target.firstChild.click()"
            >
              <input
                type="checkbox"
                v-model="color"
                :value="avColor"
                @change="checkSelectedColor"
                class="hidden"
              />
            </label>
          </div>
        </div>
      </div>
      <div class="field">
        <button
          type="submit"
          :disabled="!canSubmit"
          :class="canSubmit ? '!bg-indigo-700 !text-white' : ''"
        >
          Edit
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { computed, inject } from "@vue/runtime-core";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
export default {
  name: "EditCarModal",
  setup() {
    const store = useStore();
    const route = useRoute();

    // Handle Form
    const availableColors = ref(["red", "green", "blue", "indigo", "yellow"]);
    const color = ref([]);
    const name = ref("");
    const model = ref("");
    const number = ref("");

    const car = computed(() => store.getters["cars/showOne"](route.params.id));
    color.value = [car.value.color];
    name.value = car.value.name;
    model.value = car.value.model;
    number.value = car.value.number;

    const canSubmit = computed(() => {
      if (
        color.value !== "none" &&
        name.value.length > 0 &&
        model.value.length > 0 &&
        number.value.length > 0
      ) {
        return true;
      } else {
        return false;
      }
    });

    function checkSelectedColor() {
      if (color.value.length > 1) {
        color.value.shift();
      }
    }

    async function submit() {
      await store.dispatch("cars/update", {
        color: color.value[0],
        name: name.value,
        model: model.value,
        number: number.value,
        car_id: route.params.id,
      });
      closeModal();
    }

    // Close modal
    const mitt = inject("mitt");
    function closeModal() {
      mitt.emit("close-modal");
    }

    return {
      availableColors,
      color,
      checkSelectedColor,
      name,
      model,
      number,
      canSubmit,
      submit,
      closeModal,
      car,
    };
  },
};
</script>

<style>
</style>