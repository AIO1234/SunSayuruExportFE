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

          <span class="button_text_styles pl-1">Create Seafood</span>
        </div>
      </b-button>
    </div>

    <!-- table -->
    <div class="mt-5">
      <SeafoodTable />
    </div>

    <!--seafood create modal -->

    <b-modal
      ref="createmodal"
      hide-footer
      title="Add Seafood"
      title-class="modal_title_color"
    >
      <AddSeafood />
    </b-modal>
  </div>
</template>
<script>
import AddSeafood from "./Components/Create.vue";
import SeafoodTable from "./Components/Table.vue";
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
  name: "Seafoods",
  data() {
    return {
      openmodal: false,
    };
  },
  components: {
    AddSeafood,
    SeafoodTable,
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
