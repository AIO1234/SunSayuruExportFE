<template>
  <div>
    <!-- suplier table -->
    <b-card class="mt-5">
      <b-table
        sticky-header=""
        responsive="sm"
        :items="supliers"
        :fields="fields"
      >
        <template #cell(action)="data">
          <b-row no-gutters>
            <b-col lg="4">
              <b-button variant="flat-none" @click="openUpdateModal(data.item)">
                <b-img
                  width="17px"
                  src="@/assets/images/icons/Group 101.png"
                ></b-img>
              </b-button>
            </b-col>
            <b-col lg="4"> </b-col>
          </b-row>
        </template>
      </b-table>
    </b-card>

    <b-modal
      ref="UpdateModal"
      title="Edit Suplier"
      title-class="modal_title_color"
      hide-footer
    >
      <SuplierEdit :selectedItem="selectedSuplier" @close="closeModal" />
    </b-modal>
  </div>
</template>

<script>
import suplierApi from "@/Api/Modules/supliers";
import SuplierEdit from "./Edit.vue";
import {
  BModal,
  BCard,
  BTable,
  BBadge,
  BInputGroup,
  BInputGroupPrepend,
  BFormInput,
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
  name: "SuplierTable",
  components: {
    BFormInput,
    SuplierEdit,
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
    BInputGroup,
    BInputGroupPrepend,
  },
  data() {
    return {
      selectedSuplier: {},
      show: false,
      fields: [
        {
          key: "name",
          label: "Suplier Name",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "td-style",
        },
        {
          key: "address",
          label: "Suplier Address",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "td-style",
        },
        {
          key: "mobile_number",
          label: "Suplier Mobile",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "td-style",
        },
        {
          key: "action",
          label: "Action",
          sortable: true,
          thStyle: { width: "15%" },
          // tdClass: "td-style",
        },
      ],
      supliers: [],
    };
  },
  async created() {
    await this.getAllSupliers();
  },
  methods: {
    // get all supliers

    async getAllSupliers() {
      await this.$vs.loading({
        scale: 0.8,
      });
      const res = await suplierApi.allSupliers();
      this.supliers = res.data.data;
      this.$vs.loading.close();
    },
    setCellPadding(value, key, item) {
      // Add a custom class to table cells based on your requirements
      return "custom-cell-padding";
    },

    // open edit modal
    openUpdateModal(item) {
      this.$refs.UpdateModal.show();
      this.selectedSuplier = item;
    },
    // close edit modal

    // close modal

    async closeModal() {
      this.$refs.UpdateModal.hide();
      await this.getAllSupliers();
    },
  },
};
</script>

<style>
.custom-cell-padding {
  height: 70px; /* Set your desired padding value */
}
</style>
