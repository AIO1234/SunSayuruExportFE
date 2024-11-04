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

      <!-- Content Right -->

      <b-col
        class="payments pt-5"
        lg="12"
        sm="12"
        md="12"
        cols="12"
        v-if="$route.name === 'outgoingpayments'"
      >
        <div>
          <b-tabs
            pills
            align="left"
            active-nav-item-class="bg-warning border-warning"
            value="1"
          >
            <b-tab
              :active="activesuplierpayments"
              @click="changeTab1()"
              title="Supplier Payments"
              title-item-class="supplier_button"
            >
              <template #title>
                <span class="text">Supplier Payments</span>
              </template>
              <br /><br />
            </b-tab>

            <b-tab
              :active="activeairfreightpayments"
              @click="changeTab2()"
              title="Air Freight Payments"
              title-item-class="airfreight_button margin_class_tab"
            >
              <template #title>
                <span class="text">Air Freight Payments</span>
              </template>
              <br /><br />
            </b-tab>

            <b-tab
              :active="activeaditionalpayments"
              @click="changeTab3()"
              title="Additional Payments"
              title-item-class="additional_button  margin_class_tab"
            >
              <template #title>
                <span class="text">Additional Payments</span>
              </template>
              <br /><br />
            </b-tab>
          </b-tabs>
        </div>
      </b-col>
    </b-row>

    <div
      v-if="
        activesuplierpayments === true && $route.name === 'outgoingpayments'
      "
    >
      <SupliePayments />
    </div>

    <div
      v-else-if="
        activeairfreightpayments === true && $route.name === 'outgoingpayments'
      "
    >
      <AirfreightPayments />
    </div>

    <div
      v-else-if="
        activeaditionalpayments === true && $route.name === 'outgoingpayments'
      "
    >
      <AdditionalPayments />
    </div>
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

      activesuplierpayments: false,
      activeairfreightpayments: false,
      activeaditionalpayments: false,
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
  created() {
    this.initiateData();
  },
  methods: {
    // initiate data

    initiateData() {
      console.log('store.getters.getselectedongoingpaymenttab');
      // if selected store tab is suplier payment
      if (
        !store.getters.getselectedongoingpaymenttab !== null &&
        store.getters.getselectedongoingpaymenttab === "Suplier_Payment_Tab"
      ) {
        this.activesuplierpayments = true;
        this.activeairfreightpayments = false;
        this.activeaditionalpayments = false;
      }
      // if selected store tab is airfreight payment
      else if (
        !store.getters.getselectedongoingpaymenttab !== null &&
        store.getters.getselectedongoingpaymenttab === "Airfreight_Payment_Tab"
      ) {
        this.activeairfreightpayments = true;
        this.activesuplierpayments = false;
        this.activeaditionalpayments = false;
      }
      // if selected store tab is additional payment
      else if (
        !store.getters.getselectedongoingpaymenttab !== null &&
        store.getters.getselectedongoingpaymenttab === "Additional_Payment_Tab"
      ) {
        this.activeaditionalpayments = true;
        this.activesuplierpayments = false;
        this.activeairfreightpayments = false;
      } else {
        this.activesuplierpayments = true;
        this.activeairfreightpayments = false;
        this.activeaditionalpayments = false;
      }
    },

    changeTab1() {
      this.activesuplierpayments = true;
      this.activeairfreightpayments = false;
      this.activeaditionalpayments = false;

      // store selected payment type to store

      store.commit("SET_SELECTED_ONGOING_PAYMENT_TAB", "Suplier_Payment_Tab");
    },
    changeTab2() {
      this.activeairfreightpayments = true;
      this.activesuplierpayments = false;
      this.activeaditionalpayments = false;

      // store selected payment type to store

      store.commit(
        "SET_SELECTED_ONGOING_PAYMENT_TAB",
        "Airfreight_Payment_Tab"
      );
    },
    changeTab3() {
      this.activeaditionalpayments = true;
      this.activesuplierpayments = false;
      this.activeairfreightpayments = false;

      // store selected payment type to session storage

      store.commit(
        "SET_SELECTED_ONGOING_PAYMENT_TAB",
        "Additional_Payment_Tab"
      );
    },
  },
};
</script>
<style lang="scss">
@import "@core/scss/vue/libs/vue-select.scss";
</style>
