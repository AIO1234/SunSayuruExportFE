<template>
  <div class="profits_overview">
    <!-- header details -->

    <b-button variant="none" class="back_button mt-1" @click="$router.back()">
      <feather-icon icon="ChevronLeftIcon" size="14" class="text-dark" />
      &nbsp;
      <span class="text">Back</span>
    </b-button>
    <div class="mt-3">
      <span class="inner_view_title"
        >{{ getMonth($route.params.month) }} {{ $route.params.year }} - Profit &
        Loss Report</span
      >
    </div>

    <div class="mt-5"></div>
    <div class="mt-5"></div>
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
                placeholder="Start Eta"
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
                placeholder="End Eta"
              ></b-form-input>
            </b-input-group>
          </template>
        </v-date-picker>
      </b-col>
      <b-col lg="3">
        <b-button
          @click="monthlyProfitInnerShipments()"
          variant="none"
          class="search_button"
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
      >
        <template #cell(total_usd_income)="data">
          {{ getPriceUsd(data.value) }}
        </template>

        <template #cell(total_lkr_income)="data">
          {{ getPrice(data.value) }}
        </template>

        <template #cell(total_expences)="data">
          {{ getPrice(data.value) }}
        </template>

        <template #cell(profitorlossvalue)="data">
          {{ getPrice(data.value) }}
        </template>
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
import reportApi from "@/Api/Modules/reports";
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
    await this.monthlyProfitInnerShipments();
  },
  methods: {
    async monthlyProfitInnerShipments() {
      // if seach data not clear geting profits with range
      if (this.startdate !== "" || this.enddate !== "") {
        const payload = {
          year: this.$route.params.year,
          month: this.$route.params.month,
          start_date: this.startdate,
          end_date: this.enddate,
        };

        await this.$vs.loading({
          scale: 0.8,
        });

        await reportApi
          .monthlyWiseProfitInnerShipments(payload)
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
        const payload = {
          year: this.$route.params.year,
          month: this.$route.params.month,
        };

        await this.$vs.loading({
          scale: 0.8,
        });

        await reportApi
          .monthlyWiseProfitInnerShipments(payload)
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
      await this.monthlyProfitInnerShipments();
    },
  },
};
</script>
