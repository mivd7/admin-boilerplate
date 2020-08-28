<template>
  <v-toolbar color="#324A71" fixed dark app>
    <v-toolbar-title class="ml-0 pl-3"> </v-toolbar-title>
    <v-toolbar-side-icon @click.stop="handleDrawerToggle"></v-toolbar-side-icon>
    <v-text-field
      flat
      solo-inverted
      prepend-icon="search"
      label="Search"
      class="hidden-sm-and-down"
    >
    </v-text-field>
    <v-spacer></v-spacer>
    <!-- <v-btn icon @click="handleFullScreen()">
      <v-icon>fullscreen</v-icon>
    </v-btn> -->
    <!-- <v-menu
      offset-y
      origin="center center"
      class="elelvation-1"
      :nudge-bottom="14"
      transition="scale-transition"
    >
      <v-btn icon flat slot="activator">
        <v-badge color="red" overlap>
          <span slot="badge">3</span>
          <v-icon medium>notifications</v-icon>
        </v-badge>
      </v-btn>
      <notification-list></notification-list>
    </v-menu> -->
    <p v-if="userInfo" style="margin-top: 15px;">{{ userInfo.name }}</p>
    <p v-else style="margin-top: 15px;">Anonymous</p>
    <v-menu
      offset-y
      origin="center center"
      :nudge-bottom="10"
      transition="scale-transition"
    >
      <v-btn icon large flat slot="activator">
        <v-avatar size="30px">
          <v-icon color="rgba(255,255,255,0.7)" large>person</v-icon>
        </v-avatar>
      </v-btn>
      <v-list class="pa-0">
        <v-list-tile
          v-for="(item, index) in items"
          :to="!item.href ? { name: item.name } : null"
          :href="item.href"
          @click="item.click"
          ripple="ripple"
          :disabled="item.disabled"
          :target="item.target"
          rel="noopener"
          :key="index"
        >
          <v-list-tile-action v-if="item.icon">
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-if="item.title === 'Logout'">
              <a @click="logout">{{ item.title }}</a>
            </v-list-tile-title>
            <v-list-tile-title v-else>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>
<script>
// import NotificationList from "@/components/widgets/list/NotificationList";
export default {
  name: "app-toolbar",
  components: {
    // NotificationList
  },
  created() {
    if(this.$keycloak) {
      this.userInfo = this.$keycloak.tokenParsed;
    }
  },
  data: () => ({
    items: [
      {
        icon: "account_circle",
        href: "/profile",
        title: "Profile",
        click: e => {
          console.log(e);
        }
      },
      {
        icon: "settings",
        href: "#",
        title: "Settings",
        click: e => {
          console.log(e);
        }
      },
      {
        icon: "fullscreen_exit",
        href: "#",
        title: "Logout",
        click: () => {
          this.logout();
        }
      }
    ],
    userInfo: null
  }),
  computed: {
    toolbarColor() {
      return this.$vuetify.options.extra.mainNav;
    }
  },
  methods: {
    handleDrawerToggle() {
      window.getApp.$emit("APP_DRAWER_TOGGLED");
    },

    logout() {
      setTimeout(this.$keycloak.logoutFn(), 1000);
    }
  }
};
</script>
