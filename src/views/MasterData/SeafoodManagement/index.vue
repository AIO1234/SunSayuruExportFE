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
      <SeafoodTable
        :propGradings="gradings"
        @close="closeModal"
        @callGradings="callGradings"
      />
    </div>

    <!--seafood create modal -->

    <b-modal
      ref="createmodal"
      hide-footer
      title="Add Seafood"
      title-class="modal_title_color"
      no-close-on-backdrop
    >
      <AddSeafood
        :propGradings="gradings"
        @close="closeModal"
        @callGradings="callGradings"
      />
    </b-modal>
  </div>
</template>
<script>
import AddSeafood from "./Components/Create.vue";
import SeafoodTable from "./Components/Table.vue";
import Ripple from "vue-ripple-directive";
import gradingApi from "@/Api/Modules/gradings";
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
      gradings: [],
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
  async created() {
    await this.getAllGradings();
  },
  methods: {
    // create modal
    opencreatemodal() {
      this.$refs.createmodal.show();
    },

    // close modal
    closeModal() {
      this.$refs.createmodal.hide();
    },

    // get all gradings

    async getAllGradings() {
      await this.$vs.loading({
        scale: 0.8,
      });
      const res = await gradingApi.allGradings();
      this.gradings = res.data.data;
      this.gradings.push({ grading: "Add New" });
      this.gradings = this.gradings.reverse();
      this.$vs.loading.close();
    },

    // call all gradings

    async callGradings() {
      await this.getAllGradings();
    },
  },
};
</script>

<style></style>
