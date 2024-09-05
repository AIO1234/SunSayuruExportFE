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

          <span class="button_text_styles pl-1">Create Country</span>
        </div>
      </b-button>
    </div>

    <!-- table -->
    <div class="mt-5">
      <CountryTable />
    </div>

    <!--country create modal -->

    <b-modal
      ref="createmodal"
      hide-footer
      scrollable
      title="Add Country"
      title-class="modal_title_color"
      no-close-on-backdrop
    >
      <AddCountry @close="closeModal" />
    </b-modal>
  </div>
</template>
<script>
import AddCountry from "./Components/Create.vue";
import CountryTable from "./Components/Table.vue";
import Ripple from "vue-ripple-directive";
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
  name: "countries",
  data() {
    return {
      openmodal: false,
    };
  },
  components: {
    AddCountry,
    CountryTable,
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
  methods: {
    // open craete modal
    opencreatemodal() {
      this.$refs.createmodal.show();
    },

    // close create modal

    closeModal() {
      this.$refs.createmodal.hide();
    },
  },
};
</script>

<style></style>
