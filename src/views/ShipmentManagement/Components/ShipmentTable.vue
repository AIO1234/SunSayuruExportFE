<template>
  <b-table sticky-header="" responsive="sm" :items="items" :fields="fields">
    <template #cell(action)="data">
      <b-row>
        <b-col lg="2">
          <b-button variant="none">
            <feather-icon icon="Edit2Icon" class="mr-25"
          /></b-button>
        </b-col>
        <b-col lg="2">
          <b-button variant="none">
            <b-img
              width="17px"
              src="@/assets/images/icons/Group 59.png"
            ></b-img>
          </b-button>
        </b-col>
      </b-row>
    </template>
    <template #cell(packingids)="data">
      <div>P - 001</div>

      <div>P - 002</div>
    </template>
    <template #cell(status)="data">
      <b-badge
        v-if="data.value === 'Ongoing'"
        style="background-color: #cdf59b; color: #67b108"
        >{{ data.value }}</b-badge
      >
      <b-badge
        v-else-if="data.value === 'Done'"
        style="background-color: #ff8787; color: #de0000"
        >{{ data.value }}</b-badge
      >
    </template>
  </b-table>
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
export default {
  name: "ShipmentTable",
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
  data() {
    return {
      show: false,
      selectedItem: {},
      fields: [
        {
          key: "shipmentid",
          label: "Shipment ID",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "custom-cell-padding",
        },
        {
          key: "datetime",
          label: "Date & time",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "custom-cell-padding",
        },

        {
          key: "consignee",
          label: "Consignee",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "custom-cell-padding",
        },

        {
          key: "packingids",
          label: "Packing IDs",
          sortable: true,
          thStyle: { width: "15%" },
          // tdClass: "custom-cell-padding",
        },
        {
          key: "totalweight",
          label: "Total weight(Kg)",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "custom-cell-padding",
        },
        {
          key: "additionalcosts",
          label: "Additional cost($)",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "custom-cell-padding",
        },
        {
          key: "flight",
          label: "Flight",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "custom-cell-padding",
        },
        {
          key: "status",
          label: "Status",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "custom-cell-padding",
        },

        {
          key: "action",
          label: "Action",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "custom-cell-padding",
        },
      ],
      items: [
        {
          shipmentid: "U001",
          datetime: "2024.01.10 08.00am",
          consignee: "Jone",
          packingids: "1000",
          totalweight: "100",
          additionalcosts: "400",
          flight: "F2569",
          status: "Done",
        },
        {
          shipmentid: "U001",
          datetime: "2024.01.10 08.00am",
          consignee: "Jone",
          packingids: "400",
          totalweight: "100",
          additionalcosts: "400",
          flight: "F2569",
          status: "Ongoing",
        },
        {
          shipmentid: "U001",
          datetime: "2024.01.10 08.00am",
          consignee: "Jone",
          packingids: "400",
          totalweight: "100",
          additionalcosts: "400",
          flight: "F2569",
          status: "Ongoing",
        },
      ],
    };
  },
  async created() {},

  methods: {
    setCellPadding(value, key, item) {
      // Add a custom class to table cells based on your requirements
      return "custom-cell-padding";
    },
  },
};
</script>

<style>
.custom-cell-padding {
  height: 70px; /* Set your desired padding value */
}
</style>
