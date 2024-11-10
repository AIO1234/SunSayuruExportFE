<template>
  <div>
    <b-row
      v-if="$route.meta.dcrumb || $route.meta.pageTitle"
      class="content-header"
    >
      <!-- Content Left -->
      <b-col class="content-header-left mb-2" lg="12" md="12" sm="12" cols="12">
        <b-row class="breadcrumbs-top">
          <b-col cols="12">
            <h2 class="content-header-title float-left pr-1 mb-0">
              {{ $route.meta.pageTitle }}
            </h2>
            <div class="breadcrumb-wrapper">
              <b-breadcrumb>
                <b-breadcrumb-item to="/">
                  <feather-icon
                    icon="HomeIcon"
                    size="16"
                    class="align-text-top"
                  />
                </b-breadcrumb-item>
                <b-breadcrumb-item
                  v-for="item in $route.meta.breadcrumb"
                  :key="item.text"
                  :active="item.active"
                  :to="item.to"
                >
                  {{ item.text }}
                </b-breadcrumb-item>
              </b-breadcrumb>
            </div>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import SupliePayments from "@/views/PaymentManagement/OutgoingPayments/SuplierPayments/index.vue";
import AirfreightPayments from "@/views/PaymentManagement/OutgoingPayments/AirfreightPayments/index.vue";
import AdditionalPayments from "@/views/PaymentManagement/OutgoingPayments/AdditionalPayments/index.vue";
import VBToggle from "bootstrap-vue";
import {
  BSidebar,
  BImg,
  BBreadcrumb,
  BBreadcrumbItem,
  BContainer,
  BModal,
  VBModal,
  BRow,
  BTab,
  BTabs,
  BCol,
  BDropdown,
  BDropdownItem,
  BButton,
} from "bootstrap-vue";
import Ripple from "vue-ripple-directive";
import store from "@/store";

export default {
  directives: {
    Ripple,
    "v-b-toggle": VBToggle,
    "b-modal": VBModal,
  },
  data() {
    return {
      modalTitle: "Add Category",
      emitedData: {},
    };
  },
  components: {
    BContainer,
    SupliePayments,
    AirfreightPayments,
    AdditionalPayments,
    BImg,
    BModal,
    BTab,
    BTabs,
    VBModal,
    BBreadcrumb,
    BSidebar,
    BBreadcrumbItem,
    BRow,
    BCol,
    BDropdown,
    BDropdownItem,
    BButton,
  },
};
</script>
<style lang="scss">
@import "@core/scss/vue/libs/vue-select.scss";
</style>
