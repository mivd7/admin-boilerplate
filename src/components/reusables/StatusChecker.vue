<template>
  <div class="check">
    <v-icon v-if="isTruthy">done</v-icon>
    <v-icon v-else>clear</v-icon>
  </div>
</template>

<script>
export default {
  name: "StatusChecker",
  props: {
    isTruthy: {
      type: Boolean,
      required: true
    }
  }
};
</script>

<style>
.check {
  cursor: pointer;
}
</style>
