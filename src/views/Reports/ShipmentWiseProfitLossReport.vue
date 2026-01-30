<template>
  <div class="mt-3 profits_overview">
    <!-- header details -->

    <b-row>
      <b-col lg="3">
        <!-- space only for mobile -->
        <div class="mobile_only_view">
          <div class="mt-2"></div>
        </div>
        <!-- <v-date-picker v-model="startdate" is-required>
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
          </template>
        </v-date-picker> -->
      </b-col>
      <b-col lg="3">
        <!-- space only for mobile -->
        <div class="mobile_only_view">
          <div class="mt-2"></div>
        </div>
        <!-- <v-date-picker v-model="enddate" is-required>
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
        </v-date-picker> -->
      </b-col>
      <b-col lg="3">
        <!-- <b-button @click="shipmntProfit()" variant="none" class="search_button"
          ><span class="search_text">Search</span></b-button
        > -->
      </b-col>
      <b-col lg="3">
        <!-- <b-button @click="clear()" variant="none" class="search_button"
          ><span class="search_text">Clear</span></b-button
        > -->
      </b-col>
      <b-col lg="3" class="text-right">
        <!-- space only for mobile -->
      </b-col>
    </b-row>

    <!-- profit table -->

    <b-card class="mt-5">
      <b-table
        sticky-header=""
        responsive="sm"
        :items="details"
        :fields="fields"
        per-page="10"
        :current-page="currentPage"
      >
        <template #cell(amount)="data">
          {{ getPriceWithOutCurrency(data.value) }}
        </template>
        <template #cell(weight)="data">
          {{ data.value }}
        </template>
        <template #cell(seafood_additional_cost)="data">
          {{ getPriceWithOutCurrency(data.value) }}
        </template>
        <template #cell(buyer_total_amount)="data">
          {{ getPriceWithOutCurrency(data.value) }}
        </template>
        <template #cell(profit_loss_amount)="data">
          {{
            getPriceWithOutCurrency(
              data.item.buyer_total_amount - data.item.total_seafood_cost,
            )
          }}
        </template>
      </b-table>
      <!-- pagination -->
      <b-row>
        <b-col lg="4"></b-col>
        <b-col lg="8">
          <div class="mt-1">
            <b-pagination
              v-model="currentPage"
              :total-rows="details.length"
              per-page="100"
              first-text="First"
              prev-text="Prev"
              next-text="Next"
              last-text="Last"
            ></b-pagination>
          </div>
        </b-col>
      </b-row>
      <b-container>
        <b-row>
          <b-col lg="6" cols="6"
            ><span class="totaltext ml-1">Total Weight</span></b-col
          >
          <b-col lg="3" cols="6"
            ><span class="totaltext ml-0">
              {{ getWeight(detailslist.total_weight) }} kg</span
            ></b-col
          >
        </b-row>

        <b-row>
          <b-col lg="6" cols="6"
            ><span class="totaltext ml-1">Total Additional Cost </span></b-col
          >
          <b-col lg="3" cols="6"
            ><span class="totaltext ml-0">
              {{
                detailslist.total_additional_costs
                  ? getPrice(detailslist.total_additional_costs)
                  : getPrice(0)
              }}</span
            ></b-col
          >
        </b-row>

        <b-row>
          <b-col lg="6" cols="6"
            ><span class="totaltext ml-1">Total Material Cost </span></b-col
          >
          <b-col lg="3" cols="6"
            ><span class="totaltext ml-0">
              {{
                detailslist.total_material_costs
                  ? getPrice(detailslist.total_material_costs)
                  : getPrice(0)
              }}</span
            ></b-col
          >
        </b-row>

        <b-row>
          <b-col lg="6" cols="6"
            ><span class="totaltext ml-1">Total Airfreight Cost </span></b-col
          >
          <b-col lg="3" cols="6"
            ><span class="totaltext ml-0">
              {{
                detailslist.total_material_costs
                  ? getPrice(detailslist.total_airfreight_costs)
                  : getPrice(0)
              }}</span
            ></b-col
          >
        </b-row>
      </b-container>
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
  BPagination,
} from "bootstrap-vue";
import reportApi from "@/Api/Modules/reports";
export default {
  components: {
    BPagination,
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
      currentPage: 1,
      // startdate: "",
      // enddate: "",
      details: [],
      detailslist: [],
      additional_cost_per_kg: "",
      fields: [
        {
          key: "seafoodtype",
          label: "Seafood type",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "custom-cell-padding",
        },

        {
          key: "quality",
          label: "Quality",
          sortable: true,
          // tdClass: "custom-cell-padding",
        },
        {
          key: "grading",
          label: "Grading (Kg)",
          sortable: true,
          // tdClass: "custom-cell-padding",
        },

        {
          key: "weight",
          label: "Weight(Kg)",
          sortable: true,
          // tdClass: "custom-cell-padding",
        },
        {
          key: "amount",
          label: "Seafood Total cost(Rs)",
          sortable: true,
          // tdClass: "custom-cell-padding",
        },
        {
          key: "seafood_additional_cost",
          label: "Seafood additional cost(Rs)",
          sortable: true,
          // tdClass: "custom-cell-padding",
        },
        {
          key: "buyer_total_amount",
          label: "Buyer total amount(Rs)",
          sortable: true,
          // tdClass: "custom-cell-padding",
        },

        {
          key: "profit_loss_amount",
          label: "Profit / Loss (Rs)",
          sortable: true,
          // tdClass: "custom-cell-padding",
        },
      ],
    };
  },

  async created() {
    await this.shipmentWiseProfitLossDetails();
  },
  methods: {
    // get shipment wise profit loss details
    async shipmentWiseProfitLossDetails() {
      await this.$vs.loading({
        scale: 0.8,
      });
      const payload = {
        shipment_id: this.$route.params.shipment_id,
      };
      const res = await reportApi.shipmentWiseProfitLoss(payload);
      this.details = res.data.data.suplier_report.results_data;
      this.detailslist = res.data.data.suplier_report;

      this.$vs.loading.close();
    },
  },
};
</script>
