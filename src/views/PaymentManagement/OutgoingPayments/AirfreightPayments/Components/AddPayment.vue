<template>
  <div class="payments">
    <div class="outgoing_payments">
      <div class="airfreight_payments">
        <b-button
          variant="none"
          class="backbutton mt-1"
          @click="$router.back()"
        >
          <feather-icon icon="ChevronLeftIcon" size="14" class="text-dark" />
          &nbsp;
          <span class="back_button_text_styles">Back</span>
        </b-button>
        <br /><br />
        <b-card>
          <center>
            <b-card-title class="modal_title_color_payment"
              >Add payment For {{ $route.params.name }} Company</b-card-title
            >
          </center>
          <div class="mt-3"></div>
          <b-form @submit.prevent class="Add_Form">
            <validation-observer ref="PaymentCreateValidation">
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
                        @input="getContinueChecks()"
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
                            @input="uniqueShipments(index, bill.billnumber)"
                            label="invoce_no"
                            :options="billnumbers"
                          >
                            <template slot="option" slot-scope="option">
                              <div class="d-center">
                                <span v-if="paymentcurrency.title === 'LKR'"
                                  >{{ option.invoice_no }} -
                                  <b> Rs.{{ option.pending_lkr_cost }}</b>
                                </span>
                                <span v-else
                                  >{{ option.invoice_no }} -
                                  <b> ${{ option.pending_usd_cost }}</b>
                                </span>
                              </div>
                            </template>
                            <template #selected-option="option">
                              <div v-if="bill.billnumber === 'Select Invoice'">
                                {{ bill.billnumber }}
                              </div>
                              <div v-else>
                                <span v-if="paymentcurrency.title === 'LKR'"
                                  >{{ option.invoice_no }} -
                                  <b>Rs.{{ option.pending_lkr_cost }}</b>
                                </span>
                                <span v-else
                                  >{{ option.invoice_no }} -
                                  <b>${{ option.pending_usd_cost }}</b>
                                </span>
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
                                bill.billnumber.pending_lkr_cost,
                                bill.billnumber.pending_usd_cost,
                                bill.billnumber.airfreight_converting_rate
                              )
                            "
                          >
                          </v-select>
                          <span class="text-danger">{{ errors[0] }}</span>
                        </validation-Provider>
                      </b-form-group>
                    </b-col>

                    <!-- shipment usd amount -->
                    <b-col lg="4" v-if="paymentcurrency.title === 'USD'">
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
                            v-model="bill.paid_usd_amount"
                            @input="
                              setContinueBalance(
                                index,
                                bill.paid_usd_amount,
                                bill.billnumber.airfreight_converting_rate
                              )
                            "
                          ></b-form-input>
                          <span class="text-danger">{{ errors[0] }}</span>
                        </validation-Provider>
                      </b-form-group>
                    </b-col>

                    <!-- shipment lkr amount -->
                    <b-col lg="4" v-if="paymentcurrency.title === 'LKR'">
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
                            v-model="bill.paid_lkr_amount"
                            @input="
                              setContinueBalance(
                                index,
                                bill.paid_lkr_amount,
                                bill.billnumber.airfreight_converting_rate
                              )
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
                <!-- end bills -->

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
                        v-model="form.lkr_amount"
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
                        v-model="form.usd_amount"
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

                <!-- process button -->
                <b-col lg="12" class="mt-1">
                  <b-button variant="primary" @click="finalizeAmount()"
                    >Process Full Amount</b-button
                  >
                </b-col>

                <!-- button -->
                <b-col md="12" class="mt-5 pt-2 text-center">
                  <b-button
                    @click="validationPaymentCreateForm()"
                    type="submit"
                    variant="none"
                    class="form_submit_button"
                  >
                    <span class="button_text_styles"> Create</span>
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
        <AirfreightCheckCreate :propForm="form" @close="closeModal" />
      </b-modal>

      <!-- check create alert -->

      <b-modal
        ref="checkalert"
        hide-footer
        title-class="modal_title_color"
        no-close-on-backdrop
      >
        <CheckAlert
          @chceckReplaceStatus="chceckReplaceStatus"
          @hideCheckeplaceModal="hideCheckeplaceModal"
        />
      </b-modal>
    </div>
  </div>
</template>

