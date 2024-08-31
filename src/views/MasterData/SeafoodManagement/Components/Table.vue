<template>
  <div>
    <!-- Seafood table -->
    <b-card class="mt-5">
      <b-table
        sticky-header=""
        responsive="sm"
        :items="seafoods"
        :fields="fields"
        per-page="20"
        :current-page="currentPage"
      >
        <!-- action -->
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

        <!-- gradings -->
        <template #cell(gradings)="data">
          <div v-for="item in data.value" :key="item">{{ item.grading }}</div>
        </template>
      </b-table>
      <!-- pagination -->
      <b-row class="pt-2">  
        <b-col lg="4"></b-col>
        <b-col lg="8">
          <div class="mt-1">
            <b-pagination
              v-model="currentPage"
              :total-rows="seafoods.length"
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
      title="Edit Seafood"
      title-class="modal_title_color"
      hide-footer
      no-close-on-backdrop
    >
      <SeafoodEdit
        :selectedItem="selectedSeafood"
        :propGradings="propGradings"
        @callGradings="callGradings"
        @close="closeModal"
      />
    </b-modal>
  </div>
</template>

<script>
import SeafoodEdit from "./Edit.vue";
import seafoodsApi from "@/Api/Modules/seafoods";
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
  BPagination,
} from "bootstrap-vue";
export default {
  name: "SeafoodTable",
  components: {
    BFormInput,
    SeafoodEdit,
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
    BPagination,
  },
  data() {
    return {
      currentPage: "",
      selectedSeafood: {},
      show: false,
      fields: [
        {
          key: "type",
          label: "Seafood Type",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "td-style",
        },

        {
          key: "gradings",
          label: "Assigned Gradings",
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
      seafoods: [],
    };
  },
  async created() {
    await this.getAllSeafoods();
  },
  props: {
    propGradings: Array,
  },
  methods: {
    setCellPadding(value, key, item) {
      // Add a custom class to table cells based on your requirements
      return "custom-cell-padding";
    },
    openUpdateModal(item) {
      this.$refs.UpdateModal.show();
      this.selectedSeafood = item;
    },

    // get all seafoods

    async getAllSeafoods() {
      await this.$vs.loading({
        scale: 0.8,
      });
      const res = await seafoodsApi.allSeafoodsWithGradings();
      this.seafoods = res.data.data;
      this.$vs.loading.close();
    },
    // close edit modal
    async closeModal() {
      this.$refs.UpdateModal.hide();
      await this.getAllSeafoods();
    },
    // emit the getallgrading index
    callGradings() {
      this.$emit("callGradings", true);
    },
  },
};
</script>

<style>
.custom-cell-padding {
  height: 70px; /* Set your desired padding value */
}
</style>
