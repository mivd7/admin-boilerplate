<template>
  <v-layout row class="align-center layout px-4 pt-4 app--page-header">
    <div class="page-header-left">
      <h3 class="pr-3">{{ title }}</h3>
    </div>

    <v-spacer></v-spacer>
    Recently visited:
    <!-- <div v-for="breadcrumb in breadcrumbs" :key="breadcrumb.href"><router-link :to="breadcrumb.href">{{breadcrumb.text}}</router-link></div> -->
    <v-breadcrumbs
      divider="-"
      :items="
        unique(
          breadcrumbs
            .filter(breadcrumb => breadcrumb.text !== this.$route.name)
            .reverse()
        )
      "
    >
    </v-breadcrumbs>
    <div class="page-header-right"></div>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      breadcrumbs: []
    };
  },
  created() {
    this.title = this.$route.name;
    this.breadcrumbs.push(...this.breadcrumbs, {
      text: this.$route.name,
      disabled: false,
      href: this.$route.path
    });
  },
  watch: {
    $route: function() {
      this.title = this.$route.name;
      if (this.breadcrumbs.length <= 3) {
        this.breadcrumbs.push({
          text: this.$route.name,
          disabled: false,
          href: this.$route.path
        });
      } else {
        this.breadcrumbs.shift();
        this.breadcrumbs.push({
          text: this.$route.name,
          disabled: false,
          href: this.$route.path
        });
      }
    }
  },
  methods: {
    unique(a) {
      return Array.from(new Set(a));
    }
  }
};
//   {
//     disabled: boolean
//     exact: boolean
//     href: string
//     link: boolean
//     text: string | number
//     to: string | object
//   }
</script>
