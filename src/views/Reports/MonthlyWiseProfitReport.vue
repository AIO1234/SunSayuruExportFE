<template>
  <div class="mt-3 profits_overview">
    <!-- header details -->

    <b-row>
      <b-col lg="4" cols="12">
        <b-input-group class="input-group-merge form_input_styles_group">
          <b-input-group-prepend is-text>
            <feather-icon class="search_icon_color" icon="SearchIcon" />
          </b-input-group-prepend>
          <b-form-input
            type="search"
            class="form_input_styles"
            placeholder="Type here...."
          ></b-form-input>
        </b-input-group>
      </b-col>

      <b-col lg="4" class="text-right">
        <v-select
          class="year_selection"
          v-model="year"
          :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
          label="year"
          :options="years"
        >
        </v-select>
      </b-col>
      <b-col lg="4" class="text-right">
        <b-button variant="none" class="download_button"
          ><span class="download_button_color">Download</span></b-button
        >
      </b-col>
    </b-row>

    <!-- profit table -->

    <b-card class="mt-5">
      <b-table
        sticky-header=""
        responsive="sm"
        :items="monthlyprofit"
        :fields="fields"
      >
        <!-- action-->
        <template #cell(action)="data">
          <b-button
            variant="flat-none"
            @click="$router.push('/shipments_wise_monthly_profit_inner')"
          >
            <b-img
              width="17px"
              src="@/assets/images/icons/Group 117855.png"
            ></b-img>
          </b-button>
        </template>
      </b-table>
    </b-card>
  </div>
</template>
<script>
import vSelect from "vue-select";
import {
  BImg,
  BContainer,
  BModal,
  VBModal,
  BFormInput,
  BCard,
  BButton,
  BCol,
  BBadge,
  BAvatar,
  BTable,
  BRow,
  BCardText,
  BLink,
  BInputGroup,
  BInputGroupPrepend,
} from "bootstrap-vue";
export default {
  components: {
    vSelect,
    BImg,
    BContainer,
    BModal,
    VBModal,
    BFormInput,
    BCard,
    BButton,
    BCol,
    BBadge,
    BAvatar,
    BTable,
    BRow,
    BCardText,
    BLink,
    BInputGroup,
    BInputGroupPrepend,
  },
  data() {
    return {
      startdate: "",
      enddate: "",
      years: [
        {
          year: "2024",
        },
        {
          year: "2025",
        },
        {
          year: "2026",
        },
      ],
      year: {
        year: "2024",
      },
      fields: [
        {
          key: "month",
          label: "Month",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "td-style",
        },

        {
          key: "total_usd_income",
          label: "Total Income($)",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "td-style",
        },

        {
          key: "total_lkr_income",
          label: "Total Income(RS)",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "td-style",
        },

        {
          key: "total_expences",
          label: "Total Expenses",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "td-style",
        },

        {
          key: "total_airfreight_expences",
          label: "Total Air freight expenses",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "td-style",
        },
        {
          key: "total_additional_expences",
          label: "Total Additional Expenses",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "td-style",
        },
        {
          key: "total_supplier_expences",
          label: "Total Supplier Expenses",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "td-style",
        },
        {
          key: "status",
          label: "Status",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "td-style",
        },

        {
          key: "profit_amount",
          label: "Profit/Loss Amount",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "td-style",
        },

        {
          key: "action",
          label: "Action",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "td-style",
        },
      ],
      monthlyprofit: [
        {
          month: "January",
          total_usd_income: "230.00",
          total_lkr_income: "22230.00",
          total_expences: "60000",
          total_airfreight_expences: "30000.00",
          total_additional_expences: "20000.00",
          total_supplier_expences: "10000.00",
          status: "Profit",
          profit_amount: "40000.00",
        },
        {
          month: "January",
          total_usd_income: "230.00",
          total_lkr_income: "22230.00",
          total_expences: "60000",
          total_airfreight_expences: "30000.00",
          total_additional_expences: "20000.00",
          total_supplier_expences: "10000.00",
          status: "Profit",
          profit_amount: "40000.00",
        },
        {
          month: "January",
          total_usd_income: "230.00",
          total_lkr_income: "22230.00",
          total_expences: "60000",
          total_airfreight_expences: "30000.00",
          total_additional_expences: "20000.00",
          total_supplier_expences: "10000.00",
          status: "Profit",
          profit_amount: "40000.00",
        },
        {
          month: "January",
          total_usd_income: "230.00",
          total_lkr_income: "22230.00",
          total_expences: "60000",
          total_airfreight_expences: "30000.00",
          total_additional_expences: "20000.00",
          total_supplier_expences: "10000.00",
          status: "Profit",
          profit_amount: "40000.00",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
@import "@core/scss/vue/libs/vue-select.scss";
</style>
