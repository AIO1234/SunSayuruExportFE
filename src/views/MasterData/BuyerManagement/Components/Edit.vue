<template>
  <div>
    <div class="mt-2">
      <b-form @submit.prevent>
        <validation-observer ref="BuyerUpdateValidation">
          <b-row>
            <!-- buyer code -->
            <b-col lg="12" class="mb-1">
              <b-form-group label="Buyer Code*" label-class="form_label_class">
                <validation-Provider
                  name="Buyer Code"
                  rules="required"
                  v-slot="{ errors }"
                >
                  <b-form-input
                    placeholder="Enter Buyer Code"
                    v-model="form.code"
                  ></b-form-input>
                  <span class="text-danger">{{ errors[0] }}</span>
                </validation-Provider>
              </b-form-group>
            </b-col>

            <!-- buyer name -->
            <b-col lg="12" class="mb-1">
              <b-form-group label="Buyer Name*" label-class="form_label_class">
                <validation-Provider
                  name="Buyer Name"
                  rules="required"
                  v-slot="{ errors }"
                >
                  <b-form-input
                    placeholder="Enter Buyer Name"
                    v-model="form.name"
                  ></b-form-input>
                  <span class="text-danger">{{ errors[0] }}</span>
                </validation-Provider>
              </b-form-group>
            </b-col>

            <!-- qualites -->
            <b-col lg="12" class="mb-1">
              <b-form-group label="Assign Qualities*" label-class="form_label_class">
                <validation-Provider
                  name="Qualities"
                  rules="required"
                  v-slot="{ errors }"
                >
                  <v-select
                    v-model="quality"
                    @input="openqualitymodel(quality)"
                    multiple
                    :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                    label="quality"
                    :options="qualities"
                  />
                  <span class="text-danger">{{ errors[0] }}</span>
                </validation-Provider>
              </b-form-group>
            </b-col>
            <!-- country -->
            <b-col lg="12" class="mb-1">
              <b-form-group label="Country*" label-class="form_label_class">
                <validation-Provider
                  name="Country"
                  rules="required"
                  v-slot="{ errors }"
                >
                  <v-select
                    v-model="country"
                    :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                    label="name"
                    :options="countries"
                  />
                  <span class="text-danger">{{ errors[0] }}</span>
                </validation-Provider>
              </b-form-group>
            </b-col>

            <!-- button -->

            <b-col md="12" class="mb-1 text-center">
              <br />
              <b-button
                @click="validationBuyerUpdateForm()"
                type="submit"
                variant="none"
                class="form_submit_button"
              >
                <span class="button_text_styles">Update</span>
              </b-button>
            </b-col>
          </b-row>
          <br /><br />
        </validation-observer>
      </b-form>
    </div>

    <!-- quality model -->
    <b-modal
      ref="qualitymodal"
      hide-footer
      scrollable
      title="Create Quality"
      title-class="modal_title_color"
    >
      <!-- quality create form(trigger if quality is not there to select ) -->

      <!-- qualiity input -->
      <b-col lg="12" class="mb-1">
        <b-form-group label="Quality*" label-class="form_label_class">
          <validation-Provider
            name="Quality"
            rules="required"
            v-slot="{ errors }"
          >
            <b-form-input placeholder="Enter Quality"></b-form-input>
            <span class="text-danger">{{ errors[0] }}</span>
          </validation-Provider>
        </b-form-group>
      </b-col>
      <!-- button -->
      <b-col md="12" class="mb-1 text-center">
        <br />
        <b-button
          @click="validationQualityCreateForm()"
          type="submit"
          variant="none"
          class="form_submit_button"
        >
          <span class="button_text_styles">Create</span>
        </b-button>
      </b-col>
    </b-modal>
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
} from "bootstrap-vue";
import vSelect from "vue-select";
import { ValidationObserver } from "vee-validate";
import { ValidationProvider } from "vee-validate/dist/vee-validate.full.esm";
import { togglePasswordVisibility } from "@core/mixins/ui/forms";
import {
  required,
  email,
  confirmed,
  url,
  between,
  alpha,
  integer,
  password,
  min,
  digits,
  alphaDash,
  length,
} from "@validations";
export default {
  name: "UpdateBuyer",
  components: {
    BCard,
    BFormRadio,
    BInputGroupAppend,
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
      qualities: [
        {
          quality: "A",
        },

        {
          quality: "",
        },
        {
          quality: "A+",
        },
        {
          quality: "A++",
        },
        {
          quality: "Add New",
        },
      ],
      quality: {
        quality: "A",
      },
      countries: [],
      country: {
        name: "ALEX",
      },

      // validations
      required,
      email,
      confirmed,
      url,
      between,
      alpha,
      integer,
      password,
      min,
      digits,
      alphaDash,
      length,
    };
  },
  props: {
    selectedItem: Object,
  },
  created() {
    this.form = this.selectedItem;
  },
  methods: {
    async validationBuyerCreateForm() {
      if (await this.$refs.BuyerCreateValidation.validate()) {
        await this.$vs.loading({
          scale: 0.8,
        });
      }
    },

    openqualitymodel(quality) {
      if (quality[quality.length - 1].quality === "Add New") {
        this.$refs.qualitymodal.show();
        quality.pop();
      }
    },
  },
};
</script>
<style lang="scss">
@import "@core/scss/vue/libs/vue-select.scss";
</style>
