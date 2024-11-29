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
      <template #cell(delete)="data">
        <b-row>
          <b-col lg="12">
            <!-- delete button -->

            <b-button
              variant="none"
              v-if="
                data.item.data_completed_status === 'Shipment_Data_Completed' ||
                data.item.data_completed_status === 'Boxes_Data_Completed'
              "
              @click="openShipmentDeleteModal(data.item)"
            >
              <b-img
                width="17px"
                src="@/assets/images/icons/Group 59.png"
              ></b-img>
            </b-button>

            <!-- if cant delete -->
            <b-badge v-else variant="danger">Disabled</b-badge>
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
    <!-- update modal -->
    <b-modal
      ref="UpdateModal"
      title="Edit Packing"
      title-class="modal_title_color"
      hide-footer
      size="xl"
    >
      <PackingUpdateForm :selectedPacking="selectedPacking" />
    </b-modal>

    <!-- shipment summary model -->
    <b-modal
      ref="DetailsModal"
      :title="`View packing box number ${selectedPacking.box_number}`"
      title-class="modal_title_color"
      hide-footer
      size="lg"
    >
      <ViewPacking :selectedPacking="selectedPacking" />
    </b-modal>

    <!-- delete shipment modal -->
    <b-modal
      ref="DeleteModal"
      hide-footer
      title-class="modal_title_color"
      no-close-on-backdrop
    >
      <ShipmentDeleteAlert
        @confirm="confirmShipmentDelete"
        @hide="DeclineShipmentDelete"
      />
    </b-modal>
  </div>
</template>

<script>
import PackingUpdateForm from "@/views/PackingManagement/PackingandReceiving/Components/UpdatePackingForm.vue";
import shipmentApi from "@/Api/Modules/shipments.js";
import ViewPacking from "@/views/PackingManagement/PackingandReceiving/Components/ViewPacking.vue";
import ShipmentDeleteAlert from "@/Components/ShipmentDeleteAlert.vue";

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
    ShipmentDeleteAlert,
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
      selectedShipment: {},
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
        {
          key: "delete",
          label: "Delete",
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
    // open update modal
    openUpdateModal(data) {
      this.$refs.UpdateModal.show();
      this.selectedPacking = data;
    },

    // open details
    openDetailsModal(data) {
      this.$refs.DetailsModal.show();
      this.selectedPacking = data;
    },

    // open shipement delete modal
    openShipmentDeleteModal(item) {
      this.$refs.DeleteModal.show();
      this.selectedShipment = item;
    },

    // confirm shipement delete approvation
    async confirmShipmentDelete() {
      await this.$vs.loading({
        scale: 0.8,
      });
      await shipmentApi
        .deleteShipment(this.selectedShipment.id)
        .then(() => {
          this.$vs.loading.close();
          this.$refs.DeleteModal.hide();
          this.$emit("loaddata");

          // remove current shipment in locl storage if deleting shipment is equal to that
          if (
            this.selectedShipment.id ==
            localStorage.getItem("currentShipmentId")
          ) {
            localStorage.removeItem("currentShipmentId");
          }
        })
        .catch(() => {
          this.$vs.loading.close();
        });
    },

    // cancel shipment delete approvation

    DeclineShipmentDelete() {
      // hide delete modal
      this.$refs.DeleteModal.hide();
    },
  },
};
</script>

<style>
.custom-cell-padding {
  height: 70px; /* Set your desired padding value */
}
</style>
