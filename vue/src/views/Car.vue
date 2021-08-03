<template>
  <div>
    <the-top />
    <div>Car: {{ id }}</div>
  </div>
</template>

<script>
import TheTop from "../components/TheTop.vue";
export default {
  name: "Car",
  components: { TheTop },
  props: ["id"],
};
</script>
