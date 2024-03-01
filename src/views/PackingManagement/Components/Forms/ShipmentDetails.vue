<template>
  <div>
    <h2 class="shipment_create_header">Shipment details</h2>
    <br />
    <b-card>
      <b-container>
        <b-row>
          <b-col lg="6">
            <b-form-group
              label="Shipment number*"
              label-class="form_label_class"
            >
              <validation-Provider
                name="Shipment number"
                rules="required"
                v-slot="{ errors }"
              >
                <b-form-input
                  placeholder="Enter shipment number"
                  v-model="form.shipment_number"
                ></b-form-input>
                <span class="text-danger">{{ errors[0] }}</span>
              </validation-Provider>
            </b-form-group>
          </b-col>

          <b-col lg="6">
            <b-form-group label="Country*" label-class="form_label_class">
              <validation-Provider
                name="Country"
                rules="required"
                v-slot="{ errors }"
              >
                <v-select
                  v-model="selected1"
                  :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                  label="title"
                  :options="options1"
                />

                <span class="text-danger">{{ errors[0] }}</span>
              </validation-Provider>
            </b-form-group>
          </b-col>

          <b-col lg="6" class="pt-2">
            <b-form-group label="Buyer*" label-class="form_label_class">
              <validation-Provider
                name="Buyer"
                rules="required"
                v-slot="{ errors }"
              >
                <v-select
                  v-model="selected2"
                  :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                  label="title"
                  :options="options1"
                />

                <span class="text-danger">{{ errors[0] }}</span>
              </validation-Provider>
            </b-form-group>
          </b-col>
          <b-col lg="6" class="pt-2">
            <b-form-group label="Flight*" label-class="form_label_class">
              <validation-Provider
                name="Flight"
                rules="required"
                v-slot="{ errors }"
              >
                <b-form-input
                  placeholder="Enter flight number"
                  v-model="form.flight"
                ></b-form-input>
                <span class="text-danger">{{ errors[0] }}</span>
              </validation-Provider>
            </b-form-group>
          </b-col>

          <b-col lg="6" class="pt-2">
            <b-form-group label="ETA*" label-class="form_label_class">
              <validation-Provider
                name="ETA"
                rules="required"
                v-slot="{ errors }"
              >
                <b-form-datepicker
                  placeholder="Select Date"
                  v-model="form.eta"
                ></b-form-datepicker>
                <span class="text-danger">{{ errors[0] }}</span>
              </validation-Provider>
            </b-form-group>
          </b-col>

          <b-col lg="6" class="pt-2">
            <b-form-group label="AWB*" label-class="form_label_class">
              <validation-Provider
                name="AWB"
                rules="required"
                v-slot="{ errors }"
              >
                <b-form-input
                  placeholder="Enter AWB number"
                  v-model="form.awb"
                ></b-form-input>
                <span class="text-danger">{{ errors[0] }}</span>
              </validation-Provider>
            </b-form-group>
          </b-col>
        </b-row>
        <br />
        <div class="text-right">
          <b-button
            @click="validationPackingCreateForm()"
            type="submit"
            variant="none"
            class="form_submit_button"
          >
            <span class="button_text_styles">Next</span>
          </b-button>
        </div>
      </b-container>
    </b-card>
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
import { ValidationProvider } from "vee-validate/dist/vee-validate.full.esm";
export default {
  components: {
    BCard,
    BFormDatepicker,
    BFormRadio,
    BFormFile,

    BForm,

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
