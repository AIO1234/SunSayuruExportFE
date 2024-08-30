<template>
  <div>
    <!-- country table -->
    <b-card class="mt-5">
      <b-table
        sticky-header=""
        responsive="sm"
        :items="countries"
        :fields="countryfields"
      >
        <!-- buttons -->
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
        <!-- buyers -->
        <template #cell(buyers)="data">
          <b-button
            variant="flat-none"
            @click="showBuyerModal(data.item.buyers)"
          >
            <b-img
              width="17px"
              src="@/assets/images/icons/Group 117855.png"
            ></b-img>
          </b-button>
        </template>
      </b-table>
    </b-card>

    <!-- modals -->

    <!-- update modal -->
    <b-modal
      ref="UpdateModal"
      title="Edit Country"
      title-class="modal_title_color"
      hide-footer
      no-close-on-backdrop
    >
      <CountryEdit :selectedItem="selectedCountry" @close="closeModal" />
    </b-modal>

    <!-- buyers modal -->

    <b-modal
      ref="showBuyers"
      title="Assigned Buyers"
      title-class="modal_title_color"
      hide-footer
      no-close-on-backdrop
    >
      <b-table
        sticky-header=""
        responsive="sm"
        :items="buyers"
        :fields="buyerfields"
      >
      </b-table>
    </b-modal>
  </div>
</template>

<script>
import CountryEdit from "./Edit.vue";
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
import countryApi from "@/Api/Modules/countries";
export default {
  name: "CountryTable",
  components: {
    BFormInput,
    CountryEdit,
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
      selectedCountry: {},
      show: false,
      showBuyers: false,
      countryfields: [
        {
          key: "name",
          label: "Name",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "td-style",
        },

        {
          key: "buyers",
          label: "Assigned Buyers",
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
      buyerfields: [
        {
          key: "code",
          label: "Code",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "td-style",
        },

        {
          key: "name",
          label: "Buyer Name",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "td-style",
        },
      ],
      countries: [],

      buyers: [],
    };
  },
  async created() {
    await this.getAllCountries();
  },
  methods: {
    setCellPadding(value, key, item) {
      // Add a custom class to table cells based on your requirements
      return "custom-cell-padding";
    },

    // get all countries

    async getAllCountries() {
      await this.$vs.loading({
        scale: 0.8,
      });
      const res = await countryApi.allCountriesWitBuyers();
      this.countries = res.data.data;
      this.$vs.loading.close();
    },

    // open edit modal
    openUpdateModal(item) {
      this.$refs.UpdateModal.show();
      this.selectedCountry = item;
    },

    // close edit modal
    async closeModal() {
      this.$refs.UpdateModal.hide();
      await this.getAllCountries();
    },

    // open buyers modal
    showBuyerModal(item) {
      this.$refs.showBuyers.show();
      this.buyers = item;
    },
  },
};
</script>

<style>
.custom-cell-padding {
  height: 70px; /* Set your desired padding value */
}
</style>
