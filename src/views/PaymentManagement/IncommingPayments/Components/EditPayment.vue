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
              >Update {{ $route.params.payment_code }} Payment For
              {{ $route.params.buyer_code }} -
              {{ $route.params.country_name }}</b-card-title
            >
          </center>
          <div class="mt-3"></div>
          <b-form @submit.prevent class="Add_Form">
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
                        v-model="form.buyer_converting_rate"
                      ></b-form-input>
                      <span class="text-danger">{{ errors[0] }}</span>
                    </validation-Provider>
                  </b-form-group>
                </b-col>

                <div class="mt-3"></div>
                <span></span>
                <!--bills  repeater form -->
                <b-col lg="12" class="mt-2 repeater_body">
                  <!-- bill repeater form -->
                  <b-row
                    class="mr-1 pt-2"
                    v-for="(bill, index) in bills"
                    :key="bill"
                    :id="bill"
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
                            :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                            label="invoce_no"
                            @input="uniqueShipments(index, bill.billnumber)"
                            :options="billnumbers"
                          >
                            <template slot="option" slot-scope="option">
                              <div class="d-center">
                                <span
                                  >{{ option.invoice_no }} -
                                  <b>{{ option.pending_cost }}</b></span
                                >
                              </div>
                            </template>
                            <template #selected-option="option">
                              <div v-if="bill.billnumber === 'Select Invoice'">
                                {{ bill.billnumber }}
                              </div>
                              <div v-else>
                                {{ option.invoice_no }} -
                                <b> {{ option.pending_cost }}</b>
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
                            :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                            label="status"
                            :options="billstatuses"
                            @input="
                              fillAmount(
                                index,
                                bill.status,
                                bill.billnumber.pending_cost
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
                            v-model="bill.paid_amount"
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
                  <br />
                  <b-button
                    variant="none"
                    @click="repeatBill()"
                    class="repeater_add_bill_buton"
                  >
                    <span class="text">Add bill</span>
                  </b-button>
                  <br /><br />
                </b-col>

                <!-- Amount-->
                <b-col md="12" class="mt-3">
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
                        v-model="form.amount"
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
                    @click="validationPaymentUpdateForm()"
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
import SuplierCheckCreate from "@/views/CheckBook/Components/Create.vue";
import paymentApi from "@/Api/Modules/payments";
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
        amount: 0,
      },

      bills: [],
      // bill numbers
      billnumbers: [],
      // statuses
      billstatuses: [
        {
          status: "Continue",
        },
        {
          status: "Done",
        },
      ],

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
    await this.showPayment();
  },

  methods: {
    // update payment
    async validationPaymentUpdateForm() {
      this.form.payment_currency = "USD";
      this.form.shipments = this.bills;
      this.form.id = this.$route.params.payment_id;

      if (await this.$refs.PaymentUpdateValidation.validate()) {
        await this.$vs.loading({
          scale: 0.8,
        });
        await paymentApi
          .updateBuyerPayment(this.form)
          .then(() => {
            this.$vs.loading.close();
            this.$router.push("/incomming_payments");
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
      const res = await paymentApi.shoBuyerPayment(payload);
      this.form = res.data.data;

      // loop all data for selected shipment
      this.form.buyer_payment_invoices.forEach((val) => {
        const obj = this.billnumbers.find((value) => {
          return value.id === val.id;
        });
        // check paid shipments available in pending shipments
        if (obj === undefined) {
          // if not available in pendinf shipments , paid shipment will  e  added as selected billnumber
          this.billnumbers.push({
            id: val.id,
            invoice_no: val.invoice_no,
            pending_cost: val.pivot.paid_amount,
          });

          this.bills.push({
            billnumber: {
              id: val.id,
              invoice_no: val.invoice_no,
              pending_cost: val.pivot.paid_amount,
            },
            status: val.pivot,
            paid_amount: val.pivot.paid_amount,
            country_id: val.country_id,
          });
        } else {
          // if available in pendinf shipments , pending shipment will  e  added as  selected billnumber
          this.bills.push({
            billnumber: obj,
            status: val.pivot,
            paid_amount: val.pivot.paid_amount,
            country_id: val.country_id,
          });
        }
      });
      this.$vs.loading.close();
    },

    // get new or contnue shipments

    async getPendingShipments() {
      const payload = {
        buyer_id: this.$route.params.buyer_id,
      };
      await this.$vs.loading({
        scale: 0.8,
      });
      const res = await paymentApi.getBuyerPendingShipments(payload);
      this.billnumbers = res.data.data;

      this.$vs.loading.close();
    },

    // repeat bill
    repeatBill() {
      this.bills.push({
        billnumber: "Select Invoice",
        status: "Select Status",
        paid_amount: "",
        country_id: "",
      });
    },
    // remove bill
    removeItem(index) {
      this.bills.splice(index, 1);
      this.finalizeAmount(this.paymentmethod);
    },

    // automatialyy fills the bill paid amount
    fillAmount(index, status, billtotal) {
      // assign country id

      this.bills[index].country_id = this.$route.params.country_id;
      // if status done , amount will be sameas bill value
      if (status.status === "Done") {
        this.bills[index].paid_amount = billtotal;
      }
      // if status continue , amount must be added
      else {
        this.bills[index].paid_amount = 0;
      }

      this.form.amount = "Processing.....";
    },

    // finalize bill amount and initialize to final amount
    finalizeAmount() {
      let total = 0;

      this.bills.forEach((element) => {
        total = total + parseFloat(element.paid_amount);
      });
      this.form.amount = total;
    },

    // check aleady selected the shipment
    uniqueShipments(index, value) {
      if (index > 0) {
        if (this.bills[index - 1].billnumber.id === value.id) {
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
