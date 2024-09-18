<template>
  <div class="payments">
    <div class="outgoing_payments">
      <div class="suplier_payments">
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
              >Add Supplier payments</b-card-title
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
                            @input="form.lkramount = 'Processing.....'"
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

                <!-- payment method -->
                <b-col lg="12" class="mt-2">
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
                        @input="fializeAmount()"
                        :options="paymentMethods"
                      >
                      </v-select>
                      <span class="text-danger">{{ errors[0] }}</span>
                    </validation-Provider>
                  </b-form-group>
                </b-col>

                <!-- Amount  -->
                <b-col md="12" class="mt-1">
                  <b-form-group label="Amount*" label-class="form_label_class">
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

                <!-- check number -->
                <b-col
                  lg="12"
                  class="mt-1"
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
import SuplierCheckCreate from "@/views/CheckBook/Components/Create.vue";
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
import notification from "@/ApiConstance/toast";
export default {
  name: "AddSuplierPayment",
  components: {
    SuplierCheckAlert,
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
      // bill statuses
      paymentMethods: [
        {
          title: "Check",
          id: 1,
        },
        {
          title: "Cash",
          id: 2,
        },
      ],
      // payent method
      paymentmethod: {
        title: "Check",
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
      this.fializeAmount();
      // open chcek modal
      if (this.checknumber.check_no === "Add New") {
        // if check is already created
        if (this.suplierchecks.length > 1) {
          this.$refs.checkalert.show();
        } else {
          // if check is not already created
          this.form.check_type = "Supplier_Check";
          this.$refs.createcheckmodal.show();
          this.suplierchecks.push({
            check_no: "A23444",
            id: 1,
          });
          this.checknumber = this.suplierchecks[this.suplierchecks.length - 1];
        }
      }
    },

    // get check replace status
    chceckReplaceStatus() {
      this.$refs.checkalert.hide();
      this.checknumber = this.suplierchecks[this.suplierchecks.length - 1];
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
      this.fializeAmount();
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
    },

    // finalize bill amount and initialize to final amount
    fializeAmount() {
      let total = 0;
      this.bills.forEach((element) => {
        total = total + parseFloat(element.paidamount);
      });
      this.form.lkramount = total;
    },
  },
};
</script>
<style lang="scss">
@import "@core/scss/vue/libs/vue-select.scss";
</style>
