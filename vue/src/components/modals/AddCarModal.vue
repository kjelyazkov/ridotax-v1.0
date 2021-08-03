<template>
  <div class="fixed inset-0 p-3 flex items-center justify-center">
    <div class="back-drop" @click="closeModal"></div>
    <form
      action="#"
      @submit.prevent="submit"
      class="base-form bg-gray-700 rounded-sm z-50"
    >
      <h1 class="!py-0 !text-left">Add Car</h1>
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
        <label for="color">Color</label>
        <select name="color" id="color" v-model="color" required>
          <option value="none" disabled>Select One</option>
          <option value="red">red</option>
          <option value="blue">blue</option>
          <option value="green">green</option>
        </select>
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
    </form>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { computed, inject } from "@vue/runtime-core";
export default {
  name: "AddCarModal",
  setup() {
    // Handle Form
    const color = ref("none");
    const name = ref("");
    const model = ref("");
    const number = ref("");
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
    function submit() {
      alert("yes");
    }

    // Close modal
    const mitt = inject("mitt");
    function closeModal() {
      mitt.emit("close-modal");
    }

    return {
      color,
      name,
      model,
      number,
      canSubmit,
      submit,
      closeModal,
    };
  },
};
</script>

<style>
</style>