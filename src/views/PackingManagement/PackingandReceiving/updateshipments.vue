<template>
    <div>
      <br />
      <div>
        <div class="d-flex justify-content">
          <div :class="shipmentdetailsdot">
            <span class="text-center">1 </span>
          </div>
  
          <div :class="boxessline"></div>
  
          <div :class="boxesdot"><span class="text-center">2</span></div>
  
          <div :class="materialline"></div>
          <div :class="materialesdot"><span class="text-center">3</span></div>
  
          <div :class="additionalline"></div>
          <div :class="additionaldot"><span class="text-center">4</span></div>
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
      </div>
  
      <!-- <div class="pt-5 text-center"></div>
     
      <div class="pt-5 text-center"></div>
      <h2 class="shipment_create_header">Boxes & suppliers</h2>
      <br /> -->
  
      <!-- <div class="pt-5 text-center"></div> -->
  
      <br />
      <div>
        <div v-if="currentcomponent === 'ShipmentDetails'">
          <ShipmentDetailsUpdateForm @sendComponentName="next" />
        </div>
  
        <div v-if="currentcomponent === 'BoxesandSupliers'">
          <PackingUpdateForm @sendComponentName="next" @DirectBack="back" />
        </div>
  
        <div v-if="currentcomponent === 'MaterialCostForm'">
          <MaterialUpdateForm @sendComponentName="next" @DirectBack="back" />
        </div>
  
        <div v-if="currentcomponent === 'AdditionalCostForm'">
          <AdditionalCostsUpdateForm @DirectBack="back" />
        </div>
  
        <br />
        <br />
  
        <br />
      </div>
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
  import ShipmentDetailsUpdateForm from "@/views/PackingManagement/PackingandReceiving/Components/UpdateForms/ShipmentDetails.vue";
  import AdditionalCostsUpdateForm from "@/views/PackingManagement/PackingandReceiving/Components/UpdateForms/AdditionalCosts.vue";
  import MaterialUpdateForm from "@/views/PackingManagement/PackingandReceiving/Components/UpdateForms/UpdateMaterialform.vue";
  import PackingUpdateForm from "@/views/PackingManagement/PackingandReceiving/Components/UpdateForms/UpdatePackingForm.vue";
  import { ValidationProvider } from "vee-validate/dist/vee-validate.full.esm";
  export default {
    components: {
      BCard,
      BFormDatepicker,
      BFormRadio,
      ShipmentDetailsUpdateForm,
      BFormFile,
      PackingUpdateForm,
      MaterialUpdateForm,
      BForm,
      AdditionalCostsUpdateForm,
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
        // dots
        currentcomponent: "ShipmentDetails",
        shipmentdetailsdot: "completed_dot",
        boxesdot: "pending_dot",
        materialesdot: "pending_dot",
        additionaldot: "pending_dot",
  
        // lines
        boxessline: "step_line",
        materialline: "step_line",
        additionalline: "step_line",
      };
    },
  
    methods: {
      next(value) {
        if (value === "ShipmentDetails") {
          this.currentcomponent = "BoxesandSupliers";
        } else if (value === "BoxesandSupliers") {
          this.currentcomponent = "MaterialCostForm";
        } else if (value === "MaterialCostForm") {
          this.currentcomponent = "AdditionalCostForm";
        }
        this.changeDotStatus();
        this.changeLineStatus();
      },
      back() {
        if (this.currentcomponent === "BoxesandSupliers") {
          this.currentcomponent = "ShipmentDetails";
        } else if (this.currentcomponent === "MaterialCostForm") {
          this.currentcomponent = "BoxesandSupliers";
        } else if (this.currentcomponent === "AdditionalCostForm") {
          this.currentcomponent = "MaterialCostForm";
        }
        this.changeDotStatus();
        this.changeLineStatus();
      },
  
      // change dot color & background in the stepper
      changeDotStatus() {
        if (this.currentcomponent === "ShipmentDetails") {
          this.shipmentdetailsdot = "completed_dot";
          this.boxesdot = "pending_dot";
          this.materialesdot = "pending_dot";
          this.additionaldot = "pending_dot";
        }
        if (this.currentcomponent === "BoxesandSupliers") {
          this.shipmentdetailsdot = "completed_dot";
          this.boxesdot = "completed_dot";
          this.materialesdot = "pending_dot";
          this.additionaldot = "pending_dot";
        } else if (this.currentcomponent === "MaterialCostForm") {
          this.shipmentdetailsdot = "completed_dot";
          this.boxesdot = "completed_dot";
          this.materialesdot = "completed_dot";
          this.additionaldot = "pending_dot";
        } else if (this.currentcomponent === "AdditionalCostForm") {
          this.shipmentdetailsdot = "completed_dot";
          this.boxesdot = "completed_dot";
          this.materialesdot = "completed_dot";
          this.additionaldot = "completed_dot";
        }
      },
  
      // change line color & background in the stepper
  
      changeLineStatus() {
        if (this.currentcomponent === "ShipmentDetails") {
          this.boxessline = "step_line";
          this.materialline = "step_line";
          this.additionalline = "step_line";
        } else if (this.currentcomponent === "BoxesandSupliers") {
          this.boxessline = "step_line_active";
          this.materialline = "step_line";
          this.additionalline = "step_line";
        } else if (this.currentcomponent === "MaterialCostForm") {
          this.boxessline = "step_line_active";
          this.materialline = "step_line_active";
          this.additionalline = "step_line";
        } else if (this.currentcomponent === "AdditionalCostForm") {
          this.boxessline = "step_line_active";
          this.materialline = "step_line_active";
          this.additionalline = "step_line_active";
        }
      },
    },
  };
  </script>
  