import Vue from "vue";
import PortalVue from "portal-vue";
import { ToastPlugin, ModalPlugin } from "bootstrap-vue";
import { VBTogglePlugin } from "bootstrap-vue";

import VueCompositionAPI from "@vue/composition-api";
import router from "./router";
import store from "./store";
import App from "./App.vue";

// Global Components
import "./global-components";

// 3rd party plugins
import "@/libs/portal-vue";
import "@/libs/toastification";

import commonmixins from "@/mixins/commonmixins";

Vue.mixin(commonmixins);

import Vuesax from "vuesax";
import "vuesax/dist/vuesax.css"; // Vuesax
Vue.use(Vuesax);

// BSV Plugin Registration
Vue.use(ToastPlugin);
Vue.use(ModalPlugin);
Vue.use(VBTogglePlugin);
// Composition API
Vue.use(VueCompositionAPI);

Vue.use(PortalVue);
// import core styles
require("@core/scss/core.scss");

import { setupCalendar, DatePicker } from "v-calendar";
setupCalendar({
  firstDayOfWeek: 2, // Monday
  masks: {
    L: "DD/MM/YYYY",
  },
});
Vue.component("v-date-picker", DatePicker);
// import assets styles
require("@/assets/scss/style.scss");
require("@/assets/scss/users.scss");
require("@/assets/scss/packings.scss");

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
