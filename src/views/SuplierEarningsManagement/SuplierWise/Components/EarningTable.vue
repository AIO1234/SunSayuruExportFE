<template>
  <div>
    <b-table sticky-header="" responsive="sm" :items="items" :fields="fields">
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
import ViewEarnings from "@/views/SuplierEarningsManagement/SuplierWise/Components/ViewEarnings.vue";
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
          key: "suplierno",
          label: "Suplier No",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "custom-cell-padding",
        },

        {
          key: "totalcost",
          label: "Total Cost($)",
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
          suplierno: "Nimal",
          totalcost: "12000.00",
        },
       {
          suplierno: "Nimal",
          totalcost: "12000.00",
        },
       {
          suplierno: "Nimal",
          totalcost: "12000.00",
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
