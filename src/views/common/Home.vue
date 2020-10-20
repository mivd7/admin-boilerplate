<template>
  <v-container grid-list-xl fluid>
    <v-layout row>
      <v-flex>
        <v-card>
          <div class="text-content">
            <h1 v-if="userInfo">Hi {{ userInfo.name }}!</h1>
            <p v-else>If a user was logged in you could see the user info here</p>
          </div>
          <v-btn @click="logout">Logout</v-btn>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      message: "",
      userInfo: null
    };
  },
  methods: {
    logout() {
      this.$keycloak.logoutFn();
    }
  },
  created() {
    if(this.$keycloak) {
      this.userInfo = this.$keycloak.tokenParsed;
    }
  },
};
</script>

<style>
.text-content {
  padding: 25px;
}

h1 {
  font-weight: "bold";
}

a {
  text-decoration: none;
}
</style>
