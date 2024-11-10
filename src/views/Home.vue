<template>
  <div class="dashboard mt-1">
    <h2 class="main_title">General Statistics</h2>

    <!-- card view -->

    <b-card class="mt-3">
      <div>
        <span class="card_view_title">Total Profit</span>
        <hr />
        <span class="total_profit">{{ getPrice(totalProfit) }}</span>
      </div>
    </b-card>

    <!-- stats card view  -->

    <b-card class="mt-1">
      <div>
        <!-- selctiona -->
        <b-row class="mr-2">
          <!-- title -->
          <b-col lg="8">
            <span class="stats_title">Incomes, Expenses & Profit Analysis</span>
          </b-col>

          <!-- type selection -->
          <b-col lg="2" cols="12">
            <!-- space only for mobile -->
            <div class="mobile_only_view">
              <div class="mt-2"></div>
            </div>
            <v-select
              class="selection"
              v-model="type"
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              label="title"
              :options="types"
              @input="dashboardOverview()"
            >
            </v-select>
          </b-col>

          <!-- year selection -->
          <b-col lg="2" cols="12" class="padding_year">
            <!-- space only for mobile -->
            <div class="mobile_only_view">
              <div class="mt-1"></div>
            </div>
            <v-select
              class="selection"
              v-model="year"
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              label="year"
              :options="years"
              @input="dashboardOverview()"
            >
            </v-select>
          </b-col>
        </b-row>
        <br /><br />
        <!-- stats -->
        <!-- all stat chart -->
        <apexchart
          v-if="type.title === 'All'"
          type="bar"
          :options="fullchartoptions"
          :series="allseries"
          ref="all_chart"
        ></apexchart>

        <!-- income chart -->
        <apexchart
          v-if="type.title === 'Income'"
          type="bar"
          :options="incomechartoptions"
          :series="incomeseries"
          ref="income_chart"
        ></apexchart>

        <!-- expence chart -->
        <apexchart
          v-if="type.title === 'Expences'"
          type="bar"
          :options="expenceschartoptions"
          :series="expenceseries"
          ref="expence_chart"
        ></apexchart>

        <!-- profit chart -->
        <apexchart
          v-if="type.title === 'Profit'"
          type="bar"
          :options="profitschartoptions"
          :series="profitseries"
          ref="profit_chart"
        ></apexchart>
      </div>
    </b-card>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import {
  BCard,
  BTable,
  BCol,
  BRow,
  BCardText,
  BLink,
  BContainer,
} from "bootstrap-vue";
import vSelect from "vue-select";
import reportApi from "@/Api/Modules/reports";
export default {
  components: {
    apexchart: VueApexCharts,
    vSelect,
    BCard,
    BCol,
    BTable,
    BRow,
    BContainer,
    BCardText,
    BLink,
  },
  data() {
    return {
      totalProfit: "",
      types: [
        {
          title: "All",
        },
        {
          title: "Income",
        },
        {
          title: "Expences",
        },
        {
          title: "Profit",
        },
      ],
      type: {
        title: "All",
      },
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
      // charts

      // all  option chart
      fullchartoptions: {
        chart: {
          id: "vuechart-full",
        },
        xaxis: {
          categories: [
            "January",
            "February",
            "March",
            "Aprail",
            "May",
            "June",
            "Jully",
            "August",
            "September",
            "Octomber",
            "November",
            "December",
          ],
          title: {
            text: "Month",
          },
        },
        colors: ["#248900", "#F8A838", "#801818"],

        yaxis: {
          title: {
            text: "Amount (Rs)",
          },
        },
      },
      allseries: [
        {
          name: "Income",
          data: [],
        },
        {
          name: "Expenses",
          data: [],
        },
        {
          name: "Profit",
          data: [],
        },
      ],

      // income chart

      incomechartoptions: {
        chart: {
          id: "vuechart-income",
        },
        xaxis: {
          categories: [
            "January",
            "February",
            "March",
            "Aprail",
            "May",
            "June",
            "Jully",
            "August",
            "September",
            "Octomber",
            "November",
            "December",
          ],
          title: {
            text: "Month",
          },
        },
        colors: ["#248900"],

        yaxis: {
          title: {
            text: "Income (Rs)",
          },
        },
      },
      incomeseries: [
        {
          name: "Income",
          data: [],
        },
      ],

      // expences chart

      expenceschartoptions: {
        chart: {
          id: "vuechart-expences",
        },
        xaxis: {
          categories: [
            "January",
            "February",
            "March",
            "Aprail",
            "May",
            "June",
            "Jully",
            "August",
            "September",
            "Octomber",
            "November",
            "December",
          ],
          title: {
            text: "Month",
          },
        },
        colors: ["#F8A838"],

        yaxis: {
          title: {
            text: "Expences (Rs)",
          },
        },
      },
      expenceseries: [
        {
          name: "Expence",
          data: [],
        },
      ],

      // profit chart
      profitschartoptions: {
        chart: {
          id: "vuechart-profits",
        },
        xaxis: {
          categories: [
            "January",
            "February",
            "March",
            "Aprail",
            "May",
            "June",
            "Jully",
            "August",
            "September",
            "Octomber",
            "November",
            "December",
          ],
          title: {
            text: "Month",
          },
        },
        colors: ["#801818"],

        yaxis: {
          title: {
            text: "Profit (Rs)",
          },
        },
      },
      profitseries: [
        {
          name: "Profit",
          data: [],
        },
      ],
    };
  },
  async created() {
    await this.dashboardOverview();
  },

  // computed: {
  //   returnAllseris() {
  //     return this.allseries;
  //   },
  //   returnIncomeseris() {
  //     return this.incomeseries;
  //   },
  // },
  methods: {
    setCellPadding(value, key, item) {
      // Add a custom class to table cells based on your requirements
      return "custom-cell-padding";
    },

    // dashboard overvie api calling
    async dashboardOverview() {
      const payload = {
        type: this.type.title,
        year: this.year.year,
      };
      await this.$vs.loading({
        scale: 0.8,
      });
      const res = await reportApi.dashboardOverview(payload);

      this.totalProfit = res.data.data.prifit_details.full_profit;

      if (this.type.title === "All") {
        this.allseries[0].data = res.data.data.incomearray;
        this.allseries[1].data = res.data.data.expencearray;
        this.allseries[2].data = res.data.data.profitarray;
        this.$refs.all_chart.refresh();
      } else if (this.type.title === "Income") {
        this.incomeseries[0].data = res.data.data.incomearray;
        this.$refs.income_chart.refresh();
      } else if (this.type.title === "Expences") {
        this.expenceseries[0].data = res.data.data.expencearray;

        this.$refs.expence_chart.refresh();
      } else if (this.type.title === "Profit") {
        this.profitseries[0].data = res.data.data.profitarray;
        this.$refs.profit_chart.refresh();
      }
      this.$vs.loading.close();
    },
  },
};
</script>

<style lang="scss">
.custom-cell-padding {
  height: 70px; /* Set your desired padding value */
}
@import "@core/scss/vue/libs/vue-select.scss";
</style>
