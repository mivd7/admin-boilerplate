<template>
  <v-card>
    <v-card-title>
      <span class="headline">Please Confirm</span>
    </v-card-title>
    <v-card-text>
      Are you sure you want to {{ action }} this {{ name }}?
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="blue darken-1" flat @click="handleConfirm">
        Yes
      </v-btn>
      <v-btn color="red darken-1" flat @click="handleCancel">
        No
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "ConfirmDialog",
  props: {
    name: {
      type: String,
      required: true
    },
    action: {
      type: String,
      required: true
    }
  },
  methods: {
    handleConfirm() {
      this.$emit("confirmed");
    },
    handleCancel() {
      this.$emit("cancelled");
    }
  }
};
</script>

<style></style>
