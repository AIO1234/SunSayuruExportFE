<template>
  <div>
    <!-- buyers table -->
    <b-card class="mt-5">
      <b-table
        sticky-header=""
        responsive="sm"
        :items="buyers"
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
      title="Edit Country"
      title-class="modal_title_color"
      hide-footer
    >
      <BuyerEdit :selectedItem="selectedBuyer" />
    </b-modal>
  </div>
</template>

<script>
import BuyerEdit from "./Edit.vue";
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
    BuyerEdit,
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
      selectedBuyer: {},
      show: false,
      fields: [
        {
          key: "code",
          label: "Code",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "td-style",
        },
        {
          key: "name",
          label: "Name",
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
      buyers: [
        {
          name: "ALEX",
          code: "PSP",
        },
        {
          name: "TSENG",
          code: "TW",
        },
        {
          name: "RANDY",
          code: "PSP",
        },
        {
          name: "ICE",
          code: "CS",
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
      this.selectedBuyer = item;
    },
  },
};
</script>

<style>
.custom-cell-padding {
  height: 70px; /* Set your desired padding value */
}
</style>
