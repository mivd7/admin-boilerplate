<template>
  <v-container grid-list-xl fluid>
    <v-layout row>
      <v-flex>
        <v-card>
          <profile-card :userInfo="this.$keycloak.tokenParsed"></profile-card>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ProfileCard from "@/components/widgets/card/ProfileCard";

export default {
  name: "Profile",
  components: { ProfileCard }
};
</script>

<style></style>
