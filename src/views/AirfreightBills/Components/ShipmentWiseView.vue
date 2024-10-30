<template>
  <div class="pt-3 airfreight_bills">
    <span class="section_header d-flex justify-content-center"
      >Shipment Wise AirFreight Bills</span
    >

    <h2 class="pt-3 title">{{ $route.params.company_name }}</h2>
    <b-card class="mt-5">
      <b-table
        sticky-header=""
        responsive="sm"
        :items="airfreightshipments"
        :fields="fields"
      >
        <template #cell(action)="data">
          <b-row no-gutters>
            <b-col lg="4">
              <b-button variant="flat-none">
                <b-img
                  width="17px"
                  src="@/assets/images/icons/Group 117855.png"
                ></b-img>
              </b-button>
            </b-col>
            <b-col lg="4"> </b-col>
          </b-row>
        </template>

        <template #cell(airfreight_cost)="data">
          {{ getPriceWithOutCurrency(data.value) }}
        </template>

        <template #cell(usd_airfreight_cost)="data">
          {{ getPriceWithOutCurrency(data.value) }}
        </template>

        <template #cell(airfreight_converting_rate)="data">
          {{ getPriceWithOutCurrency(data.value) }}
        </template>
      </b-table>
    </b-card>
  </div>
</template>
<script>
import { BTable, BRow, BCard, BImg, BCol, BButton } from "bootstrap-vue";
import reportApi from "@/Api/Modules/reports";
export default {
  components: {
    BTable,
    BRow,
    BCard,
    BImg,
    BCol,
    BButton,
  },
  data() {
    return {
      fields: [
        {
          key: "invoice_no",
          label: "Invoice No",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "td-style",
        },

        {
          key: "airfreight_cost",
          label: "Amount(LKR)",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "td-style",
        },

        {
          key: "usd_airfreight_cost",
          label: "Amount(USD)",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "td-style",
        },

        {
          key: "airfreight_converting_rate",
          label: "Converting Rate(Rs)",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "td-style",
        },
      ],
      airfreightshipments: [],
    };
  },
  async created() {
    await this.getAirfreightShipments();
  },
  methods: {
    async getAirfreightShipments() {
      const payload = {
        airfreight_id: this.$route.params.id,
      };
      await this.$vs.loading({
        scale: 0.8,
      });
      const res = await reportApi.airfreightInnerShipments(payload);
      this.airfreightshipments = res.data.data;
      this.$vs.loading.close();
    },
  },
};
</script>
