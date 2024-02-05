<template>
  <div>
    <b-table sticky-header="" responsive="sm" :items="items" :fields="fields">
      <template #cell(supliers)="data">
        <div><b class="font-weight-bold">Namal</b> - 6kg</div>

        <div><b class="font-weight-bold">Kasun</b> - 6kg</div>
      </template>
      <template #cell(materialcost)="data">
        <div><b class="font-weight-bold">Boxes</b> - 5.00</div>

        <div><b class="font-weight-bold">Ice</b> - 5.00</div>
      </template>

      <template #cell(status)="data">
        <b-badge style="background-color: #cdf59b; color: #67b108">{{
          data.value
        }}</b-badge>
      </template>
      <template #cell(action)="data">
        <b-row no-gutters>
          <b-col lg="4">
            <b-button variant="none" @click="openDetailsModal(data.item)">
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
          <b-col lg="4">
            <b-button variant="none">
              <b-img
                width="17px"
                src="@/assets/images/icons/Group 59.png"
              ></b-img>
            </b-button>
          </b-col>
        </b-row>
      </template>
    </b-table>

    <b-modal
      ref="UpdateModal"
      title="Edit Packing"
      title-class="modal_title_color"
      hide-footer
      size="xl"
    >
      <PackingUpdateForm :selectedPacking="selectedPacking" />
    </b-modal>

    <b-modal
      ref="DetailsModal"
      :title="`View packing box number ${selectedPacking.box_number}`"
      title-class="modal_title_color"
      hide-footer
      size="lg"
    >
      <ViewPacking :selectedPacking="selectedPacking" />
    </b-modal>
  </div>
</template>

<script>
import PackingUpdateForm from "@/views/PackingManagement/Components/UpdatePackingForm.vue";
import ViewPacking from "@/views/PackingManagement/Components/ViewPacking.vue";

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
  name: "PackingTable",
  components: {
    BCard,
    BModal,
    BImg,
    BButton,
    PackingUpdateForm,
    ViewPacking,
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
      selectedPacking: {},
      fields: [
        {
          key: "box_number",
          label: "Box Number",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "custom-cell-padding",
        },
        {
          key: "seafoodtype",
          label: "SeaFood Type",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "custom-cell-padding",
        },

        {
          key: "quality",
          label: "Quality",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "custom-cell-padding",
        },

        {
          key: "grading",
          label: "Grading",
          sortable: true,
          thStyle: { width: "10%" },
          // tdClass: "custom-cell-padding",
        },
        {
          key: "totalweight",
          label: "Total Weight",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "custom-cell-padding",
        },
        {
          key: "supliers",
          label: "Supliers",
          sortable: true,
          thStyle: { width: "15%" },
          // tdClass: "custom-cell-padding",
        },
        {
          key: "materialcost",
          label: "Material Cost",
          sortable: true,
          thStyle: { width: "15%" },
          // tdClass: "custom-cell-padding",
        },
        {
          key: "status",
          label: "Status ",
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
          box_number: "P001",
          seafoodtype: "Prawns",
          quality: "A+",
          grading: "50 - 60",
          totalweight: "12",
          supliers: [
            {
              suplier: "Kasun Perera",
              weight: "6",
              rate: "100",
            },
            {
              suplier: "Namal Udugama",
              weight: "6",
              rate: "100",
            },
          ],
          materialcost: [
            {
              description: "Ice Cube",
              quantity: "6",
              amount: "100",
            },
            {
              description: "Box",
              boxtype: "Box Type 1",
              amount: "100",
            },
          ],
          status: "Ongoing",
        },
        {
          box_number: "P002",
          seafoodtype: "Sithum Perera",
          quality: "A+",
          grading: "50 - 60",
          totalweight: "12",
          supliers: [
            {
              suplier: "Kasun Perera",
              weight: "6",
              rate: "100",
            },
            {
              suplier: "Namal Udugama",
              weight: "6",
              rate: "100",
            },
          ],
          materialcost: [
            {
              description: "Ice Cube",
              quantity: "6",
              amount: "100",
            },
            {
              description: "Box",
              boxtype: "Box Type 2",
              amount: "100",
            },
          ],
          status: "Ongoing",
        },
        {
          box_number: "P003",
          seafoodtype: "Sithum Perera",
          quality: "A+",
          grading: "50 - 60",
          totalweight: "12",
          supliers: [
            {
              suplier: "Kasun Perera",
              weight: "Kasun Perera",
              rate: "100",
            },
            {
              suplier: "Namal Udugama",
              weight: "6",
              rate: "100",
            },
          ],
          materialcost: [
            {
              description: "Ice Cube",
              quantity: "6",
              amount: "100",
            },
            {
              description: "Box",
              boxtype: "Box Type 3",
              amount: "100",
            },
          ],
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
    openUpdateModal(data) {
      this.$refs.UpdateModal.show();
      this.selectedPacking = data;
    },

    openDetailsModal(data) {
      this.$refs.DetailsModal.show();
      this.selectedPacking = data;
    },
  },
};
</script>

<style>
.custom-cell-padding {
  height: 70px; /* Set your desired padding value */
}
</style>
