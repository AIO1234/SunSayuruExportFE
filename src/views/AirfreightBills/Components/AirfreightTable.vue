<template>
  <div>
    <b-table
      sticky-header=""
      responsive="sm"
      :items="airfreightbills"
      :fields="fields"
    >
      <template #cell(action)="data">
        <b-row no-gutters>
          <b-col lg="4">
            <b-button
              variant="flat-none"
              @click="$router.push('/shipmentwiseairfreightbill')"
            >
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
          key: "name",
          label: "Company Name",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "td-style",
        },

        {
          key: "lkrcost",
          label: "Total Cost(LKR)",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "td-style",
        },

        {
          key: "usdcost",
          label: "Total Cost(USD)",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "td-style",
        },

        {
          key: "action",
          label: "Action",
          sortable: true,
          thStyle: { width: "15%" },
          // tdClass: "td-style",
        },
      ],
      airfreightbills: [
        {
          name: "ABC Company",
          lkrcost: "Rs. 50000.00",
          usdcost: "$ 168.03 ",
        },
        {
          name: "ABC Company",
          lkrcost: "Rs. 50000.00",
          usdcost: "$ 168.03 ",
        },
        {
          name: "ABC Company",
          lkrcost: "Rs. 50000.00",
          usdcost: "$ 168.03 ",
        },
        {
          name: "ABC Company",
          lkrcost: "Rs. 50000.00",
          usdcost: "$ 168.03 ",
        },
        {
          name: "ABC Company",
          lkrcost: "Rs. 50000.00",
          usdcost: "$ 168.03 ",
        },
      ],
    };
  },
};
</script>
