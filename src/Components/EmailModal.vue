<template>
  <div>
    <h2 class="email-modal text-center">{{ title }}</h2>

    <div class="pt-3"></div>
    <span class="email-modal-shipment"
      >Invoice Number - {{ invoice.invoice_no }}</span
    >

    <div class="pt-3"></div>

    <b-form-group label="Enter Email*" label-class="form_label_class">
      <br />
      <b-form-input placeholder="Enter Email" v-model="email"></b-form-input>
    </b-form-group>
    <br />

    <b-form-group label="Upload a file*" label-class="form_label_class">
      <br />
      <b-form-file></b-form-file>
    </b-form-group>

    <div class="pt-2 d-flex justify-content-center">
      <b-button
        @click="validationPriceRateUpdateForm()"
        type="submit"
        variant="none"
        class="email_modal_submit_button"
      >
        <span class="button_text"> Submit</span>
      </b-button>
    </div>
  </div>
</template>
<script>
import {
  BFormInput,
  BFormFile,
  BModal,
  BCard,
  BTable,
  BButton,
  BRow,
  BImg,
  BCardText,
  BFormGroup,
  BLink,
  BContainer,
} from "bootstrap-vue";
export default {
  components: {
    BModal,
    BButton,
    BFormInput,
    BFormFile,
    BCard,
    BTable,
    BFormGroup,
    BRow,
    BImg,
    BCardText,

    BLink,
    BContainer,
  },
  props: {
    title: String,
    invoice: Object,
  },
};
</script>
