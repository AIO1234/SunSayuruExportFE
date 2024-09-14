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

                <!-- payment currncy -->
                <b-col lg="12" class="mb-1">
                  <b-form-group
                    label="Payment Currency*"
                    label-class="form_label_class"
                  >
                    <validation-Provider
                      name="Payment Method"
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

                <!-- check number -->
                <b-col
                  lg="12"
                  class="mb-1"
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
                        :options="suplierchecks"
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

                <!-- bill numbers -->
                <b-col lg="12">
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
                    :key="bill"
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
                            @input="
                              fillAmount(
                                index,
                                bill.status,
                                bill.billnumber.total
                              )
                            "
                            v-model="bill.status"
                            :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                            label="title"
                            :options="billstatuses"
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
                <!-- button -->
                <b-col md="12" class="mt-5 pt-2 text-center">
                  <b-button
                    @click="validationPaymentCreateForm()"
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
  name: "UpdateAirfreightPayment",
  components: {
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
      form: {},
      nextTodoId: 1,
      // bill repeater
      bills: [
        {
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
      // bill statuses
      paymentCurrencies: [
        {
          title: "LKR",
          id: 1,
        },
        {
          title: "USD",
          id: 2,
        },
      ],
      // payent method
      paymentcurrency: {
        title: "USD",
        id: 2,
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
      if (this.checknumber.check_no === "Add New") {
        this.form.check_type = "Airfreight_Check";
        this.$refs.createcheckmodal.show();
        this.suplierchecks.push({
          check_no: "A23444",
          id: 1,
        });
        this.checknumber = this.suplierchecks[this.suplierchecks.length - 1];
      }
    },
    // repeat bill
    repeatBill() {
      this.bills.push({
        id: (this.nextTodoId += this.nextTodoId),
        billnumber: "Select Invoice",
        status: "Select Status",
        amount: "",
      });
    },
    // remove bill
    removeItem(index) {
      this.bills.splice(index, 1);
    },

    // automatialyy fills the bill paid amount
    fillAmount(index, status, billtotal) {
      // if status done , amount will be sameas bill value
      if (status.title === "Done") {
        this.bills[index].paidamount = billtotal;
      }
      // if status if continue
      else if (status.title === "Continue") {
        let totamount = 0;
        // if current index is not 0
        if (index !== 0) {
          // add all paid amounts until the current index
          for (let i = 0; i < index; i++) {
            totamount = totamount + this.bills[i].paidamount;
          }
          // if all paid amounts until the current index is lower  than billvalue
          if (this.form.amount - totamount < billtotal) {
            this.bills[index].paidamount = this.form.amount - totamount;
          }
          // if all paid amounts until the current index is higher  than billvalue else {
          notification.toast(
            "You Have Enough Remining Balance To FullFill This Bill!",
            "error"
          );
          this.bills[index].paidamount = "";
        }
      }
      // if curent index is not 0
      else {
        this.bills[index].paidamount = "";
      }
    },
  },
};
</script>
<style lang="scss">
@import "@core/scss/vue/libs/vue-select.scss";
</style>
