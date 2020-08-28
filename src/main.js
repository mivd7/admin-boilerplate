import Vue from "vue";
import "./plugins/vuetify";
import App from "./app.vue";
import router from "./router/";
import store from "./store/index";
import "./registerServiceWorker";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "font-awesome/css/font-awesome.css";
import VeeValidate from "vee-validate";
// import VueKeyCloak from "@dsb-norge/vue-keycloak-js";

Vue.config.productionTip = false;

// const keyCloakOptions = {
//   config: "/keycloak.json",
//   logout: "*",
//   onReady: () => {
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
//   }
// };

// Vue.use(VueKeyCloak, keyCloakOptions);
Vue.use(VeeValidate);