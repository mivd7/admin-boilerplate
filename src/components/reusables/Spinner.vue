<template>
  <v-layout row justify-space-around>
    <v-flex xs3>
      <p>{{ label }}</p>
      <v-progress-circular
        :indeterminate="indeterminate"
        :rotate="rotate"
        :size="size"
        :value="value"
        :width="width"
        color="light-blue"
      ></v-progress-circular>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "Spinner",
  props: {
    labelProp: {
      type: String
    }
  },
  data: () => ({
    indeterminate: true,
    rotate: 0,
    size: 32,
    value: 8,
    width: 4,
    label: ""
  }),
  created() {
    if (this.labelProp) {
      this.label = this.labelProp;
    }
  }
};
</script>

<style></style>
