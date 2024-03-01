<template>
  <div>
    <br />
    <div class="d-flex justify-content">
      <div class="completed_dot">
        <span class="text-center">1 </span>
      </div>

      <div class="step_line"></div>

      <div class="pending_dot"><span class="text-center">2</span></div>

      <div class="step_line"></div>
      <div class="pending_dot"><span class="text-center">3</span></div>

      <div class="step_line"></div>
      <div class="pending_dot"><span class="text-center">4</span></div>
    </div>
    <br />
    <div class="d-flex justify-content">
      <span class="heading_colors_active">Shipment details</span>
      <div class="heading_spaces"></div>

      <span class="heading_colors">Boxes & suppliers</span>
      <div class="heading_spaces"></div>

      <span class="heading_colors">Material cost</span>
      <div class="heading_spaces_last"></div>

      <span class="heading_colors">Additional cost</span>
    </div>

    <!-- <div class="pt-5 text-center"></div>
   
    <div class="pt-5 text-center"></div>
    <h2 class="shipment_create_header">Boxes & suppliers</h2>
    <br /> -->

    <!-- <div class="pt-5 text-center"></div> -->
    
    <br />

    <ShipmentDetailsCreateForm/>
    <!-- <MaterialCreateForm /> -->
    <!-- <AdditionalCostsCreateForm /> -->
    <!-- <PackingCreateForm /> -->
  </div>
</template>
<script>
import {
  BCard,
  BFormRadio,
  BFormGroup,
  BInputGroup,
  BFormDatepicker,
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
} from "bootstrap-vue";
import vSelect from "vue-select";
import { ValidationObserver } from "vee-validate";
import ShipmentDetailsCreateForm from "@/views/PackingManagement/Components/Forms/ShipmentDetails.vue";
import AdditionalCostsCreateForm from "@/views/PackingManagement/Components/Forms/AdditionalCosts.vue";
import MaterialCreateForm from "@/views/PackingManagement/Components/Forms/CreateMaterialform.vue";
import PackingCreateForm from "@/views/PackingManagement/Components/Forms/CreatePackingForm.vue";
import { ValidationProvider } from "vee-validate/dist/vee-validate.full.esm";
export default {
  components: {
    BCard,
    BFormDatepicker,
    BFormRadio,
    ShipmentDetailsCreateForm,
    BFormFile,
    PackingCreateForm,
    MaterialCreateForm,
    BForm,
    AdditionalCostsCreateForm,
    BFormInput,
    ValidationObserver,
    ValidationProvider,
    BFormTextarea,
    BFormTextarea,
    BFormGroup,
    BInputGroup,
    vSelect,
    BButton,
    BCol,
    BBadge,
    BTable,
    BRow,
    BContainer,
    BCardText,
    BLink,
  },
  data() {
    return {
      form: {},
    };
  },
};
</script>
