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
        <!-- action commumn -->
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
        <!-- qualities collumn -->
        <template #cell(qualities)="data">
          <div v-for="item in data.value" :key="item">{{ item.quality }}</div>
        </template>

        <!-- country collumn -->
        <template #cell(country)="data">
          {{ data.value.name }}
        </template>
      </b-table>
    </b-card>

    <b-modal
      ref="UpdateModal"
      title="Edit Buyer"
      title-class="modal_title_color"
      hide-footer
    >
      <BuyerEdit
        :selectedItem="selectedBuyer"
        :propsCountries="propsCountries"
        :propsQualities="propsQualities"
        @callQualities="callQualities"
        @close="closeModal"
      />
    </b-modal>
  </div>
</template>

<script>
import BuyerEdit from "./Edit.vue";
import buyerApi from "@/Api/Modules/buyers";
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
  name: "BuyerTable",
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
          key: "country",
          label: "Country",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "td-style",
        },
        {
          key: "qualities",
          label: "Assigned Qualities",
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
      buyers: [],
    };
  },
  props: {
    propsCountries: Array,
    propsQualities: Array,
  },
  async created() {
    await this.getAllBuyers();
  },
  methods: {
    setCellPadding(value, key, item) {
      // Add a custom class to table cells based on your requirements
      return "custom-cell-padding";
    },

    // get all buyers

    async getAllBuyers() {
      await this.$vs.loading({
        scale: 0.8,
      });
      const res = await buyerApi.buyerswithqualities();
      this.buyers = res.data.data;
      this.$vs.loading.close();
    },

    // open edit modal
    openUpdateModal(item) {
      this.$refs.UpdateModal.show();
      this.selectedBuyer = item;
    },

    // close edit modal
    async closeModal() {
      this.$refs.UpdateModal.hide();
      await this.getAllBuyers();
    },

    callQualities() {
      this.$emit("callQualities", true);
    },
  },
};
</script>

<style>
.custom-cell-padding {
  height: 70px; /* Set your desired padding value */
}
</style>
