<template>
  <div>
    <validation-observer ref="shipmentValidation" #default="{ invalid }">
      <br />
      <h2 class="shipment_create_header">Shipment details</h2>
      <br /><br />
      <b-card>
        <b-container>
          <b-form class="auth-login-form mt-2" @submit.prevent>
            <b-row>
              <!-- Invoice number -->
              <b-col lg="6">
                <b-form-group
                  label="Invoice number*"
                  label-class="form_label_class"
                >
                  <validation-Provider
                    name="Invoice number"
                    rules="required"
                    v-slot="{ errors }"
                  >
                    <b-form-input
                      placeholder="Enter invoice number"
                      v-model="form.invoice_no"
                    ></b-form-input>
                    <span class="text-danger">{{ errors[0] }}</span>
                  </validation-Provider>
                </b-form-group>
              </b-col>
              <!-- country -->
              <b-col lg="6">
                <b-form-group label="Country" label-class="form_label_class">
                  <validation-Provider
                    name="Country"
                    rules="required"
                    v-slot="{ errors }"
                  >
                    <b-form-input
                      readonly
                      v-model="country.name"
                    ></b-form-input>

                    <span class="text-danger">{{ errors[0] }}</span>
                  </validation-Provider>
                </b-form-group>
              </b-col>
              <!-- buyer name -->
              <b-col lg="6" class="pt-2">
                <b-form-group label="Buyer" label-class="form_label_class">
                  <validation-Provider
                    name="Buyer"
                    rules="required"
                    v-slot="{ errors }"
                  >
                    <b-form-input readonly v-model="buyer.code"></b-form-input>

                    <span class="text-danger">{{ errors[0] }}</span>
                  </validation-Provider>
                </b-form-group>
              </b-col>
              <!-- flight -->
              <b-col lg="6" class="pt-2">
                <b-form-group label="Flight*" label-class="form_label_class">
                  <validation-Provider
                    name="Flight"
                    rules="required"
                    v-slot="{ errors }"
                  >
                    <b-form-input
                      placeholder="Enter flight number"
                      v-model="form.flight"
                    ></b-form-input>
                    <span class="text-danger">{{ errors[0] }}</span>
                  </validation-Provider>
                </b-form-group>
              </b-col>
              <!-- Eta -->
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
              <!-- awb -->
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

              <!-- consignee -->
              <b-col lg="12" class="pt-2">
                <b-form-group label="Consignee*" label-class="form_label_class">
                  <validation-Provider
                    name="Consignee"
                    rules="required"
                    v-slot="{ errors }"
                  >
                    <b-form-textarea
                      placeholder="Enter Consignee"
                      v-model="form.consignee"
                    ></b-form-textarea>
                    <span class="text-danger">{{ errors[0] }}</span>
                  </validation-Provider>
                </b-form-group>
              </b-col>
              <!-- Airfreight Cost  -->
              <b-col lg="12" class="pt-2">
                <b-form-group
                  label="Airfreight Cost*"
                  label-class="form_label_class"
                >
                  <validation-Provider
                    name="Airfreight Cost"
                    rules="required"
                    v-slot="{ errors }"
                  >
                    <b-form-input
                      type="number"
                      step="0.01"
                      placeholder="Enter Airfreight Cost"
                      v-model="form.airfreight_cost"
                    ></b-form-input>
                    <span class="text-danger">{{ errors[0] }}</span>
                  </validation-Provider>
                </b-form-group>
              </b-col>
            </b-row>

            <br />
          </b-form>
        </b-container>
      </b-card>
      <div class="pt-2"></div>

      <b-row>
        <b-col lg="6"> </b-col>

        <b-col lg="6" class="text-right">
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="none"
            class="form_submit_button"
            :disabled="invalid"
          >
            <span class="button_text_styles" @click="next()">Next</span>
          </b-button></b-col
        >
      </b-row>
    </validation-observer>
  </div>
</template>
<script>
import shipmentApi from "@/Api/Modules/shipments.js";
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
import vSelect from "vue-select";
import { ValidationObserver } from "vee-validate";
import { ValidationProvider } from "vee-validate/dist/vee-validate.full.esm";
import countryApi from "@/Api/Modules/countries";
export default {
  components: {
    BCard,
    BFormDatepicker,

    BFormRadio,
    BFormFile,
    BForm,
    BFormInput,
    ValidationObserver,
    ValidationProvider,
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
      countries: [],
      buyers: [],
      country: {},

      buyer: {},
    };
  },
  created() {
    this.inititalizedata();
  },
  methods: {
    inititalizedata() {
      this.buyer.id = localStorage.currentSelectedBuyerid;
      this.buyer.code = localStorage.currentSelectedBuyercode;
      this.country.id = localStorage.currentSelectedCountryid;
      this.country.name = localStorage.currentSelectedCountryname;
    },
    // async getcountry() {
    //   this.country.id = parseInt(this.$route.params.country);

    //   const res = await countryApi.allCountries();
    //   this.countries = res.data.data;

    //   const result = this.countries.find(
    //     (option) => option.id === this.country.id
    //   );

    //   this.country = result;
    // },

    // getBuyer() {
    //   this.buyers = this.country.buyers;
    //   this.buyer.id = parseInt(this.$route.params.buyer);
    //   const result = this.buyers.find((option) => option.id === this.buyer.id);
    //   this.buyer = result;
    // },
    async next() {
      this.form.country_id = this.country.id;
      this.form.buyer_id = this.buyer.id;
      this.form.materialcosts = [];
      this.form.additionalcosts = [];
      if (await this.$refs.shipmentValidation.validate()) {
        await this.$vs.loading({
          scale: 0.8,
        });

        await shipmentApi
          .addShipment(this.form)
          .then((response) => {
            localStorage.setItem("currentShipmentId", response.data.data.id);
            this.$vs.loading.close();
            this.$emit("sendComponentName", "ShipmentDetails");
          })
          .catch(() => {
            this.$vs.loading.close();
          });
      }
    },
  },
};
</script>
