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
              >Add payment For {{ $route.params.name }}</b-card-title
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
                            v-model="bill.billnumber"
                            :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                            label="invoice_no"
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
                              <div v-if="option === 'Select Invoice'">
                                {{ option }}
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
                            v-model="bill.status"
                            :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                            label="title"
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
                            placeholder="Enter Amount"
                            v-model="bill.paid_amount"
                            @input="form.amount = 'Processing.....'"
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
                        @input="finalizeAmount(paymentmethod, true)"
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
                        v-model="form.amount"
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

                          <div class="d-center" v-else>
                            <span
                              >{{ option.check_no }} - {{ option.amount }}</span
                            >
                          </div>
                        </template>

                        <template #selected-option="option">
                          <div v-if="option.check_no">
                            {{ option.check_no }} -
                            {{ option.amount }}
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
                  v-if="paymentmethod.title === 'Cash'"
                >
                  <b-button
                    variant="primary"
                    @click="finalizeAmount(paymentmethod)"
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
        <SuplierCheckCreate :propForm="form" @close="closeModal" />
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
import paymentApi from "@/Api/Modules/payments";
import checkApi from "@/Api/Modules/checkbook";
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
        amount: 0,
      },
      // bill repeater
      bills: [
        {
          billnumber: "Select Invoice",
          status: "Select Status",
          paid_amount: "",
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
        title: "Cash",
        id: 2,
      },
      // suplier checks
      suplierchecks: [],
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
      this.form.payment_method = this.paymentmethod.title;
      this.form.check_id = this.checknumber.id;
      this.form.suplier_id = this.$route.params.id;
      this.form.shipments = this.bills;

      if (await this.$refs.PaymentCreateValidation.validate()) {
        await this.$vs.loading({
          scale: 0.8,
        });
        await paymentApi
          .storeSuplierPayment(this.form)
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
        suplier_id: this.$route.params.id,
      };
      await this.$vs.loading({
        scale: 0.8,
      });
      const res = await paymentApi.getSuplierPendingShipments(payload);
      this.billnumbers = res.data.data;
      console.log(this.billnumbers);
      this.$vs.loading.close();
    },

    // get continue checks

    async getContinueChecks(payload, load = false) {
      if (load === true) {
        await this.$vs.loading({
          scale: 0.8,
        });

        const res = await checkApi.continuChecks(payload);
        this.suplierchecks = res.data.data;

        this.suplierchecks.push({ check_no: "Add New" });

        this.suplierchecks = this.suplierchecks.reverse();
        this.$vs.loading.close();
      }
    },

    // open  check modal

    opencheckmodel() {
      // finalize bill amount and initialize to final amount

      this.finalizeAmount(this.paymentmethod);

      // open chcek modal
      if (this.checknumber.check_no === "Add New") {
        // if check is already created
        if (this.suplierchecks.length > 1) {
          this.$refs.checkalert.show();
        } else {
          // if check is not already created
          this.form.check_type = "Suplier_Check";
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

    async closeModal() {
      // hide create check modal
      this.$refs.createcheckmodal.hide();
      const payload = {
        type: "Suplier_Check",
      };
      await this.getContinueChecks(payload, true);
      this.checknumber = this.suplierchecks[this.suplierchecks.length - 1];
    },

    // get check replace status
    chceckReplaceStatus() {
      // if checkis already created
      this.$refs.checkalert.hide();
      this.checknumber = this.suplierchecks[this.suplierchecks.length - 1];
      this.form.check_type = "Suplier_Check";
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
        billnumber: "Select Invoice",
        status: "Select Status",
        paid_amount: "",
      });
    },
    // remove bill
    removeItem(index) {
      this.bills.splice(index, 1);
      this.finalizeAmount(this.paymentmethod);
    },

    // automatialyy fills the bill paid amount trigger with status
    fillAmount(index, status, billtotal) {
      // if status done , amount will be sameas bill value
      if (status.title === "Done") {
        this.bills[index].paid_amount = billtotal;
      }
      // if status continue , amount must be added
      else {
        this.bills[index].paid_amount = 0;
      }
      this.form.amount = "Processing.....";
    },

    // finalize bill amount and initialize to final amount
    async finalizeAmount(data, load = false) {
      if (data.title === "Check") {
        const payload = {
          type: "Suplier_Check",
        };
        await this.getContinueChecks(payload, load);
      }
      let total = 0;
      this.bills.forEach((element) => {
        total = total + parseFloat(element.paid_amount);
      });
      this.form.amount = total;
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
