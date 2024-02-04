<template>
  <div>
    <br />
    <b-table sticky-header="" responsive="sm" :items="items" :fields="fields">
      <template #cell(action)="data">
        <b-row no-gutters>
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
      title="Edit Price Rate"
      title-class="modal_title_color"
      hide-footer
      size="lg"
    >
      <UpdatePrice :selectedPrice="selectedPrice" />
    </b-modal>
  </div>
</template>
<script>
import UpdatePrice from "@/views/PriceRateManagement/Components/UpdatePriceRate.vue";
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
  data() {
    return {
      selectedPrice: {},
      fields: [
        {
          key: "seafoodtype",
          label: "Seafood type",
          sortable: true,

          // tdClass: "custom-cell-padding",
        },

        {
          key: "grading",
          label: "Grading (Kg)",
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
          key: "pricerate",
          label: "Price rate($)",
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
      items: [
        {
          seafoodtype: "Prawns",
          grading: "50 - 60",
          quality: "A+",
          pricerate: "100",
        },
        {
          seafoodtype: "Prawns",
          grading: "50 - 60",
          quality: "A+",
          pricerate: "100",
        },
        {
          seafoodtype: "Prawns",
          grading: "50 - 60",
          quality: "A+",
          pricerate: "100",
        },
      ],
    };
  },
  components: {
    UpdatePrice,
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
  props: {
    selectedItem: Object,
  },

  methods: {
    openUpdateModal(data) {
      this.$refs.UpdateModal.show();
      this.selectedPrice = data;
    },
  },
};
</script>
