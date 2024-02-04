<template>
  <div>
    <b-table sticky-header="" responsive="sm" :items="items" :fields="fields">
      <template #cell(action)="data">
        <b-button variant="none" @click="openDetailsModal(data.item)">
          <b-img
            width="17px"
            src="@/assets/images/icons/Group 117855.png"
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
    </b-table>

    <b-modal
      ref="DetailsModal"
      :title="`View ${selectedItem.suplier}'s Price Rates`"
      title-class="modal_title_color"
      hide-footer
      size="lg"
    >
      <ViewPrices :selectedItem="selectedItem" />
    </b-modal>
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
          key: "suplier",
          label: "Suplier",
          sortable: true,
          thStyle: { width: "80%" },
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
          suplier: "Namal Udugama",
        },
        {
          suplier: "Namal Udugama",
        },
        {
          suplier: "Namal Udugama",
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
