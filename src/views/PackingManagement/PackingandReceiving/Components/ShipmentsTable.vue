<template>
  <div>
    <b-table
      sticky-header=""
      responsive="sm"
      :items="shipments"
      :fields="fields"
      per-page="20"
      :current-page="currentPage"
    >
      <template #cell(status)="data">
        <b-badge style="background-color: #cdf59b; color: #67b108">{{
          data.value
        }}</b-badge>
      </template>
      <template #cell(action)="data">
        <b-row>
          <b-col lg="7">
            <b-button
              variant="none"
              @click="$router.push(`/viewpacking/${data.item.id}`)"
            >
              <b-img
                width="17px"
                src="@/assets/images/icons/Group 117855.png"
              ></b-img>
            </b-button>
          </b-col>
          <b-col lg="5">
            <b-button
              variant="none"
              @click="$router.push(`/updateshipment/${data.item.id}`)"
            >
              <b-img
                width="17px"
                src="@/assets/images/icons/Group 101.png"
              ></b-img>
            </b-button>
          </b-col>
        </b-row>
      </template>

      <template #cell(total_material_costs)="data">
        {{ getPriceWithOutCurrency(data.value) }}
      </template>
      <template #cell(total_additional_costs)="data">
        {{ getPriceWithOutCurrency(data.value) }}
      </template>
      <template #cell(total_weight)="data">
        {{ getWeight(data.value) }}
      </template>
    </b-table>
    <b-row>
      <b-col lg="4"></b-col>
      <b-col lg="8">
        <div class="mt-1">
          <b-pagination
            v-model="currentPage"
            :total-rows="shipments.length"
            per-page="20"
            first-text="First"
            prev-text="Prev"
            next-text="Next"
            last-text="Last"
          ></b-pagination>
        </div>
      </b-col>
    </b-row>
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
import PackingUpdateForm from "@/views/PackingManagement/PackingandReceiving/Components/UpdatePackingForm.vue";
import shipmentApi from "@/Api/Modules/shipments.js";
import ViewPacking from "@/views/PackingManagement/PackingandReceiving/Components/ViewPacking.vue";

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
  BPagination,
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
    BPagination,
    BLink,
  },
  data() {
    return {
      show: false,
      currentPage: 1,
      selectedPacking: {},
      fields: [
        {
          key: "invoice_no",
          label: "Invoice No",
          sortable: true,
          thStyle: { width: "15%" },
          // tdClass: "custom-cell-padding",
        },
        {
          key: "eta",
          label: "ETA",
          sortable: true,
          thStyle: { width: "20%" },
          // tdClass: "custom-cell-padding",
        },
        {
          key: "flight",
          label: "Flight",
          sortable: true,

          // tdClass: "custom-cell-padding",
        },

        {
          key: "total_weight",
          label: "Total weight(Kg)",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "custom-cell-padding",
        },

        {
          key: "total_boxes",
          label: "Total no of boxes",
          sortable: true,
          thStyle: { width: "15%" },
          // tdClass: "custom-cell-padding",
        },
        {
          key: "total_supliers",
          label: "Total no of suppliers",
          sortable: true,
          thStyle: { width: "15.6%" },
          // tdClass: "custom-cell-padding",
        },
        {
          key: "total_material_costs",
          label: "Total Material Cost(Rs)",
          sortable: true,
          thStyle: { width: "15%" },
          // tdClass: "custom-cell-padding",
        },
        {
          key: "total_additional_costs",
          label: "Total Additional Cost(Rs)",
          sortable: true,
          thStyle: { width: "20%" },
          // tdClass: "custom-cell-padding",
        },

        {
          key: "action",
          label: "Action",
          sortable: true,

          // tdClass: "custom-cell-padding",
        },
      ],
    };
  },

  props: {
    shipments: Array,
  },

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
