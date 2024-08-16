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
      <BuyerTable />
    </div>

    <!--buyer create modal -->

    <b-modal
      ref="createmodal"
      hide-footer
      scrollable
      title="Add Buyer"
      title-class="modal_title_color"
    >
      <AddBuyer />
    </b-modal>
  </div>
</template>
<script>
import AddBuyer from "./Components/Create.vue";
import BuyerTable from "./Components/Table.vue";
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
  name: "buyers",
  data() {
    return {
      openmodal: false,
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
  methods: {
    opencreatemodal() {
      this.$refs.createmodal.show();
    },
  },
};
</script>

<style></style>
