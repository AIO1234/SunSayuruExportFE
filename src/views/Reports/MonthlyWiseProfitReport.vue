<template>
  <div class="mt-3 profits_overview">
    <!-- header details -->

    <b-row>
      <b-col lg="4" class="text-right">
        <!-- space only for mobile -->
        <div class="mobile_only_view">
          <div class="mt-2"></div>
        </div>
        <v-select
          class="year_selection"
          v-model="year"
          :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
          label="year"
          :options="years"
          @input="monthlyprofit()"
        >
        </v-select>
      </b-col>
      <b-col lg="4" class="text-right">
        <!-- space only for mobile -->
      </b-col>
    </b-row>

    <!-- profit table -->

    <b-card class="mt-5">
      <b-table
        sticky-header=""
        responsive="sm"
        :items="profitData"
        :fields="fields"
      >
        <template #cell(month)="data">
          {{ getMonth(data.value) }}
        </template>

        <template #cell(total_usd_income)="data">
          {{ getPriceWithOutCurrency(data.value) }}
        </template>

        <template #cell(total_lkr_income)="data">
          {{ getPriceWithOutCurrency(data.value) }}
        </template>

        <template #cell(total_airfreight_usd_expense)="data">
          {{ getPriceWithOutCurrency(data.value) }}
        </template>

        <template #cell(total_airfreight_lkr_expense)="data">
          {{ getPriceWithOutCurrency(data.value) }}
        </template>

        <template #cell(total_suplier_expense)="data">
          {{ getPriceWithOutCurrency(data.value) }}
        </template>

        <template #cell(total_material_expense)="data">
          {{ getPriceWithOutCurrency(data.value) }}
        </template>

        <template #cell(total_additional_expense)="data">
          {{ getPriceWithOutCurrency(data.value) }}
        </template>

        <template #cell(profitorlossvalue)="data">
          {{ getPriceWithOutCurrency(data.value) }}
        </template>
        <!-- action-->
        <template #cell(action)="data">
          <b-button
            variant="flat-none"
            @click="
              $router.push(
                `/shipments_wise_monthly_profit_inner/${year.year}/${data.item.month}`
              )
            "
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
import reportApi from "@/Api/Modules/reports";
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
        year: new Date().getFullYear(),
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
          key: "total_airfreight_usd_expense",
          label: "Total Air freight Usd expenses($)",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "td-style",
        },

        {
          key: "total_airfreight_lkr_expense",
          label: "Total Air freight Lkr expenses(Rs)",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "td-style",
        },
        {
          key: "total_suplier_expense",
          label: "Total Supplier Expenses(Rs)",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "td-style",
        },

        {
          key: "total_material_expense",
          label: "Total Material Expenses(Rs)",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "td-style",
        },

        {
          key: "total_additional_expense",
          label: "Total Additional Expenses(Rs)",
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
          label: "Profit/Loss Amount(Rs)",
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
      profitData: [],
    };
  },
  async created() {
    await this.monthlyprofit();
  },
  methods: {
    async monthlyprofit() {
      const payload = {
        year: this.year.year,
      };

      await this.$vs.loading({
        scale: 0.8,
      });

      await reportApi
        .monthlyWiseProfit(payload)
        .then((res) => {
          this.profitData = res.data.data;
          this.$vs.loading.close();
        })
        .catch(() => {
          this.$vs.loading.close();
        });
    },
  },
};
</script>
<style lang="scss">
@import "@core/scss/vue/libs/vue-select.scss";
</style>
