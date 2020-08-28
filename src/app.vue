<template src="./app.html"></template>
<script>
import AppDrawer from "@/components/AppDrawer";
import AppToolbar from "@/components/AppToolbar";
import AppFab from "@/components/AppFab";
import PageHeader from "@/components/PageHeader";
import ThemeSettings from "@/components/ThemeSettings";

export default {
  components: {
    AppDrawer,
    AppFab,
    AppToolbar,
    PageHeader,
    ThemeSettings
  },
  data: () => ({
    expanded: true,
    rightDrawer: false,
    snackbar: {
      show: false,
      text: "",
      color: ""
    }
  }),
  computed: {},
  created() {
    window.getApp = this;
  },
  methods: {
    openThemeSettings() {
      this.$vuetify.goTo(0);
      this.rightDrawer = !this.rightDrawer;
    }
  }
};
</script>

<style lang="stylus" scoped>
.setting-fab
	top:50%!important;
	right:0;
	border-radius:0
.page-wrapper
	min-height:calc(100vh - 64px - 50px - 81px );
</style>
