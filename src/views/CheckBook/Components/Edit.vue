<template>
  <div>
    <div>
      <b-form @submit.prevent>
        <validation-observer ref="CheckUpdateValidation">
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

            <!-- check status -->
            <b-col md="12" class="mb-1">
              <b-form-group label="Status*" label-class="form_label_class">
                <validation-Provider
                  name="Status"
                  rules="required"
                  v-slot="{ errors }"
                >
                  <v-select
                    v-model="status"
                    :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                    label="status"
                    :options="statuses"
                  >
                    <template slot="option" slot-scope="option">
                      <div class="d-center" v-if="option.status === 'Declined'">
                        <span class="text-danger font-weight-bold">{{
                          option.status
                        }}</span>
                      </div>
                    </template>
                  </v-select>
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

            <!-- replace chech detils -->

            <!-- new check date -->
            <b-col
              lg="12"
              v-if="
                selectedItem.status !== 'Declined' &&
                status.status === 'Declined'
              "
            >
              <b-form-group
                label="New Check No*"
                label-class="form_label_class"
              >
                <validation-Provider
                  name="Check Date"
                  rules="required"
                  v-slot="{ errors }"
                >
                  <b-form-input
                    placeholder="Enter Replace Check No"
                    v-model="form.new_check_no"
                  ></b-form-input>
                  <span class="text-danger">{{ errors[0] }}</span>
                </validation-Provider>
              </b-form-group>
            </b-col>

            <b-col
              lg="12"
              v-if="
                selectedItem.status !== 'Declined' &&
                status.status === 'Declined'
              "
            >
              <b-form-group
                label="New Check Date*"
                label-class="form_label_class"
              >
                <validation-Provider
                  name="Check Date"
                  rules="required"
                  v-slot="{ errors }"
                >
                  <b-form-datepicker
                    placeholder="Select Replace Date"
                    v-model="form.new_check_date"
                  ></b-form-datepicker>
                  <span class="text-danger">{{ errors[0] }}</span>
                </validation-Provider>
              </b-form-group>
            </b-col>

            <!-- button -->
            <b-col md="12" class="mb-1 text-center">
              <b-button
                @click="validationCheckUpdateForm()"
                type="submit"
                variant="none"
                class="form_submit_button"
              >
                <span class="button_text_styles">Update </span>
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
import checkbookApi from "@/Api/Modules/checkbook";
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
  name: "UpdateCheck",
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
    selectedItem: Object,
  },
  created() {
    this.initializeData();
  },
  data() {
    return {
      statuses: [],
      status: {},

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
    async validationCheckUpdateForm() {
      this.form.status = this.status.status;
      if (await this.$refs.CheckUpdateValidation.validate()) {
        await this.$vs.loading({
          scale: 0.8,
        });
        await checkbookApi
          .updateCheck(this.form)
          .then((res) => {
            this.$vs.loading.close();
            this.$emit("close", true);
          })
          .catch(() => {
            this.$vs.loading.close();
          });
      }
    },

    initializeData() {
      this.form = this.selectedItem;

      if (this.selectedItem.status === "Asigned To Payment") {
        this.statuses.push(
          {
            status: "Declined",
          },
          {
            status: this.selectedItem.status,
          }
        );
      } else {
        this.statuses.push({
          status: this.selectedItem.status,
        });
      }

      this.status.status = this.selectedItem.status;
    },
  },
};
</script>
<style lang="scss">
@import "@core/scss/vue/libs/vue-select.scss";
</style>
