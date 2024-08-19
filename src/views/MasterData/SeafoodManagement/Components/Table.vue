<template>
  <div>
    <!-- Seafood table -->
    <b-card class="mt-5">
      <b-table
        sticky-header=""
        responsive="sm"
        :items="seafoods"
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

        <template #cell(gradings)="data">
          <b-row no-gutters>
            <b-col lg="4">
              <b-button variant="none">
                <b-img
                  width="17px"
                  src="@/assets/images/icons/Group 117855.png"
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
      title="Edit Seafood"
      title-class="modal_title_color"
      hide-footer
    >
      <SeafoodEdit :selectedItem="selectedSeafood" />
    </b-modal>
  </div>
</template>

<script>
import SeafoodEdit from "./Edit.vue";
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
  },
  data() {
    return {
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
      seafoods: [
        {
          type: "KING FISH",
        },
        {
          type: "KING FISH",
        },
        {
          type: "KING FISH",
        },
        {
          type: "KING FISH",
        },
      ],
    };
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
  },
};
</script>

<style>
.custom-cell-padding {
  height: 70px; /* Set your desired padding value */
}
</style>
