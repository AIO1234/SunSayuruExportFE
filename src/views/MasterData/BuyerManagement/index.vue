<template>
  <div>
    <div class="text-right">
      <b-button
        variant="none"
        class="button_color"
        style="width: 200px"
        @click="opencreatemodal()"
      >
        <div class="d-flex justify-content-start">
          <b-img
            style="padding-top: 6px"
            width="22px"
            height="30px"
            src="@/assets/images/icons/Icons Solid.png"
          ></b-img>

          <span class="button_text_styles pl-1">Create Buyer</span>
        </div>
      </b-button>
    </div>

    <!-- table -->
    <div class="mt-5">
      <BuyerTable
        :propsCountries="countries"
        :propsQualities="qualities"
        @callQualities="callQualities"
      />
    </div>

    <!--buyer create modal -->

    <b-modal
      ref="createmodal"
      hide-footer
      title="Add Buyer"
      title-class="modal_title_color"
      no-close-on-backdrop
    >
      <AddBuyer
        :propsCountries="countries"
        :propsQualities="qualities"
        @callQualities="callQualities"
        @close="closeModal"
      />
    </b-modal>
  </div>
</template>
<script>
import AddBuyer from "./Components/Create.vue";
import BuyerTable from "./Components/Table.vue";
import Ripple from "vue-ripple-directive";
import countryApi from "@/Api/Modules/countries";
import qualityApi from "@/Api/Modules/qualities";
import {
  BFormInput,
  BModal,
  BRow,
  BCard,
  BImg,
  BCol,
  BButton,
  BInputGroup,
  BInputGroupPrepend,
} from "bootstrap-vue";
export default {
  name: "buyers",
  data() {
    return {
      openmodal: false,
      qualities: [],
      countries: [],
    };
  },
  components: {
    AddBuyer,
    BuyerTable,
    BModal,
    BInputGroup,
    BImg,
    BCard,
    BButton,
    BInputGroupPrepend,
    BFormInput,
    BRow,
    BCol,
  },
  directives: {
    Ripple,
  },
  async created() {
    await this.getAllCountries();
    await this.getAllQualities();
  },
  methods: {
    // open modal
    opencreatemodal() {
      this.$refs.createmodal.show();
    },

    // close modal
    closeModal() {
      this.$refs.createmodal.hide();
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

    // get all qualities

    async getAllQualities() {
      await this.$vs.loading({
        scale: 0.8,
      });
      const res = await qualityApi.allQualities();
      this.qualities = res.data.data;
      this.qualities.push({ quality: "Add New" });
      this.qulities = this.qualities.reverse();
      this.$vs.loading.close();
    },
    // call all qulities again
    async callQualities() {
      await this.getAllQualities();
    },
  },
};
</script>

<style></style>
