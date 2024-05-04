<template>
  <div>
    <b-card>
      <b-table
        sticky-header=""
        responsive="sm"
        :items="shipments"
        :fields="fields"
      >
        <template #cell(action)="data">
          <b-row no-gutters>
            <b-col lg="1">
              <b-button
                variant="none"
                @click="$router.push(`/buyerinvoiceinner/${data.item.id}/${data.item.shipment_no}`)"
              >
                <b-img
                  width="17px"
                  src="@/assets/images/icons/Group 117855.png"
                ></b-img>
              </b-button>
            </b-col>
            <b-col lg="2">
              <b-button
                variant="none"
                @click="$router.push(`/editbuyerinvoice1/${data.item.id}/${data.item.shipment_no}`)"
              >
                <b-img
                  width="17px"
                  src="@/assets/images/icons/Group 101.png"
                ></b-img>
              </b-button>
            </b-col>
          </b-row>
        </template>
      </b-table>
    </b-card>
    <!-- <b-modal
          ref="DetailsModal"
          :title="`View ${selectedItem.suplier}'s Price Rates`"
          title-class="modal_title_color"
          hide-footer
          size="lg"
        >
          <ViewPrices :selectedItem="selectedItem" />
        </b-modal> -->
  </div>
</template>

<script>
import ViewPrices from "@/views/PriceRateManagement/Components/ViewRates.vue";
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
  name: "PriceRateTable",
  components: {
    BCard,
    ViewPrices,
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
          key: "shipment_no",
          label: "Shipment no",
          sortable: true,

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
          // thStyle: { width: "2%" },
          // tdClass: "custom-cell-padding",
        },
      ],
      shipments: [],
    };
  },
  props: {
    shipmentsarray: Array,
  },
  created() {
    this.shipments = this.shipmentsarray;
  },
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
