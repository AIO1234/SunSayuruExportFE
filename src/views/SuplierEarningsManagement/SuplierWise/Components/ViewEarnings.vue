<template>
  <div class="suplierearnings">
    <span class="section_header d-flex justify-content-center"
      >View supplier bills</span
    >
    <div class="pt-3"></div>

    <h2 class="shipment_number">
      {{ $route.params.suplier_name }}’s receiving
    </h2>

    <div class="pt-2"></div>
    <b-card>
      <b-table
        sticky-header=""
        responsive="sm"
        :items="shipmentdetails"
        :fields="fields"
      >
      </b-table>
    </b-card>
    <br />
    <b-container>
      <div class="web_only_view">
        <b-row>
          <b-col lg="10" cols="6"
            ><span class="totaltext ml-1">Total</span></b-col
          >
          <b-col lg="2" cols="6"
            ><span class="totaltext ml-4">{{
              getPrice(totalearnings)
            }}</span></b-col
          >
        </b-row>
      </div>
      <div class="mobile_only_view">
        <br />
        <b-row>
          <b-col lg="8" cols="8"
            ><span class="totaltext ml-1">Total</span></b-col
          >
          <b-col lg="2" cols="2"
            ><span class="totaltext ml-1">{{
              getPrice(totalearnings)
            }}</span></b-col
          >
        </b-row>
      </div>
    </b-container>
  </div>
</template>
<script>
import {
  BModal,
  BCard,
  BTable,
  BBadge,
  BButton,
  BCol,
  BRow,
  BImg,
  BCardText,
  BAvatar,
  BLink,
  BContainer,
} from "bootstrap-vue";
import reportApi from "@/Api/Modules/reports";
export default {
  components: {
    BCard,
    BModal,
    BImg,
    BButton,
    BCol,
    BBadge,
    BAvatar,
    BTable,
    BRow,
    BContainer,
    BCardText,
    BLink,
  },
  props: {
    selectedItem: Object,
  },
  async created() {
    await this.suplierViseSuplierInnerDetails();
  },
  data() {
    return {
      totalearnings: "",
      fields: [
        {
          key: "shipment_no",
          label: "Shipment No",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "custom-cell-padding",
        },

        {
          key: "eta",
          label: "ETA",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "custom-cell-padding",
        },

        {
          key: "total_cost",
          label: "Total Cost(Rs)",
          sortable: true,
          // tdClass: "custom-cell-padding",
        },
      ],
      shipmentdetails: [],
    };
  },
  methods: {
    async suplierViseSuplierInnerDetails() {
      await this.$vs.loading({
        scale: 0.8,
      });
      const payload = {
        suplier_id: this.$route.params.suplier_id,
      };
      const res = await reportApi.suplierViseSuplierShipmentEarnings(payload);
      this.shipmentdetails = res.data.data.result_data;
      this.totalearnings = res.data.data.result_amount;
      this.$vs.loading.close();
    },
  },
};
</script>
