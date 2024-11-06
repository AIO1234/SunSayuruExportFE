<template>
  <div class="mt-3 profits_overview">
    <!-- header details -->

    <b-row>
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
      <b-col lg="3">
        <b-button @click="shipmntProfit()" variant="none" class="search_button"
          ><span class="search_text">Search</span></b-button
        >
      </b-col>
      <b-col lg="3">
        <b-button @click="clear()" variant="none" class="search_button"
          ><span class="search_text">Clear</span></b-button
        >
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
        :items="shipmentprofit"
        :fields="fields"
        per-page="10"
        :current-page="currentPage"
      >
        <template #cell(total_usd_income)="data">
          {{ getPriceUsd(data.value) }}
        </template>

        <template #cell(total_lkr_income)="data">
          {{ getPrice(data.value) }}
        </template>

        <template #cell(total_expense)="data">
          {{ getPrice(data.value) }}
        </template>

        <template #cell(profitorlossvalue)="data">
          {{ getPrice(data.value) }}
        </template>
      </b-table>

      <!-- pagination -->
      <b-row>
        <b-col lg="4"></b-col>
        <b-col lg="8">
          <div class="mt-1">
            <b-pagination
              v-model="currentPage"
              :total-rows="shipmentprofit.length"
              per-page="10"
              first-text="First"
              prev-text="Prev"
              next-text="Next"
              last-text="Last"
            ></b-pagination>
          </div>
        </b-col>
      </b-row>
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
      startdate: "",
      enddate: "",
      fields: [
        {
          key: "invoice_no",
          label: "Invoice No",
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
          key: "total_expense",
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
          key: "profitorlossvalue",
          label: "Profit/Loss Amount",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "td-style",
        },
      ],
      shipmentprofit: [],
    };
  },

  async created() {
    await this.shipmntProfit();
  },
  methods: {
    async shipmntProfit() {
      // if seach data not clear geting profits with range
      if (this.startdate !== "" || this.enddate !== "") {
        const payload = {
          start_date: this.startdate,
          end_date: this.enddate,
        };

        await this.$vs.loading({
          scale: 0.8,
        });

        await reportApi
          .shipmentWiseProfit(payload)
          .then((res) => {
            this.shipmentprofit = res.data.data;
            this.$vs.loading.close();
          })
          .catch(() => {
            this.$vs.loading.close();
          });
      }
      // if seach data clear geting pprofits  with not seach
      else if (this.startdate === "" || this.enddate === "") {
        await this.$vs.loading({
          scale: 0.8,
        });

        await reportApi
          .shipmentWiseProfit()
          .then((res) => {
            this.shipmentprofit = res.data.data;
            this.$vs.loading.close();
          })
          .catch(() => {
            this.$vs.loading.close();
          });
      }
    },
    // clear searhces

    async clear() {
      // clear start  and date

      this.startdate = "";
      this.enddate = "";
      await this.shipmntProfit();
    },
  },
};
</script>
