<template>
  <div>
    <b-table sticky-header="" responsive="sm" :items="items" :fields="fields">
      <template #cell(action)="data">
        <b-button variant="none">
          <b-img
            width="17px"
            src="@/assets/images/icons/Group 101.png"
            @click="openUpdateModal(data.item)"
          ></b-img>
        </b-button>
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

      <template #cell(costlist)="data">
        <div><b class="font-weight-bold">Boxes</b> - 5.00</div>

        <div><b class="font-weight-bold">Ice</b> - 5.00</div>
      </template>
    </b-table>

    <b-modal
      ref="UpdateModal"
      title="Edit Material Costs"
      title-class="modal_title_color"
      hide-footer
    >
      <MaterialCostsUpdateForm :selectedItem="selectedItem" />
    </b-modal>
  </div>
</template>

<script>
import MaterialCostsUpdateForm from "@/views/MeterialCostManagement/Components/UpdateMaterialCost.vue";
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
  name: "MaterialCostsTable",
  components: {
    MaterialCostsUpdateForm,
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
          key: "boxnumber",
          label: "Box Number",
          sortable: true,
          //   thStyle: { width: "80%" },
          // tdClass: "custom-cell-padding",
        },
        {
          key: "costlist",
          label: "Cost List",
          sortable: true,
          //   thStyle: { width: "80%" },
          // tdClass: "custom-cell-padding",
        },
        {
          key: "amount",
          label: "Amount",
          sortable: true,
          //   thStyle: { width: "80%" },
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
          boxnumber: "P001",
          costlist: [
            {
              id: 1,
              description: "Ice Cube",
              quantity: 2,
              amount: "100.00",
            },
          ],
          amount: "20.00",
        },
        {
          boxnumber: "P001",
          costlist: [
            {
              id: 1,
              description: "Ice Cube",
              quantity: 2,
              amount: "100.00",
            },
          ],
          amount: "20.00",
        },
        {
          boxnumber: "P001",
          costlist: [
            {
              id: 1,
              description: "Ice Cube",
              quantity: 2,
              amount: "100.00",
            },
          ],
          amount: "20.00",
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
    openUpdateModal(data) {
      this.$refs.UpdateModal.show();
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
