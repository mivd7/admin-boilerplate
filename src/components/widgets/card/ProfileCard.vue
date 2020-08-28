<template>
  <v-card>
    <v-img src="/static/avatar/bigdizz.jpg" height="390">
      <v-layout column class="media ma-0">
        <v-card-title>
          <v-btn dark icon>
            <v-icon>chevron_left</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn dark icon class="mr-3">
            <v-icon>edit</v-icon>
          </v-btn>
          <v-btn dark icon>
            <v-icon>more_vert</v-icon>
          </v-btn>
        </v-card-title>
        <v-spacer></v-spacer>
        <v-card-title class="yellow--text pl-5 pt-5">
          <div class="display-1 pl-5 pt-5">{{ userInfo.name }}</div>
        </v-card-title>
      </v-layout>
    </v-img>
    <v-list two-line class="pa-0">
      <v-list-tile href="#">
        <v-list-tile-action>
          <v-icon color="indigo">phone</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>0906-0588</v-list-tile-title>
          <v-list-tile-sub-title>Mobile</v-list-tile-sub-title>
        </v-list-tile-content>
        <v-list-tile-action>
          <v-icon>chat</v-icon>
        </v-list-tile-action>
      </v-list-tile>
      <v-divider inset></v-divider>
      <v-list-tile href="#">
        <v-list-tile-action>
          <v-icon color="indigo">mail</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ userInfo.email }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-divider inset></v-divider>
      <v-list-tile href="#">
        <v-list-tile-action>
          <v-icon color="indigo">location_on</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Singel 326A</v-list-tile-title>
          <v-list-tile-sub-title>Amsterdam</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: "ProfileCard",
  props: ["userInfo"]
};
</script>
