<template>
  <div>
    <!-- Grading table -->
    <b-card class="mt-5">
      <b-table
        sticky-header=""
        responsive="sm"
        :items="gradings"
        :fields="fields"
        per-page="20"
        :current-page="currentPage"
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
      <!-- paginationn -->
      <b-row class="pt-2">
        <b-col lg="4"></b-col>
        <b-col lg="8">
          <div class="mt-1">
            <b-pagination
              v-model="currentPage"
              :total-rows="gradings.length"
              per-page="20"
              first-text="First"
              prev-text="Prev"
              next-text="Next"
              last-text="Last"
            ></b-pagination>
          </div>
        </b-col>
      </b-row>
    </b-card>

    <b-modal
      ref="UpdateModal"
      title="Edit Grading"
      title-class="modal_title_color"
      hide-footer
      no-close-on-backdrop
    >
      <GradingEdit :selectedItem="selectedGrading" @close="closeModal" />
    </b-modal>
  </div>
</template>

<script>
import GradingEdit from "./Edit.vue";
import {
  BPagination,
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
import gradingApi from "@/Api/Modules/gradings";
export default {
  name: "GradingTable",
  components: {
    BPagination,
    BFormInput,
    GradingEdit,
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
      currentPage: "",
      selectedGrading: {},
      show: false,
      fields: [
        {
          key: "grading",
          label: "Grading Name",
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
      gradings: [],
    };
  },
  async created() {
    await this.getAllGradings();
  },
  methods: {
    setCellPadding(value, key, item) {
      // Add a custom class to table cells based on your requirements
      return "custom-cell-padding";
    },

    // get all gradings

    async getAllGradings() {
      await this.$vs.loading({
        scale: 0.8,
      });
      const res = await gradingApi.allGradings();
      this.gradings = res.data.data;
      this.gradings = this.gradings.reverse();
      this.$vs.loading.close();
    },

    // update modal
    openUpdateModal(item) {
      this.$refs.UpdateModal.show();
      this.selectedGrading = item;
    },

    // close modal

    async closeModal() {
      this.$refs.UpdateModal.hide();
      await this.getAllGradings();
    },
  },
};
</script>

<style>
.custom-cell-padding {
  height: 70px; /* Set your desired padding value */
}
</style>
