<template>
  <div class="pt-3 airfreight_bills">
    <span class="section_header d-flex justify-content-center"
      >Shipment Wise AirFreight Bills</span
    >

    <h2 class="pt-3 title">ABC Company</h2>
    <b-card class="mt-5">
      <b-table
        sticky-header=""
        responsive="sm"
        :items="airfreightbills"
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
      </b-table>
    </b-card>
    <br />
    <b-container>
      <div class="web_only_view">
        <b-row>
          <b-col lg="3" cols="6"
            ><span class="totaltext ml-3">Total</span></b-col
          >
          <b-col lg="4" cols="6"
            ><span class="totaltext ml-5 pl-1">Rs.20000.00</span></b-col
          >
          <b-col lg="4" cols="6"
            ><span class="totaltext ml-4 pl-3">Usd.400.00</span></b-col
          >
        </b-row>
      </div>
      <div class="mobile_only_view">
        <br />
        <b-row>
          <b-col cols="3"><span class="totaltext ml-1">Total(Rs)</span></b-col>
          <b-col cols="9"
            ><span class="totaltext ml-1">Rs.20000.00</span></b-col
          >
        </b-row>
        <br />
        <b-row>
          <b-col cols="3"><span class="totaltext ml-1">Total($)</span></b-col>
          <b-col cols="9"
            ><span class="totaltext ml-1">Rs.20000.00</span></b-col
          >
        </b-row>
      </div>
    </b-container>
  </div>
</template>
<script>
import { BTable, BRow, BCard, BImg, BCol, BButton } from "bootstrap-vue";
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
          key: "lkrcost",
          label: "Amount(LKR)",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "td-style",
        },

        {
          key: "usdcost",
          label: "Amount(USD)",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "td-style",
        },
      ],
      airfreightbills: [
        {
          invoice_no: "A-123",
          lkrcost: "Rs. 50000.00",
          usdcost: "$ 168.03 ",
        },
        {
          invoice_no: "A-123",
          lkrcost: "Rs. 50000.00",
          usdcost: "$ 168.03 ",
        },
        {
          invoice_no: "A-123",
          lkrcost: "Rs. 50000.00",
          usdcost: "$ 168.03 ",
        },
        {
          invoice_no: "A-123",
          lkrcost: "Rs. 50000.00",
          usdcost: "$ 168.03 ",
        },
        {
          invoice_no: "A-123",
          lkrcost: "Rs. 50000.00",
          usdcost: "$ 168.03 ",
        },
      ],
    };
  },
};
</script>
