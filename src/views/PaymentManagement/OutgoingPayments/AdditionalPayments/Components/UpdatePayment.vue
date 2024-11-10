<template>
  <div class="payments">
    <div class="outgoing_payments">
      <div class="additional_payments">
        <b-button
          variant="none"
          class="back_button mt-1"
          @click="$router.back()"
        >
          <feather-icon icon="ChevronLeftIcon" size="14" class="text-dark" />
          &nbsp;
          <span class="text">Back</span>
        </b-button>
        <br /><br />
        <b-card>
          <center>
            <b-card-title class="modal_title_color_payment"
              >Update {{ $route.params.payment_code }} payment</b-card-title
            >
          </center>
          <div class="mt-3"></div>
          <b-form @submit.prevent class="Edit_Form">
            <validation-observer ref="PaymentUpdateValidation">
              <b-row>
                <!-- Payment ID / Payment No -->
                <b-col md="12" class="mb-1">
                  <b-form-group
                    label="Payment ID / Payment No*"
                    label-class="form_label_class"
                  >
                    <validation-Provider
                      name="Payment ID / Payment No"
                      rules="required"
                      v-slot="{ errors }"
                    >
                      <b-form-input
                        placeholder="Enter Payment ID / Payment No"
                        v-model="form.payment_no"
                      ></b-form-input>
                      <span class="text-danger">{{ errors[0] }}</span>
                    </validation-Provider>
                  </b-form-group>
                </b-col>

                <!-- payment date -->
                <b-col lg="12" class="mb-1">
                  <b-form-group
                    label="Payment Date*"
                    label-class="form_label_class"
                  >
                    <validation-Provider
                      name="Payment Date"
                      rules="required"
                      v-slot="{ errors }"
                    >
                      <b-form-datepicker
                        placeholder="Select Date"
                        v-model="form.payment_date"
                      ></b-form-datepicker>
                      <span class="text-danger">{{ errors[0] }}</span>
                    </validation-Provider>
                  </b-form-group>
                </b-col>

                <!-- Payment Description -->
                <b-col md="12" class="mb-1">
                  <b-form-group
                    label="Payment Description*"
                    label-class="form_label_class"
                  >
                    <validation-Provider
                      name="Payment Desciption"
                      rules="required"
                      v-slot="{ errors }"
                    >
                      <b-form-input
                        placeholder="Enter Description"
                        v-model="form.payment_description"
                      ></b-form-input>
                      <span class="text-danger">{{ errors[0] }}</span>
                    </validation-Provider>
                  </b-form-group>
                </b-col>

                <!-- Amount  -->
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
                      ></b-form-input>
                      <span class="text-danger">{{ errors[0] }}</span>
                    </validation-Provider>
                  </b-form-group>
                </b-col>

                <!-- payment method -->
                <b-col lg="12" class="mb-1">
                  <b-form-group
                    label="Payment Method*"
                    label-class="form_label_class"
                  >
                    <validation-Provider
                      name="Payment Method"
                      rules="required"
                      v-slot="{ errors }"
                    >
                      <v-select
                        v-model="paymentmethod"
                        :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                        label="title"
                        @input="getContinueChecks()"
                        :options="paymentMethods"
                      >
                      </v-select>
                      <span class="text-danger">{{ errors[0] }}</span>
                    </validation-Provider>
                  </b-form-group>
                </b-col>

                <!-- check number -->
                <b-col
                  lg="12"
                  class="mb-1"
                  v-if="paymentmethod.title === 'Check'"
                >
                  <b-form-group
                    label="Check Number*"
                    label-class="form_label_class"
                  >
                    <validation-Provider
                      name="Check Number"
                      rules="required"
                      v-slot="{ errors }"
                    >
                      <v-select
                        v-model="checknumber"
                        @input="opencheckmodel()"
                        :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                        label="check_no"
                        :options="aditionalchecks"
                      >
                        <template slot="option" slot-scope="option">
                          <div
                            class="d-center"
                            v-if="
                              option.check_no === 'Add New' ||
                              option.check_no === 'Replace Amount'
                            "
                          >
                            <span class="text-danger font-weight-bold">{{
                              option.check_no
                            }}</span>
                          </div>

                          <div class="d-center" v-else>
                            <span
                              >{{ option.check_no }} -
                              <b>{{ option.amount }}</b></span
                            >
                          </div>
                        </template>

                        <template #selected-option="option">
                          <div v-if="option.check_no">
                            {{ option.check_no }} -
                            <b> {{ option.amount }}</b>
                          </div>
                        </template>
                      </v-select>
                      <span class="text-danger">{{ errors[0] }}</span>
                    </validation-Provider>
                  </b-form-group>
                </b-col>

                <div class="mt-1"></div>
                <span></span>

                <!-- button -->
                <b-col md="12" class="mt-5 pt-2 text-center">
                  <b-button
                    @click="validationPaymentUpdateForm()"
                    type="submit"
                    variant="none"
                    class="form_submit_button"
                  >
                    <span class="button_text_styles">Update</span>
                  </b-button>
                </b-col>
              </b-row>
            </validation-observer>
          </b-form>
        </b-card>
      </div>

      <!-- create check modal -->

      <b-modal
        ref="createcheckmodal"
        hide-footer
        :title="checkTitle"
        title-class="modal_title_color"
        no-close-on-backdrop
      >
        <AdditionalCheckCreate :propForm="form" @close="closeModal" />
      </b-modal>

      <!-- check create alert -->

      <b-modal
        ref="checkalert"
        hide-footer
        title-class="modal_title_color"
        no-close-on-backdrop
      >
        <SuplierCheckAlert
          @chceckReplaceStatus="chceckReplaceStatus"
          @hideCheckeplaceModal="hideCheckeplaceModal"
        />
      </b-modal>
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
  BFormDatepicker,
  BImg,
} from "bootstrap-vue";
import vSelect from "vue-select";
import { ValidationObserver } from "vee-validate";
import { ValidationProvider } from "vee-validate/dist/vee-validate.full.esm";
import { togglePasswordVisibility } from "@core/mixins/ui/forms";
import AdditionalCheckCreate from "@/views/CheckBook/Components/Create.vue";
import SuplierCheckAlert from "@/Components/AddCheckAlert.vue";

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
import paymentApi from "@/Api/Modules/payments";
import checkApi from "@/Api/Modules/checkbook";
export default {
  name: "AddAdditionalPayment",
  components: {
    BImg,
    SuplierCheckAlert,
    BCard,
    AdditionalCheckCreate,
    BFormDatepicker,
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

      // bill statuses
      paymentMethods: [
        {
          title: "Cash",
        },
        {
          title: "Check",
        },
      ],
      // payent method
      paymentmethod: {
        title: "Cash",
      },
      // suplier checks
      aditionalchecks: [],
      // check  number
      checknumber: {},
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
    loadingStatus: Boolean,
  },

  async created() {
    await this.showPayment();
  },
  methods: {
    // create payment
    async validationPaymentUpdateForm() {
      this.form.payment_method = this.paymentmethod.title;

      if (this.form.payment_method === "Check") {
        this.form.check_id = this.checknumber.id;
      }

      if (await this.$refs.PaymentUpdateValidation.validate()) {
        await this.$vs.loading({
          scale: 0.8,
        });
        await paymentApi
          .updateAdditionalPayment(this.form)
          .then(() => {
            this.$vs.loading.close();
            this.$router.push("/outgoing_payments");
          })
          .catch(() => {
            this.$vs.loading.close();
          });
      }
    },

    // edit payment to show selected payment details
    async showPayment() {
      const payload = {
        id: this.$route.params.payment_id,
      };
      await this.$vs.loading({
        scale: 0.8,
      });
      const res = await paymentApi.shoAdditionalPayment(payload);
      this.form = res.data.data;

      // loop all data for selected shipment
      this.paymentmethod.title = res.data.data.payment_method;
      this.checknumber = res.data.data.additionals_checks;
      // if payment methods check  , getting exist ceck for this payment
      if (this.paymentmethod.title === "Check" && this.check_id !== null) {
        this.aditionalchecks.push({ check_no: "Replace Amount" });

        this.aditionalchecks.push(this.checknumber);
      }
      this.$vs.loading.close();
    },
    // get continue checks

    async getContinueChecks() {
      const payload = {
        type: "Additional_Check",
      };
      await this.$vs.loading({
        scale: 0.8,
      });

      const res = await checkApi.continuChecks(payload);
      this.aditionalchecks = res.data.data;

      if (this.aditionalchecks.length > 0) {
        this.aditionalchecks.push({ check_no: "Replace New" });
      } else {
        this.aditionalchecks.push({ check_no: "Add New" });
      }

      this.aditionalchecks = this.aditionalchecks.reverse();
      this.$vs.loading.close();
    },

    // open  check modal

    opencheckmodel() {
      // open chcek modal
      if (
        this.checknumber.check_no === "Add New" ||
        this.checknumber.check_no === "Replace Amount"
      ) {
        // if check is already created
        if (this.aditionalchecks.length > 1) {
          this.$refs.checkalert.show();
        } else {
          // if check is not already created
          this.form.check_type = "Additional_Check";
          this.form.view_type = "create_exists";
          this.form.check_id = "";
          this.form.check_no = "";
          this.form.check_date = "";
          this.checkTitle = "Add Check";
          this.$refs.createcheckmodal.show();

          this.checknumber = "";
        }
      }
    },

    // close check modal

    async closeModal(data) {
      // hide create check modal
      this.$refs.createcheckmodal.hide();
      this.aditionalchecks = [];

      this.aditionalchecks.push({ check_no: "Replace Amount" });
      this.aditionalchecks.push(data);

      this.checknumber = this.aditionalchecks[this.aditionalchecks.length - 1];
    },

    // get check replace status
    chceckReplaceStatus() {
      this.$refs.checkalert.hide();
      // if check is already created
      this.checknumber = this.aditionalchecks[this.aditionalchecks.length - 1];
      this.form.check_type = "Additional_Check";
      this.form.check_no = this.checknumber.check_no;
      this.form.check_id = this.checknumber.id;
      this.form.check_date = this.checknumber.check_date;
      this.form.view_type = "update_exists";
      this.checkTitle = "Update Check";
      this.$refs.createcheckmodal.show();
    },

    //hide check replace modal
    hideCheckeplaceModal() {
      this.$refs.checkalert.hide();
    },
  },
};
</script>
<style lang="scss">
@import "@core/scss/vue/libs/vue-select.scss";
</style>
