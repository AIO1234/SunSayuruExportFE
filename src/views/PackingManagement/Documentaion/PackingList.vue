<template>
  <div>
    <b-card>
      <b-table
        sticky-header=""
        responsive="sm"
        :items="shipmentsarray"
        :fields="fields"
        per-page="20"
        :current-page="currentPage"
      >
        <template #cell(action)="data">
          <b-button
            variant="none"
            @click="
              $router.push(
                `/packinglistinner/${data.item.id}/${data.item.invoice_no}`
              )
            "
          >
            <b-img
              width="17px"
              src="@/assets/images/icons/Group 117855.png"
            ></b-img>
          </b-button>
        </template>
      </b-table>
    </b-card>
    <b-row>
      <b-col lg="4"></b-col>
      <b-col lg="8">
        <div class="mt-1">
          <b-pagination
            v-model="currentPage"
            :total-rows="shipmentsarray.length"
            per-page="20"
            first-text="First"
            prev-text="Prev"
            next-text="Next"
            last-text="Last"
          ></b-pagination>
        </div>
      </b-col>
    </b-row>
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
  BPagination,
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
    BPagination,
  },
  data() {
    return {
      currentPage: 1,
      show: false,
      selectedItem: {},
      fields: [
        {
          key: "invoice_no",
          label: "Invoice No",
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
    };
  },

  props: {
    shipmentsarray: Array,
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
