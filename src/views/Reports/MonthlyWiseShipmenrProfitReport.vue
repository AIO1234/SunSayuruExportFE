<template>
  <div class="profits_overview">
    <!-- header details -->

    <b-button variant="none" class="back_button mt-1" @click="$router.back()">
      <feather-icon icon="ChevronLeftIcon" size="14" class="text-dark" />
      &nbsp;
      <span class="text">Back</span>
    </b-button>
    <div class="mt-3">
      <span class="inner_view_title">January 2024 - Profit & Loss Report</span>
    </div>

    <div class="mt-5"></div>
    <div class="mt-5"></div>
    <b-row>
      <b-col lg="3" cols="12">
        <!-- space only for mobile -->
        <div class="mobile_only_view">
          <div class="mt-2"></div>
        </div>
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
      <b-col lg="3">
        <!-- space only for mobile -->
        <div class="mobile_only_view">
          <div class="mt-2"></div>
        </div>
        <v-date-picker v-model="startdate" is-required>
          <template v-slot="{ inputValue, inputEvents }">
            <b-input-group class="input-group-merge form_input_styles_group">
              <b-input-group-prepend is-text>
                <b-img src="@/assets/images/icons/Vector (1).png"></b-img>
              </b-input-group-prepend>
              <b-form-input
                class="bg-white border px-2 py-1 rounded form_input_styles_date_1"
                :value="inputValue"
                v-on="inputEvents"
                placeholder="Start Date"
              ></b-form-input>
            </b-input-group>
          </template> </v-date-picker
      ></b-col>
      <b-col lg="3">
        <!-- space only for mobile -->
        <div class="mobile_only_view">
          <div class="mt-2"></div>
        </div>
        <v-date-picker v-model="enddate" is-required>
          <template v-slot="{ inputValue, inputEvents }">
            <b-input-group class="input-group-merge form_input_styles_group">
              <b-input-group-prepend is-text>
                <b-img src="@/assets/images/icons/Vector (1).png"></b-img>
              </b-input-group-prepend>
              <b-form-input
                class="bg-white border px-2 py-1 rounded form_input_styles_date"
                :value="inputValue"
                v-on="inputEvents"
                placeholder="End Date"
              ></b-form-input>
            </b-input-group>
          </template>
        </v-date-picker>
      </b-col>

      <b-col lg="3" class="text-right">
        <!-- space only for mobile -->
        <div class="mobile_only_view">
          <div class="mt-2"></div>
        </div>
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
        :items="shipmentprofit"
        :fields="fields"
      >
      </b-table>
    </b-card>
  </div>
</template>
<script>
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
      fields: [
        {
          key: "shipment_no",
          label: "Shipment No",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "td-style",
        },

        {
          key: "eta",
          label: "ETA",
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
          key: "status",
          label: "Status",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "td-style",
        },
        {
          key: "profitamount",
          label: "Profit/Loss Amount",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "td-style",
        },
      ],
      shipmentprofit: [
        {
          shipment_no: "SXC-12344",
          eta: "2024.09.9",
          total_usd_income: "230.00",
          total_lkr_income: "22230.00",
          total_expences: "3000.00",
          status: "Profit",
          profitamount: "10000",
        },
        {
          shipment_no: "SXC-12344",
          eta: "2024.09.9",
          total_usd_income: "230.00",
          total_lkr_income: "22230.00",
          total_expences: "3000.00",
          status: "Profit",
          profitamount: "10000",
        },
        {
          shipment_no: "SXC-12344",
          eta: "2024.09.9",
          total_usd_income: "230.00",
          total_lkr_income: "22230.00",
          total_expences: "3000.00",
          status: "Profit",
          profitamount: "10000",
        },
        {
          shipment_no: "SXC-12344",
          eta: "2024.09.9",
          total_usd_income: "230.00",
          total_lkr_income: "22230.00",
          total_expences: "3000.00",
          status: "Profit",
          profitamount: "10000",
        },
      ],
    };
  },
};
</script>
