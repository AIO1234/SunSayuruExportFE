<template>
  <div>
    <!-- country table -->
    <b-card class="mt-5">
      <b-table
        sticky-header=""
        responsive="sm"
        :items="qualities"
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
      title="Edit Quality"
      title-class="modal_title_color"
      hide-footer
    >
      <QualityEdit :selectedItem="selectedQuality" />
    </b-modal>
  </div>
</template>

<script>
import QualityEdit from "./Edit.vue";
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
  name: "CountryTable",
  components: {
    BFormInput,
    QualityEdit,
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
      selectedQuality: {},
      show: false,
      fields: [
        {
          key: "quality",
          label: "Quality",
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
      qualities: [
        {
          quality: "A+",
        },
        {
          quality: "A++",
        },
        {
          quality: "",
        },
        {
          quality: "B",
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
      this.selectedQuality = item;
    },
  },
};
</script>

<style>
.custom-cell-padding {
  height: 70px; /* Set your desired padding value */
}
</style>
