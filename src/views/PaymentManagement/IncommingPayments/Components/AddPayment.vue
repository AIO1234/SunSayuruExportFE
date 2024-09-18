<template>
  <div class="payments">
    <div class="incomming_payments">
      <div class="buyer_payments">
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
              >Add Buyer payments</b-card-title
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

                <!-- Converting rate -->
                <b-col md="12" class="mt-1">
                  <b-form-group
                    label="Converting rate*"
                    label-class="form_label_class"
                  >
                    <validation-Provider
                      name="Converting Rate"
                      rules="required"
                      v-slot="{ errors }"
                    >
                      <b-form-input
                        placeholder="Enter Payment ID / Payment No"
                        v-model="form.rate"
                      ></b-form-input>
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
                        :options="paymentCurrencies"
                      >
                      </v-select>
                      <span class="text-danger">{{ errors[0] }}</span>
                    </validation-Provider>
                  </b-form-group>
                </b-col>

                <!-- countries -->

                <div class="mt-3"></div>
                <span></span>
                <!--country  repeater form -->
                <b-col lg="12" class="mt-2">
                  <b-card
                    class="repeater_body"
                    v-for="(country, countryindex) in countries"
                    :key="country.id"
                    :id="country.id"
                  >
                    <!-- country -->
                    <div class="text-left">
                      <b-form-group
                        label="Country*"
                        label-class="form_label_class"
                      >
                        <validation-Provider
                          name="Country"
                          rules="required"
                          v-slot="{ errors }"
                        >
                          <v-select
                            :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                            label="country"
                            v-model="country.country"
                            class="form_input country"
                            :options="buyercountries"
                          >
                          </v-select>
                          <span class="text-danger">{{ errors[0] }}</span>
                        </validation-Provider>
                      </b-form-group>
                    </div>

                    <!-- bill repeater form -->
                    <b-row
                      class="mr-1 pt-2"
                      v-for="(bill, billindex) in country.bills"
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
                              class="form_input"
                              v-model="bill.billnumber"
                              :dir="
                                $store.state.appConfig.isRTL ? 'rtl' : 'ltr'
                              "
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
                                <div
                                  v-if="bill.billnumber === 'Select Invoice'"
                                >
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
                              class="form_input"
                              v-model="bill.status"
                              :dir="
                                $store.state.appConfig.isRTL ? 'rtl' : 'ltr'
                              "
                              label="title"
                              :options="billstatuses"
                              @input="
                                fillAmount(
                                  country.bills,
                                  billindex,
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
                              class="form_input"
                              placeholder="Enter Amount"
                              v-model="bill.paidamount"
                            ></b-form-input>
                            <span class="text-danger">{{ errors[0] }}</span>
                          </validation-Provider>
                        </b-form-group>
                      </b-col>
                      <b-col lg="1" class="minus_button_margin">
                        <b-button
                          variant="none"
                          @click="removeBill(country.bills, billindex)"
                        >
                          <b-img src="@/assets/images/Group.png"></b-img>
                        </b-button>
                      </b-col>
                    </b-row>
                    <br />
                    <b-button
                      variant="none"
                      @click="repeatBill(country.bills)"
                      class="repeater_add_bill_buton"
                    >
                      <span class="text">Add bill</span>
                    </b-button>
                  </b-card>

                  <div class="text-right" v-if="returnlenth > 1">
                    <b-button
                      variant="none"
                      @click="removeCountry(countryindex)"
                      class="repeater_remove_buton"
                    >
                      <span class="text">Remove Country</span>
                    </b-button>
                  </div>
                </b-col>

                <!-- Amount LKR -->
                <b-col md="12" class="mt-1">
                  <b-form-group
                    label="Amount(Lkr)*"
                    label-class="form_label_class"
                  >
                    <validation-Provider
                      name="Amount"
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

                <!-- Amount USD -->
                <b-col md="12" class="mt-1">
                  <b-form-group
                    label="Amount(USD)*"
                    label-class="form_label_class"
                  >
                    <validation-Provider
                      name="Amount"
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
        <SuplierCheckCreate :propForm="form" />
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
import SuplierCheckCreate from "@/views/CheckBook/Components/Create.vue";

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
import notification from "@/ApiConstance/toast";
export default {
  name: "AddBuyerPayment",
  components: {
    BImg,
    BCard,
    SuplierCheckCreate,
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
        lkramount: 0,
        usdamount: 0,
      },
      nextTodoId: 1,

      // countries
      buyercountries: [
        {
          country: "Spain",
          id: 1,
        },
        {
          country: "Canada",
          id: 2,
        },
      ],
      // countries array
      countries: [
        {
          country: {
            country: "Spain",
            id: 1,
          },
          bills: [
            {
              id: 1,
              billnumber: "Select Invoice",
              status: "Select Status",
              paidamount: "",
            },
          ],
        },

        {
          country: {
            country: "Canada",
            id: 2,
          },
          bills: [
            {
              id: 1,
              billnumber: "Select Invoice",
              status: "Select Status",
              paidamount: "",
            },
          ],
        },
      ],
      //

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
        title: "USD",
        id: 1,
      },
      // suplier checks
      suplierchecks: [
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

  computed: {
    returnlenth() {
      return this.countries.length;
    },
  },
  methods: {
    // create payment
    async validationPaymentCreateForm() {
      // if (await this.$refs.PaymentCreateValidation.validate()) {
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
        this.form.check_type = "Supplier_Check";
        this.$refs.createcheckmodal.show();
        this.suplierchecks.push({
          check_no: "A23444",
          id: 1,
        });
        this.checknumber = this.suplierchecks[this.suplierchecks.length - 1];
      }
    },
    // repeat bill
    repeatBill(bills) {
      bills.push({
        billnumber: "Select Invoice",
        status: "Select Status",
        paidamount: "",
      });
    },
    // remove bill

    removeBill(bills, billindex) {
      bills.splice(billindex, 1);
      // this.finalizeAmount();
    },
    // remove country
    removeCountry(index) {
      this.countries.splice(index, 1);

      // this.finalizeAmount();
    },

    // automatialyy fills the bill paid amount
    fillAmount(bills, index, status, billtotal) {
      // if status done , amount will be sameas bill value
      if (status.title === "Done") {
        bills[index].paidamount = billtotal;
      }
      // if status continue , amount must be added
      else {
        bills[index].paidamount = 0;
      }

      this.form.lkramount = "Processing.....";
      this.form.usdamount = "Processing.....";
    },

    // finalize bill amount and initialize to final amount
    finalizeAmount() {
      let total = 0;
      this.countries.forEach((element1) => {
        element1.bills.forEach((element2) => {
          total = total + parseFloat(element2.paidamount);
        });
      });

      if (this.paymentcurrency.title === "LKR") {
        this.form.lkramount = total;
        this.form.usdamount = total / this.form.rate;
      } else if (this.paymentcurrency.title === "USD") {
        this.form.lkramount = total * this.form.rate;
        this.form.usdamount = total;
      }
      console.log(this.form.lkramount);
    },
  },
};
</script>
<style lang="scss">
@import "@core/scss/vue/libs/vue-select.scss";
</style>
