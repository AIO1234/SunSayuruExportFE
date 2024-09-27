<template>
  <div class="dashboard mt-1">
    <h2 class="main_title">General Statistics</h2>

    <!-- card view -->

    <b-card class="mt-3">
      <div>
        <span class="card_view_title">Total Profit</span>
        <hr />
        <span class="total_profit">Rs. 1,200,000,000.00</span>
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
            >
            </v-select>
          </b-col>
        </b-row>
        <br /><br />
        <!-- stats -->

        <!-- all stat chart -->
        <VueApexCharts
          v-if="type.title === 'All'"
          type="bar"
          :options="fullchartoptions"
          :series="allseries"
        ></VueApexCharts>

        <!-- income chart -->
        <VueApexCharts
          v-if="type.title === 'Income'"
          type="bar"
          :options="incomechartoptions"
          :series="incomeseries"
        ></VueApexCharts>

        <!-- expence chart -->
        <VueApexCharts
          v-if="type.title === 'Expences'"
          type="bar"
          :options="expenceschartoptions"
          :series="expenceseries"
        ></VueApexCharts>

        <!-- profit chart -->
        <VueApexCharts
          v-if="type.title === 'Profit'"
          type="bar"
          :options="profitschartoptions"
          :series="profitseries"
        ></VueApexCharts>
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

export default {
  components: {
    VueApexCharts,
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
        year: "2024",
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
          data: [
            8000, 7000, 9000, 8500, 9500, 10000, 11000, 10500, 9500, 10000,
            9000, 9500,
          ],
        },
        {
          name: "Expenses",
          data: [
            2000, 2400, 2300, 2500, 2600, 2700, 2800, 3000, 2500, 2700, 2300,
            2500,
          ],
        },
        {
          name: "Profit",
          data: [
            6000, 4600, 6700, 6000, 6900, 7300, 8200, 7500, 7000, 7300, 6700,
            7000,
          ],
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
          data: [
            8000, 7000, 9000, 8500, 9500, 10000, 11000, 10500, 9500, 10000,
            9000, 9500,
          ],
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
          data: [
            8000, 7000, 9000, 8500, 9500, 10000, 11000, 10500, 9500, 10000,
            9000, 9500,
          ],
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
          data: [
            8000, 7000, 9000, 8500, 9500, 10000, 11000, 10500, 9500, 10000,
            9000, 9500,
          ],
        },
      ],
    };
  },

  methods: {
    setCellPadding(value, key, item) {
      // Add a custom class to table cells based on your requirements
      return "custom-cell-padding";
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
