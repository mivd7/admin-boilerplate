<template>
  <div class="bulb-container">
    <div v-if="isTruthy" class="bulb enabled"></div>
    <div v-else class="bulb disabled"></div>
  </div>
</template>

<script>
export default {
  name: "OnOffBulb",
  props: {
    isTruthy: {
      type: Boolean,
      required: true
    }
  }
};
</script>
<style>
.bulb {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: grey;
}

.enabled {
  background-color: green;
}

.disabled {
  background-color: rgb(233, 30, 99);
}
</style>
