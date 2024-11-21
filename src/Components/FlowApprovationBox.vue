<template>
  <div>
    <center>
      <img
        src="@/assets/images/information-vector-icon.jpg"
        class="delete_img"
      />
      <div class="mt-2"></div>
      <div>
        <h2 class="title">
          Are You Sure You want To <br />Update Buyer Invoice With Updated
          Values ?
        </h2>
      </div>
      <div class="mt-4"></div>
      <b-row>
        <b-col lg="6">
          <b-button class="cancel_button" variant="none" @click="closeModal()"
            ><span class="text">No</span></b-button
          >
        </b-col>

        <b-col lg="6">
          <b-button class="del_button" variant="none" @click="confirm()"
            ><span class="text">Yes</span></b-button
          >
        </b-col>
      </b-row>
    </center>
  </div>
</template>
<script>
import {
  BCard,
  BFormRadio,
  BFormGroup,
  BInputGroup,
  BFormTextarea,
  BForm,
  BTable,
  BBadge,
  BButton,
  BCol,
  BRow,
  BFormFile,
  BCardText,
  BLink,
  BFormInput,
  BContainer,
  BInputGroupAppend,
  BFormDatepicker,
  BImg,
} from "bootstrap-vue";
export default {
  components: {
    BCard,
    BFormRadio,
    BFormGroup,
    BInputGroup,
    BFormTextarea,
    BForm,
    BTable,
    BBadge,
    BButton,
    BCol,
    BRow,
    BFormFile,
    BCardText,
    BLink,
    BFormInput,
    BContainer,
    BInputGroupAppend,
    BFormDatepicker,
    BImg,
  },
  data() {
    return {};
  },

  methods: {
    closeModal() {
      this.$emit("hide", false);
    },
    confirm() {
      this.$emit("confirm", true);
    },
  },
//   props: {
//     caption: String,
//   },
};
</script>
