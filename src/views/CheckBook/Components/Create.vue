<template>
  <div>
    <div>
      <b-form @submit.prevent>
        <validation-observer ref="CheckCreateValidation">
          <b-row>
            <!-- check Number -->
            <b-col md="12" class="mb-1">
              <b-form-group
                label="Check Number*"
                label-class="form_label_class"
              >
                <validation-Provider
                  name="Check Number"
                  rules="required"
                  v-slot="{ errors }"
                >
                  <b-form-input
                    placeholder="Enter Check Number"
                    v-model="form.check_no"
                  ></b-form-input>
                  <span class="text-danger">{{ errors[0] }}</span>
                </validation-Provider>
              </b-form-group>
            </b-col>

            <!-- check date -->
            <b-col lg="12">
              <b-form-group label="Check Date*" label-class="form_label_class">
                <validation-Provider
                  name="Check Date"
                  rules="required"
                  v-slot="{ errors }"
                >
                  <b-form-datepicker
                    placeholder="Select Date"
                    v-model="form.check_date"
                  ></b-form-datepicker>
                  <span class="text-danger">{{ errors[0] }}</span>
                </validation-Provider>
              </b-form-group>
            </b-col>

            <!-- check amount -->
            <b-col md="12" class="mb-1">
              <b-form-group label="Amount*" label-class="form_label_class">
                <validation-Provider
                  name="Amount"
                  rules="required"
                  v-slot="{ errors }"
                >
                  <b-form-input
                    placeholder="Enter Amount"
                    v-model="form.amount"
                    readonly
                  ></b-form-input>
                  <span class="text-danger">{{ errors[0] }}</span>
                </validation-Provider>
              </b-form-group>
            </b-col>
            <!-- button -->
            <b-col md="12" class="mb-1 text-center">
              <b-button
                @click="validationCheckCreateForm()"
                type="submit"
                variant="none"
                class="form_submit_button"
              >
                <span
                  v-if="form.view_type === 'create_exists'"
                  class="button_text_styles"
                  >Create</span
                >
                <span
                  v-else-if="form.view_type === 'update_exists'"
                  class="button_text_styles"
                  >Update
                </span>
              </b-button>
            </b-col>
          </b-row>
        </validation-observer>
      </b-form>
    </div>
  </div>
</template>

<script>
import checkApi from "@/Api/Modules/checkbook";
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
  name: "AddCheck",
  components: {
    BFormDatepicker,
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
  props: {
    propForm: Object,
  },
  created() {
    this.initializeData();
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
  methods: {
    async validationCheckCreateForm() {
      this.form.status = "Not Asigned To Payment";
      if (await this.$refs.CheckCreateValidation.validate()) {
        await this.$vs.loading({
          scale: 0.8,
        });
        await checkApi
          .storeCheck(this.form)
          .then((res) => {
            this.$vs.loading.close();
            this.$emit("close", res.data.data);
          })
          .catch(() => {
            this.$vs.loading.close();
          });
      }
    },

    initializeData() {
      this.form.type = this.propForm.check_type;
      this.form.view_type = this.propForm.view_type;
      this.form.check_id = this.propForm.check_id;
      this.form.check_no = this.propForm.check_no;
      this.form.check_date = this.propForm.check_date;
      if (this.propForm.check_type === "Airfreight_Check") {
        this.form.amount = this.propForm.lkr_amount;
      } else {
        this.form.amount = this.propForm.amount;
      }
    },
  },
};
</script>
<style lang="scss">
@import "@core/scss/vue/libs/vue-select.scss";
</style>
