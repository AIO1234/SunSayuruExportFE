<template>
  <div>
    <b-row
      v-if="$route.meta.breadcrumb || $route.meta.pageTitle"
      class="content-header"
    >
      <!-- Content Left -->
      <b-col class="content-header-left mb-2" lg="6" md="12">
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
        class="payments"
        lg="6"
        md="12"
        v-if="$route.name === 'outgoingpayments'"
      >
        <b-container>
          <div>
            <b-tabs
              pills
              align="right"
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
        </b-container>
      </b-col>
    </b-row>

    <div v-if="tab1 === true && $route.name === 'outgoingpayments'">
      <div class="web_only_view mt-1 pt-1"></div>
      <SupliePayments />
    </div>

    <div v-else-if="tab2 === true && $route.name === 'outgoingpayments'">
      <div class="web_only_view mt-1 pt-1"></div>
      <AirfreightPayments />
    </div>

    <div v-else-if="tab3 === true && $route.name === 'outgoingpayments'">
      <div class="web_only_view mt-1 pt-1"></div>
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
      tab1: false,
      tab2: false,
      tab3: false,
      activesuplierpayments: false,
      activeairfreightpayments: false,
      activeaditionalpayments: false,
    };
  },
  components: {
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
    this.tab1 = true;
    this.activesuplierpayments = true;
  },
  methods: {
    changeTab1() {
      this.tab1 = true;
      this.tab2 = false;
      this.tab3 = false;
    },
    changeTab2() {
      this.tab2 = true;
      this.tab1 = false;
      this.tab3 = false;
    },
    changeTab3() {
      this.tab3 = true;
      this.tab2 = false;
      this.tab1 = false;
    },
  },
};
</script>
<style lang="scss">
@import "@core/scss/vue/libs/vue-select.scss";
</style>
