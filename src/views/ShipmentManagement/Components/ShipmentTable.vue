<template>
  <div>
    <b-table sticky-header="" responsive="sm" :items="items" :fields="fields">
      <template #cell(action)="data">
        <b-row no-gutters>
          <b-col lg="4">
            <b-button variant="none">
              <b-img
                width="17px"
                src="@/assets/images/icons/Group 117855.png"
              ></b-img>
            </b-button>
          </b-col>
          <b-col lg="4">
            <b-button variant="none" @click="openUpdateModal(data.item)">
              <b-img
                width="17px"
                src="@/assets/images/icons/Group 101.png"
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

      <template #cell(additionalcosts)="data"> 400 </template>
    </b-table>
    <b-modal
      ref="UpdateModal"
      title="Edit Shipment"
      title-class="modal_title_color"
      hide-footer
      size="xl"
    >
      <ShipmentUpdateForm :selectedshipment="selectedshipment" />
    </b-modal>
  </div>
</template>

<script>
import ShipmentUpdateForm from "@/views/ShipmentManagement/Components/UpdateShipment.vue";
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
    ShipmentUpdateForm,
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
      selectedshipment: {},
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
          thStyle: { width: "15%" },
          // tdClass: "custom-cell-padding",
        },
      ],
      items: [
        {
          shipmentid: "U001",
          datetime: "2024.01.10 08.00am",
          consignee: "Jone",
          packingids: ["P - 001", "P - 002"],
          totalweight: "100",
          additionalcosts: [
            {
              id: 1,
              description: "ehngbvfd",
              amount: 400.0,
            },
          ],
          flight: "F2569",
          status: "Done",
        },
        {
          shipmentid: "U001",
          datetime: "2024.01.10 08.00am",
          consignee: "Jone",
          packingids: ["P - 001", "P - 002"],
          totalweight: "100",
          additionalcosts: [
            {
              id: 1,
              description: "ehngbvfd",
              amount: 400.0,
            },
          ],
          flight: "F2569",
          status: "Ongoing",
        },
        {
          shipmentid: "U001",
          datetime: "2024.01.10 08.00am",
          consignee: "Jone",
          packingids: ["P - 001", "P - 002"],
          totalweight: "100",
          additionalcosts: [
            {
              id: 1,
              description: "ehngbvfd",
              amount: 400.0,
            },
          ],
          flight: "F2569",
          status: "Ongoing",
        },
      ],
    };
  },
  async created() {},

  methods: {
    openUpdateModal(data) {
      this.$refs.UpdateModal.show();
      this.selectedshipment = data;
    },
  },
};
</script>

<style>
.custom-cell-padding {
  height: 70px; /* Set your desired padding value */
}
</style>
