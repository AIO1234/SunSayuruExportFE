<template>
  <div>
    <div>
      <b-form @submit.prevent>
        <validation-observer ref="SuplierUpdateValidation">
          <b-row>
            <!-- suplier name -->
            <b-col md="12" class="mb-1">
              <b-form-group
                label="Suplier Name*"
                label-class="form_label_class"
              >
                <validation-Provider
                  name="Suplier Name"
                  rules="required"
                  v-slot="{ errors }"
                >
                  <b-form-input
                    placeholder="Enter Suplier Name"
                    v-model="form.name"
                  ></b-form-input>
                  <span class="text-danger">{{ errors[0] }}</span>
                </validation-Provider>
              </b-form-group>
            </b-col>

            <!-- suplier address -->
            <b-col md="12" class="mb-1">
              <b-form-group
                label="Suplier Address*"
                label-class="form_label_class"
              >
                <validation-Provider
                  name="Suplier Address"
                  rules="required"
                  v-slot="{ errors }"
                >
                  <b-form-input
                    placeholder="Enter Suplier"
                    v-model="form.address"
                  ></b-form-input>
                  <span class="text-danger">{{ errors[0] }}</span>
                </validation-Provider>
              </b-form-group>
            </b-col>

            <!-- suplier address -->
            <b-col md="12" class="mb-1">
              <b-form-group
                label="Suplier Mobile*"
                label-class="form_label_class"
              >
                <validation-Provider
                  name="Suplier Mobile"
                  rules="required"
                  v-slot="{ errors }"
                >
                  <b-form-input
                    placeholder="Enter Mobile Number"
                    v-model="form.mobile_number"
                  ></b-form-input>
                  <span class="text-danger">{{ errors[0] }}</span>
                </validation-Provider>
              </b-form-group>
            </b-col>
            <b-col md="12" class="mb-1 text-center">
              <b-button
                @click="validationSuplierUpdateForm()"
                type="submit"
                variant="none"
                class="form_submit_button"
              >
                <span class="button_text_styles"> Update</span>
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
import suplierApi from "@/Api/Modules/supliers";
export default {
  name: "UpdateSuplier",
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
  async created() {
    this.form = this.selectedItem;
  },
  props: {
    selectedItem: Object,
  },
  methods: {
    async validationSuplierUpdateForm() {
      if (await this.$refs.SuplierUpdateValidation.validate()) {
        await this.$vs.loading({
          scale: 0.8,
        });

        await suplierApi
          .updateSuplier(this.form.id, this.form)
          .then(() => {
            this.$vs.loading.close();
            this.$emit("close", false);
          })
          .catch(() => {
            this.$vs.loading.close();
          });
      }
    },
  },
};
</script>
<style lang="scss">
@import "@core/scss/vue/libs/vue-select.scss";
</style>
