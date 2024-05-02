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
              <b-col lg="6">
                <b-form-group
                  label="Shipment number*"
                  label-class="form_label_class"
                >
                  <validation-Provider
                    name="Shipment number"
                    rules="required"
                    v-slot="{ errors }"
                  >
                    <b-form-input
                      placeholder="Enter shipment number"
                      v-model="form.shipment_no"
                    ></b-form-input>
                    <span class="text-danger">{{ errors[0] }}</span>
                  </validation-Provider>
                </b-form-group>
              </b-col>

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

              <b-col lg="6" class="pt-2">
                <b-form-group label="Buyer" label-class="form_label_class">
                  <validation-Provider
                    name="Buyer"
                    rules="required"
                    v-slot="{ errors }"
                  >
                    <b-form-input readonly v-model="buyer.name"></b-form-input>

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
                      placeholder="Enter flight number"
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
  async created() {
    await this.getcountry();
    this.getBuyer();
  },
  methods: {
    async getcountry() {
      this.country.id = parseInt(this.$route.params.country);

      const res = await countryApi.allCountries();
      this.countries = res.data.data;

      const result = this.countries.find(
        (option) => option.id === this.country.id
      );

      this.country = result;
    },

    getBuyer() {
      this.buyers = this.country.buyers;
      this.buyer.id = parseInt(this.$route.params.buyer);
      const result = this.buyers.find((option) => option.id === this.buyer.id);
      this.buyer = result;
    },
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
          })
          .catch(() => {
            this.$vs.loading.close();
          });

        this.$emit("sendComponentName", "ShipmentDetails");
      }
    },
  },
};
</script>
