<template>
  <div class="payments">
    <div class="outgoing_payments">
      <div class="airfreight_payments">
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
              >Update Airfreight payments</b-card-title
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
                <b-col lg="12">
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

                <!-- payment currency -->
                <b-col lg="12" class="mt-1">
                  <b-form-group
                    label="Payment Currency*"
                    label-class="form_label_class"
                  >
                    <validation-Provider
                      name="Payment Currency"
                      rules="required"
                      v-slot="{ errors }"
                    >
                      <v-select
                        v-model="paymentcurrency"
                        :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                        label="title"
                        @input="finalizeAmount()"
                        :options="paymentCurrencies"
                      >
                      </v-select>
                      <span class="text-danger">{{ errors[0] }}</span>
                    </validation-Provider>
                  </b-form-group>
                </b-col>

                <!-- bill numbers -->
                <b-col lg="12" class="mt-1">
                  <b-row>
                    <b-col lg="6">
                      <span class="repeater_title">Bill Number/s*</span>
                    </b-col>
                    <!-- reeater button -->
                    <b-col lg="6" class="text-right"
                      ><b-button variant="none" @click="repeatBill()">
                        <span class="repeater_add_buton">Add bill</span>
                      </b-button></b-col
                    >
                  </b-row>
                </b-col>

                <div class="mt-3"></div>
                <span></span>
                <!-- repeater form -->
                <b-col lg="12">
                  <b-row
                    class="mr-1"
                    v-for="(bill, index) in bills"
                    :key="bill.id"
                    :id="bill.id"
                  >
                    <br /><br />
                    <br /><br />
                    <!-- bill number -->
                    <b-col lg="4">
                      <b-form-group
                        label="Bill No*"
                        label-class="form_label_class"
                      >
                        <validation-Provider
                          name="Bill No"
                          rules="required"
                          v-slot="{ errors }"
                        >
                          <v-select
                            v-model="bill.billnumber"
                            :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                            label="invoce_no"
                            :options="billnumbers"
                          >
                            <template slot="option" slot-scope="option">
                              <div class="d-center">
                                <span
                                  >{{ option.invoce_no }} -
                                  {{ option.total }}</span
                                >
                              </div>
                            </template>
                            <template #selected-option="option">
                              <div v-if="bill.billnumber === 'Select Invoice'">
                                {{ bill.billnumber }}
                              </div>
                              <div v-else>
                                {{ bill.billnumber.invoce_no }} -
                                <b> {{ bill.billnumber.total }}</b>
                              </div>
                            </template>
                          </v-select>
                          <span class="text-danger">{{ errors[0] }}</span>
                        </validation-Provider>
                      </b-form-group>
                    </b-col>
                    <!-- status -->
                    <b-col lg="3">
                      <b-form-group
                        label="Payment Status*"
                        label-class="form_label_class"
                      >
                        <validation-Provider
                          name="Status"
                          rules="required"
                          v-slot="{ errors }"
                        >
                          <v-select
                            v-model="bill.status"
                            :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                            label="title"
                            :options="billstatuses"
                            @input="
                              fillAmount(
                                index,
                                bill.status,
                                bill.billnumber.total
                              )
                            "
                          >
                          </v-select>
                          <span class="text-danger">{{ errors[0] }}</span>
                        </validation-Provider>
                      </b-form-group>
                    </b-col>
                    <!-- amount -->
                    <b-col lg="4">
                      <b-form-group
                        label="Paid Amount*"
                        label-class="form_label_class"
                      >
                        <validation-Provider
                          name="Amount"
                          rules="required"
                          v-slot="{ errors }"
                        >
                          <b-form-input
                            placeholder="Enter Amount"
                            v-model="bill.paidamount"
                            @input="
                              form.lkramount = 'Processing.....';
                              form.usdamount = 'Processing.....';
                            "
                          ></b-form-input>
                          <span class="text-danger">{{ errors[0] }}</span>
                        </validation-Provider>
                      </b-form-group>
                    </b-col>
                    <b-col lg="1" class="minus_button_margin">
                      <b-button variant="none" @click="removeItem(index)">
                        <b-img src="@/assets/images/Group.png"></b-img>
                      </b-button>
                    </b-col>
                  </b-row>
                </b-col>

                <!--Lkr  Amount  -->
                <b-col md="12" class="mt-1">
                  <b-form-group
                    label="Amount(LKR)*"
                    label-class="form_label_class"
                  >
                    <validation-Provider
                      name="Amount(LKR)"
                      rules="required"
                      v-slot="{ errors }"
                    >
                      <b-form-input
                        placeholder="Enter Amount"
                        v-model="form.lkramount"
                        readonly
                      ></b-form-input>
                      <span class="text-danger">{{ errors[0] }}</span>
                    </validation-Provider>
                  </b-form-group>
                </b-col>

                <!-- Usd Amount  -->
                <b-col md="12" class="mt-1">
                  <b-form-group
                    label="Amount(USD)*"
                    label-class="form_label_class"
                  >
                    <validation-Provider
                      name="Amount(USD)"
                      rules="required"
                      v-slot="{ errors }"
                    >
                      <b-form-input
                        placeholder="Enter Amount"
                        v-model="form.usdamount"
                        readonly
                      ></b-form-input>
                      <span class="text-danger">{{ errors[0] }}</span>
                    </validation-Provider>
                  </b-form-group>
                </b-col>

                <!-- check number -->
                <b-col
                  lg="12"
                  class="mt-1"
                  v-if="paymentcurrency.title === 'LKR'"
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
                        :options="airfreightchecks"
                      >
                        <template slot="option" slot-scope="option">
                          <div
                            class="d-center"
                            v-if="option.check_no === 'Add New'"
                          >
                            <span class="text-danger font-weight-bold">{{
                              option.check_no
                            }}</span>
                          </div>
                        </template>
                      </v-select>
                      <span class="text-danger">{{ errors[0] }}</span>
                    </validation-Provider>
                  </b-form-group>
                </b-col>

                <!-- process button -->
                <b-col
                  lg="12"
                  class="mt-1"
                  v-if="paymentcurrency.title === 'USD'"
                >
                  <b-button variant="primary" @click="finalizeAmount()"
                    >Process Full Amount</b-button
                  >
                </b-col>

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
        title="Add Check"
        title-class="modal_title_color"
        no-close-on-backdrop
      >
        <AirfreightCheckCreate :propForm="form" />
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
import AirfreightCheckCreate from "@/views/CheckBook/Components/Create.vue";
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
export default {
  name: "AddAirfreightPayment",
  components: {
    SuplierCheckAlert,
    BImg,
    BCard,
    AirfreightCheckCreate,
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
      form: {
        usdamount: 0,
        lkramount: 0,
      },
      nextTodoId: 1,
      // bill repeater
      bills: [
        {
          id: 1,
          billnumber: "Select Invoice",
          status: "Select Status",
          paidamount: "",
        },
      ],
      // bill numbers
      billnumbers: [
        {
          invoce_no: "A123",
          id: 1,
          total: 120.0,
        },
        {
          invoce_no: "A123",
          id: 2,
          total: 120.0,
        },
      ],
      // statuses
      billstatuses: [
        {
          title: "Continue",
        },
        {
          title: "Done",
        },
      ],
      // paymenr currencies
      paymentCurrencies: [
        {
          title: "USD",
          id: 1,
        },
        {
          title: "LKR",
          id: 2,
        },
      ],
      // payent currency
      paymentcurrency: {
        title: "LKR",
        id: 2,
      },
      // suplier checks
      airfreightchecks: [
        {
          check_no: "Add New",
        },
      ],
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

  methods: {
    // create payment
    async validationPaymentUpdateForm() {
      // if (await this.$refs.PaymentUpdateValidation.validate()) {
      //   await this.$vs.loading({
      //     scale: 0.8,
      //   });
      //   await qualityApi
      //     .storeQuality(this.form, this.loadingStatus)
      //     .then(() => {
      //       this.$vs.loading.close();
      //       this.$emit("close", false);
      //     })
      //     .catch(() => {
      //       this.$vs.loading.close();
      //     });
      // }
    },
    // open  check modal

    opencheckmodel() {
      // finalize bill amount and initialize to final amount
      this.finalizeAmount();
      // open chcek modal
      if (this.checknumber.check_no === "Add New") {
        // if check is already created
        if (this.airfreightchecks.length > 1) {
          this.$refs.checkalert.show();
        } else {
          // if check is not already created
          this.form.check_type = "Airfreight_Check";
          this.$refs.createcheckmodal.show();
          this.airfreightchecks.push({
            check_no: "A23444",
            id: 1,
          });
          this.checknumber =
            this.airfreightchecks[this.airfreightchecks.length - 1];
        }
      }
    },

    // get check replace status
    chceckReplaceStatus() {
      this.$refs.checkalert.hide();
      this.checknumber =
        this.airfreightchecks[this.airfreightchecks.length - 1];
      this.form.check_type = "Supplier_Check";
      this.form.check_no = this.checknumber.check_no;
      this.$refs.createcheckmodal.show();
    },

    //hide check replace modal
    hideCheckeplaceModal() {
      this.$refs.checkalert.hide();
    },

    // repeat bill
    repeatBill() {
      this.bills.push({
        id: (this.nextTodoId += this.nextTodoId),
        billnumber: "Select Invoice",
        status: "Select Status",
        paidamount: "",
      });
    },
    // remove bill
    removeItem(index) {
      this.bills.splice(index, 1);
      this.finalizeAmount();
    },

    // automatialyy fills the bill paid amount
    fillAmount(index, status, billtotal) {
      // if status done , amount will be sameas bill value
      if (status.title === "Done") {
        this.bills[index].paidamount = billtotal;
      }
      // if status continue , amount must be added
      else {
        this.bills[index].paidamount = 0;
      }
      this.form.lkramount = "Processing.....";
      this.form.usdamount = "Processing.....";
    },

    // finalize bill amount and initialize to final amount
    finalizeAmount() {
      let total = 0;
      this.bills.forEach((element) => {
        total = total + parseFloat(element.paidamount);
      });
      if (this.paymentcurrency.title === "USD") {
        this.form.usdamount = total;
        this.form.lkramount = total * 302.08;
      } else if (this.paymentcurrency.title === "LKR") {
        this.form.usdamount = total / 302.08;
        this.form.lkramount = total;
      }
    },
  },
};
</script>
<style lang="scss">
@import "@core/scss/vue/libs/vue-select.scss";
</style>
