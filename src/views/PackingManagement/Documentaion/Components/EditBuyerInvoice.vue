<template>
  <div class="custom_invoice">
    <h2 class="shipment_number text-right">
      Shipment no - {{ $route.params.invoice_no }}
    </h2>
    <div style="background-color: #fffef8; border-radius: 10px">
      <b-container>
        <b-row class="pl-2 pr-2 pt-3">
          <b-col lg="6" class="pt-2">
            <b-form-group label="Invoice no*" label-class="form_label_class">
              <validation-Provider
                name="Invoice no"
                rules="required"
                v-slot="{ errors }"
              >
                <b-form-input
                  placeholder="Enter Invoice number"
                  v-model="form.invoice_no"
                ></b-form-input>
                <span class="text-danger">{{ errors[0] }}</span>
              </validation-Provider>
            </b-form-group>
          </b-col>

          <b-col lg="6" class="pt-2">
            <b-form-group label="AWB*" label-class="form_label_class">
              <validation-Provider
                name="AWB"
                rules="required"
                v-slot="{ errors }"
              >
                <b-form-input
                  placeholder="Enter AWB number"
                  v-model="form.awb"
                ></b-form-input>
                <span class="text-danger">{{ errors[0] }}</span>
              </validation-Provider>
            </b-form-group>
          </b-col>

          <b-col lg="6" class="pt-2">
            <b-form-group label="Flight*" label-class="form_label_class">
              <validation-Provider
                name="Flight"
                rules="required"
                v-slot="{ errors }"
              >
                <b-form-input
                  placeholder="Enter Flight "
                  v-model="form.flight"
                ></b-form-input>
                <span class="text-danger">{{ errors[0] }}</span>
              </validation-Provider>
            </b-form-group>
          </b-col>

          <b-col lg="6" class="pt-2">
            <b-form-group label="ETA*" label-class="form_label_class">
              <validation-Provider
                name="ETA"
                rules="required"
                v-slot="{ errors }"
              >
                <b-form-datepicker
                  placeholder="Select Date"
                  v-model="form.eta"
                ></b-form-datepicker>
                <span class="text-danger">{{ errors[0] }}</span>
              </validation-Provider>
            </b-form-group>
          </b-col>
        </b-row>
        <br />
      </b-container>
    </div>

    <div style="background-color: #f3f3f3; border-radius: 10px" class="mt-3">
      <b-container>
        <b-row class="pl-2 pr-2 pt-2">
          <b-col><span class="edit_form_header">Seafood type</span></b-col>
          <b-col><span class="edit_form_header">Quality</span></b-col>
          <b-col><span class="edit_form_header">Grading (Kg)</span></b-col>
          <b-col><span class="edit_form_header">Weight (Kg)</span></b-col>
          <b-col><span class="edit_form_header">Rate per Kg ($)</span></b-col>
          <b-col><span class="edit_form_header">Total cost ($)</span></b-col>
        </b-row>

        <b-row
          class="pl-2 pr-2 pt-2"
          v-for="(seafood, index) in form.boxes.seafoods"
          :key="seafood.seafoodtype"
        >
          <b-col>
            <b-form-group label-class="form_label_class">
              <validation-Provider
                name="Seafood Type"
                rules="required"
                v-slot="{ errors }"
              >
                <b-form-input
                  class="input_background"
                  placeholder="Enter Business name"
                  v-model="seafood.seafoodtype"
                ></b-form-input>
                <span class="text-danger">{{ errors[0] }}</span>
              </validation-Provider>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group label-class="form_label_class">
              <validation-Provider
                name="Quality"
                rules="required"
                v-slot="{ errors }"
              >
                <b-form-input
                  class="input_background"
                  placeholder="Enter Quality"
                  v-model="seafood.quality"
                ></b-form-input>
                <span class="text-danger">{{ errors[0] }}</span>
              </validation-Provider>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group label-class="form_label_class">
              <validation-Provider
                name="Grading (Kg)"
                rules="required"
                class="input_background"
                v-slot="{ errors }"
              >
                <b-form-input
                  class="input_background"
                  placeholder="Enter Grading"
                  v-model="seafood.grading"
                ></b-form-input>
                <span class="text-danger">{{ errors[0] }}</span>
              </validation-Provider>
            </b-form-group>
          </b-col>

          <b-col>
            <b-form-group label-class="form_label_class">
              <validation-Provider
                name="Weight (Kg)"
                rules="required"
                v-slot="{ errors }"
              >
                <b-form-input
                  class="input_background"
                  placeholder="Enter Weight"
                  v-model="seafood.weight"
                ></b-form-input>
                <span class="text-danger">{{ errors[0] }}</span>
              </validation-Provider>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group label-class="form_label_class">
              <validation-Provider
                name="Rate per Kg ($)"
                rules="required"
                v-slot="{ errors }"
              >
                <b-form-input
                  class="input_background"
                  placeholder="Enter Rate"
                  v-model="seafood.price_rate"
                  @input="
                    changeAmount(seafood.price_rate, seafood.weight, index)
                  "
                ></b-form-input>
                <span class="text-danger">{{ errors[0] }}</span>
              </validation-Provider>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group label-class="form_label_class">
              <validation-Provider
                name="Total cost ($)"
                rules="required"
                v-slot="{ errors }"
              >
                <b-form-input
                  class="input_background"
                  placeholder="Enter Total cost"
                  v-model="seafood.total_amount"
                ></b-form-input>
                <span class="text-danger">{{ errors[0] }}</span>
              </validation-Provider>
            </b-form-group>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <div class="d-flex justify-content-end pt-3">
      <b-button
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        variant="none"
        class="form_submit_button"
      >
        <span class="button_text_styles" @click="updateBuyerInvoice()"
          >Save</span
        >
      </b-button>
    </div>
  </div>
</template>
<script>
import reportApi from "@/Api/Modules/reports";
import shipmentApi from "@/Api/Modules/shipments";
import { ValidationObserver } from "vee-validate";
import vSelect from "vue-select";
import { ValidationProvider } from "vee-validate/dist/vee-validate.full.esm";
import {
  BCard,
  BFormRadio,
  BFormGroup,
  BInputGroup,
  BFormDatepicker,
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
} from "bootstrap-vue";
export default {
  components: {
    BCard,
    vSelect,
    ValidationProvider,
    ValidationObserver,
    BFormRadio,
    BFormGroup,
    BInputGroup,
    BFormDatepicker,
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
  },
  data() {
    return {
      form: {},
      buyerinvoice: {},
    };
  },
  async created() {
    await this.getBuyerInvoice();
  },
  methods: {
    // get buyer invoice
    async getBuyerInvoice() {
      const payload = {
        shipment_id: this.$route.params.shipment_id,
      };
      await this.$vs.loading({
        scale: 0.8,
      });
      const res = await reportApi.buyerInvoice(payload);
      this.buyerinvoice = res.data.data;
      this.form = this.buyerinvoice;
      this.$vs.loading.close();
    },

    //update amount

    changeAmount(price_rate, weight, index) {
      this.form.boxes.seafoods[index].total_amount = price_rate * weight;
    },
    // update buyer invoice
    async updateBuyerInvoice() {
      this.form.shipment_id = this.$route.params.shipment_id;
      await this.$vs.loading({
        scale: 0.8,
      });
      await shipmentApi
        .updateBuyerInvoice(this.form)
        .then(() => {
          this.$vs.loading.close();
        })
        .catch(() => {
          this.$vs.loading.close();
        });

      this.$vs.loading.close();
    },
  },
};
</script>