<script>
import paymentApi from "@/Api/Modules/payments";
import checkApi from "@/Api/Modules/checkbook";
import notification from "@/ApiConstance/toast";
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
import CheckAlert from "@/Components/AddCheckAlert.vue";

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
    CheckAlert,
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
        usd_amount: 0,
        lkr_amount: 0,
      },
      nextTodoId: 1,
      // bill repeater
      bills: [
        {
          id: 1,
          billnumber: "Select Invoice",
          status: "Select Status",
          paid_lkr_amount: "",
          paid_usd_amount: "",
        },
      ],
      // bill numbers
      billnumbers: [],
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
        title: "USD",
        id: 1,
      },
      // suplier checks
      airfreightchecks: [],
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
    await this.getPendingShipments();
  },
  methods: {
    // create payment
    async validationPaymentCreateForm() {
      this.form.payment_currency = this.paymentcurrency.title;

      if (this.form.payment_currency === "LKR") {
        this.form.check_id = this.checknumber.id;
      }
      this.form.airfreight_id = this.$route.params.id;
      this.form.shipments = this.bills;

      if (await this.$refs.PaymentCreateValidation.validate()) {
        await this.$vs.loading({
          scale: 0.8,
        });
        await paymentApi
          .storeAirfreightPayment(this.form)
          .then(() => {
            this.$vs.loading.close();
            this.$router.push("/outgoing_payments");
          })
          .catch(() => {
            this.$vs.loading.close();
          });
      }
    },

    // get new or contnue shipments

    async getPendingShipments() {
      const payload = {
        airfreight_id: this.$route.params.id,
      };
      await this.$vs.loading({
        scale: 0.8,
      });
      const res = await paymentApi.getAirfreightPendingShipments(payload);
      this.billnumbers = res.data.data;
      this.$vs.loading.close();
    },

    // get continue checks
    async getContinueChecks() {
      const payload = {
        type: "Airfreight_Check",
      };

      await this.$vs.loading({
        scale: 0.8,
      });

      const res = await checkApi.continuChecks(payload);
      this.airfreightchecks = res.data.data;

      if (this.airfreightchecks.length > 0) {
        this.airfreightchecks.push({ check_no: "Replace Amount" });
      } else {
        this.airfreightchecks.push({ check_no: "Add New" });
      }

      this.airfreightchecks = this.airfreightchecks.reverse();
      this.$vs.loading.close();
    },

    // open  check modal
    opencheckmodel() {
      // finalize bill amount and initialize to final amount
      this.finalizeAmount();
      // open chcek modal
      if (
        this.checknumber.check_no === "Add New" ||
        this.checknumber.check_no === "Replace Amount"
      ) {
        // if check is already created
        if (this.airfreightchecks.length > 1) {
          this.$refs.checkalert.show();
        } else {
          // if check is not already created
          this.form.check_type = "Airfreight_Check";
          this.form.view_type = "create_exists";
          this.form.check_id = "";
          this.form.check_no = "";
          this.form.check_date = "";
          this.$refs.createcheckmodal.show();

          this.checknumber = "";
        }
      }
    },

    // close check modal

    async closeModal(data) {
      // hide create check modal
      this.$refs.createcheckmodal.hide();

      this.airfreightchecks = [];

      this.airfreightchecks.push({ check_no: "Replace Amount" });
      this.airfreightchecks.push(data);

      this.checknumber =
        this.airfreightchecks[this.airfreightchecks.length - 1];
    },

    // get check replace status
    chceckReplaceStatus() {
      this.$refs.checkalert.hide();
      // if check is already created
      this.checknumber =
        this.airfreightchecks[this.airfreightchecks.length - 1];
      this.form.check_type = "Airfreight_Check";
      this.form.check_no = this.checknumber.check_no;
      this.form.check_id = this.checknumber.id;
      this.form.check_date = this.checknumber.check_date;
      this.form.view_type = "update_exists";

      this.$refs.createcheckmodal.show();
    },

    //hide check replace modal
    hideCheckeplaceModal() {
      this.$refs.checkalert.hide();
      this.checknumber = "";
    },

    // repeat bill
    repeatBill() {
      this.bills.push({
        id: (this.nextTodoId += this.nextTodoId),
        billnumber: "Select Invoice",
        status: "Select Status",
        paid_lkr_amount: "",
        paid_usd_amount: "",
      });
    },
    // remove bill
    removeItem(index) {
      this.bills.splice(index, 1);
      this.finalizeAmount();
    },

    // automatialyy fills the bill paid amount
    fillAmount(index, status, billlkrtotal, billusdtotal, rate) {
      // if currency is in usd
      if (this.paymentcurrency.title === "USD") {
        if (status.title === "Done") {
          // if status done , amount will be sameas bill value
          this.bills[index].paid_lkr_amount = billusdtotal * rate;
          this.bills[index].paid_usd_amount = billusdtotal;
          console.log(billusdtotal);
        }
        // if status continue , amount must be added
        else {
          this.bills[index].paid_lkr_amount = 0;
          this.bills[index].paid_usd_amount = 0;
        }
      }
      // if currency is in lkr
      else {
        // if status done , amount will be sameas bill value
        if (status.title === "Done") {
          this.bills[index].paid_lkr_amount = billlkrtotal;
          this.bills[index].paid_usd_amount = billlkrtotal / rate;
        }
        // if status continue , amount must be added
        else {
          this.bills[index].paid_lkr_amount = 0;
          this.bills[index].paid_usd_amount = 0;
        }
      }
      this.form.lkr_amount = "Processing.....";
      this.form.usd_amount = "Processing.....";
    },

    // finalize bill amount and initialize to final amount
    async finalizeAmount() {
      let lkrtotal = 0;
      let usdtotal = 0;

      // loop all bills and calculate payment
      this.bills.forEach((element) => {
        lkrtotal = lkrtotal + parseFloat(element.paid_lkr_amount);
        usdtotal = usdtotal + parseFloat(element.paid_usd_amount);
      });

      this.form.usd_amount = usdtotal;
      this.form.lkr_amount = lkrtotal;
    },

    // set  continue balance amounts
    setContinueBalance(index, value, rate) {
      if (this.paymentcurrency.title == "USD") {
        this.bills[index].paid_lkr_amount = value * rate;
      } else {
        this.bills[index].paid_usd_amount = value / rate;
      }
    },

    // check aleady selected the shipment
    uniqueShipments(index, value) {
      if (index > 0) {
        if (this.bills[index - 1].billnumber === value) {
          notification.toast(
            "You Have already Selected This Shipment",
            "error"
          );
          this.bills[index].billnumber = "";
        }
      }
    },
  },
};
</script>
<style lang="scss">
@import "@core/scss/vue/libs/vue-select.scss";
</style>
