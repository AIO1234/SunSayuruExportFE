<template>
  <div>
    <!-- Airfreight table -->
    <b-card class="mt-5">
      <b-table
        sticky-header=""
        responsive="sm"
        :items="airfreights"
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
      title="Edit Airfreight"
      title-class="modal_title_color"
      hide-footer
      no-close-on-backdrop
    >
      <AirfreightEdit :selectedItem="selectedAirfreight" @close="closeModal" />
    </b-modal>
  </div>
</template>

<script>
import AirfreightEdit from "./Edit.vue";
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
import airfreightsApi from "@/Api/Modules/airefreights";
export default {
  name: "AirfreightTable",
  components: {
    BFormInput,
    AirfreightEdit,
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
      selectedAirfreight: {},
      show: false,
      fields: [
        {
          key: "company_name",
          label: "Airfreight Company",
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
      airfreights: [],
    };
  },
  async created() {
    await this.getAllAirfreights();
  },
  methods: {
    setCellPadding(value, key, item) {
      // Add a custom class to table cells based on your requirements
      return "custom-cell-padding";
    },

    // get all airfreights

    async getAllAirfreights() {
      await this.$vs.loading({
        scale: 0.8,
      });
      const res = await airfreightsApi.allAirfreids();
      this.airfreights = res.data.data;
      this.$vs.loading.close();
    },

    // open edit modal
    openUpdateModal(item) {
      this.$refs.UpdateModal.show();
      this.selectedAirfreight = item;
    },

    // close edit modal
    async closeModal() {
      this.$refs.UpdateModal.hide();
      await this.getAllAirfreights();
    },
  },
};
</script>

<style>
.custom-cell-padding {
  height: 70px; /* Set your desired padding value */
}
</style>
