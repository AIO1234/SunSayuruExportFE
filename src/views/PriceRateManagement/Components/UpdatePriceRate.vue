<template>
  <div>
    <div>
      <b-form @submit.prevent>
        <validation-observer ref="PriceUpdateValidation">
          <b-row>
            <b-col md="12" class="mb-1">
              <b-form-group
                label="Seafood Type*"
                label-class="form_label_class"
              >
                <validation-Provider
                  name="Seafood Type"
                  rules="required"
                  v-slot="{ errors }"
                >
                  <v-select
                    v-model="seafoodtype"
                    :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                    label="title"
                    :options="options"
                  />

                  <span class="text-danger">{{ errors[0] }}</span>
                </validation-Provider>
              </b-form-group>
            </b-col>

            <b-col md="12" class="mb-1">
              <b-form-group label="Grading*" label-class="form_label_class">
                <validation-Provider
                  name="Grading"
                  rules="required"
                  v-slot="{ errors }"
                >
                  <v-select
                    v-model="grading"
                    :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                    label="title"
                    :options="options1"
                  />
                  <span class="text-danger">{{ errors[0] }}</span>
                </validation-Provider>
              </b-form-group>
            </b-col>

            <b-col md="12" class="mb-1">
              <b-form-group label="Quality*" label-class="form_label_class">
                <validation-Provider
                  name="Quality"
                  rules="required"
                  v-slot="{ errors }"
                >
                  <v-select
                    v-model="quality"
                    :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                    label="title"
                    :options="options2"
                  />
                  <span class="text-danger">{{ errors[0] }}</span>
                </validation-Provider>
              </b-form-group>
            </b-col>

            <b-col md="12" class="mb-1">
              <b-form-group label="Price Rate*" label-class="form_label_class">
                <validation-Provider
                  name="Price Rate"
                  rules="required"
                  v-slot="{ errors }"
                >
                  <b-form-input
                    placeholder="Enter price rate"
                    v-model="form.pricerate"
                  ></b-form-input>
                  <span class="text-danger">{{ errors[0] }}</span>
                </validation-Provider>
              </b-form-group>
            </b-col>

            <br /><br />
            <b-col md="12" class="mb-1 text-center">
              <b-button
                @click="validationPriceRateUpdateForm()"
                type="submit"
                variant="none"
                class="form_submit_button"
              >
                <span class="button_text_styles">Edit</span>
              </b-button>
            </b-col>
          </b-row>
        </validation-observer>
      </b-form>
    </div>
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
} from "bootstrap-vue";
import vSelect from "vue-select";
import { ValidationObserver } from "vee-validate";
import { ValidationProvider } from "vee-validate/dist/vee-validate.full.esm";

export default {
  name: "AddUser",
  components: {
    BCard,
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
      seafoodtype: {
        title: "Select Type",
      },
      grading: {
        title: "Select Type",
      },
      quality: {
        title: "Select Type",
      },
      options: [{ title: "Kelawalla" }, { title: "Thalapath" }],
      options1: [{ title: "50 - 60" }, { title: "70 -80" }],
      options2: [{ title: "A+" }, { title: "A-" }],
    };
  },
  props: {
    selectedPrice: Object,
  },
  created() {
    this.form = this.selectedPrice;
    this.seafoodtype = this.selectedPrice.seafoodtype;
    this.grading = this.selectedPrice.grading;
    this.quality = this.selectedPrice.quality;
  },
  methods: {
    async validationPriceRateUpdateForm() {
      if (await this.$refs.PriceUpdateValidation.validate()) {
      }
    },
  },
};
</script>
<style lang="scss">
@import "@core/scss/vue/libs/vue-select.scss";
</style>
