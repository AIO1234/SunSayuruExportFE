<template>
  <div>
    <b-table sticky-header="" responsive="sm" :items="items" :fields="fields">
      <template #cell(action)="data">
        <b-row no-gutters>
          <b-col lg="4">
            <b-button variant="none" @click="$router.push('/shipmentwiseearnings/supliers')">
              <b-img
                width="17px"
                src="@/assets/images/icons/Group 117855.png"
              ></b-img>
            </b-button>
          </b-col>
        </b-row>
      </template>
    </b-table>

    <b-modal
      ref="DetailsModal"
      :title="`View earnings for ${selectedItem.supliername}`"
      title-class="modal_title_color"
      hide-footer
      size="lg"
    >
      <ViewEarnings :selectedItem="selectedItem" />
    </b-modal>
  </div>
</template>

<script>
import ViewEarnings from "@/views/SuplierEarningsManagement/ShipmentWise/Components/ViewEarnings.vue";
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
  name: "EarningTable",
  components: {
    ViewEarnings,
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
          key: "shipmentno",
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
          key: "action",
          label: "Action",
          sortable: true,
          thStyle: { width: "15%" },
          // tdClass: "custom-cell-padding",
        },
      ],
      items: [
        {
          shipmentno: "S-001",
          eta: "2024/01/20",
        },
        {
          shipmentno: "S-001",
          eta: "2024/01/20",
        },
        {
          shipmentno: "S-001",
          eta: "2024/01/20",
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

    openDetailsModal(data) {
      this.$refs.DetailsModal.show();
      this.selectedItem = data;
    },
  },
};
</script>

<style>
.custom-cell-padding {
  height: 70px; /* Set your desired padding value */
}
</style>
