<template>
  <div>
    <validation-observer ref="additionalValidation" #default="{ invalid }">
      <br />
      <h2 class="shipment_create_header">Airfreight Cost</h2>
      <br /><br />
      <b-row>
        <b-col lg="3">
          <b-form-group
            label="Airfreight Company*"
            label-class="form_label_class"
          >
            <validation-Provider name="Airfreight Company" v-slot="{ errors }">
              <v-select
                v-model="airfreight_company"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                label="company_name"
                :options="airefreightcompanies"
                class="airfeight_select"
              />
              <span class="text-danger">{{ errors[0] }}</span>
            </validation-Provider>
          </b-form-group>
        </b-col>
        <b-col lg="3">
          <b-form-group label="Converting Rate*" label-class="form_label_class">
            <validation-Provider name="Converting Rate" v-slot="{ errors }">
              <b-form-input
                type="number"
                placeholder="Enter Converting Rate"
                v-model="form.airfreight_converting_rate"
                @input="convertvalue()"
              ></b-form-input>
              <span class="text-danger">{{ errors[0] }}</span>
            </validation-Provider>
          </b-form-group>
        </b-col>

        <b-col lg="3">
          <b-form-group
            label="Airfreight Cost(USD)*"
            label-class="form_label_class"
          >
            <validation-Provider name="Airfreight Cost" v-slot="{ errors }">
              <b-form-input
                type="number"
                placeholder="Enter Airfreight Cost"
                v-model="usd_airfreight_cost"
                @input="convertvalueToLkr()"
              ></b-form-input>
              <span class="text-danger">{{ errors[0] }}</span>
            </validation-Provider>
          </b-form-group>
        </b-col>

        <b-col lg="3">
          <b-form-group
            label="Lkr Airfreight Cost(LKR)*"
            label-class="form_label_class"
          >
            <validation-Provider name="Airfreight Cost" v-slot="{ errors }">
              <b-form-input
                type="number"
                placeholder="Enter Airfreight Cost"
                v-model="airfreight_cost"
                @input="convertvalueToUsd()"
              ></b-form-input>
              <span class="text-danger">{{ errors[0] }}</span>
            </validation-Provider>
          </b-form-group>
        </b-col>
      </b-row>
      <br /><br />
      <h2 class="shipment_create_header">Additional cost</h2>
      <br /><br />
      <div>
        <div>
          <!-- additional Cost Form -->
          <b-form
            ref="form"
            :style="{ height: trHeight }"
            class="repeater-form"
            @submit.prevent="repeateAgain"
          >
            <!-- Row Loop -->
            <b-row
              class="pt-2"
              v-for="(item, index) in additionalcosts"
              :id="item.id"
              :key="item.id"
              ref="row"
            >
              <!-- Description -->
              <b-col lg="5">
                <b-form-group
                  label="Description*"
                  label-class="form_label_class"
                >
                  <validation-Provider name="Description" v-slot="{ errors }">
                    <b-form-input
                      placeholder="Enter description"
                      v-model="item.description"
                    />
                    <span class="text-danger">{{ errors[0] }}</span>
                  </validation-Provider>
                </b-form-group>
              </b-col>

              <!--Amount -->
              <b-col lg="5">
                <b-form-group label="Amount*" label-class="form_label_class">
                  <validation-Provider name="Amount" v-slot="{ errors }">
                    <b-form-input
                      placeholder="Enter amount"
                      v-model="item.amount"
                      type="number"
                      step="0.00"
                    />
                    <span class="text-danger">{{ errors[0] }}</span>
                  </validation-Provider>
                </b-form-group>
              </b-col>

              <b-col lg="2" class="text-right minus_button_margin">
                <b-button variant="none" @click="removeItem(index)">
                  <b-img src="@/assets/images/Group.png"></b-img>
                </b-button>
              </b-col>
              <!-- Remove Button -->
            </b-row>
          </b-form>
        </div>
        <br />
        <div class="text-right">
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="none"
            @click="repeateAgain1()"
            class="form_submit_button"
          >
            <span class="button_text_styles">Add cost</span>
          </b-button>
        </div>

        <div class="pt-5 d-flex justify-content-center">
          <b-button
            class="additionalcost_submit_button"
            variant="none"
            @click="submitData()"
            ><span class="additionalcost_submit_button_text"
              >Submit</span
            ></b-button
          >
        </div>
      </div>

      <div class="pt-5"></div>
      <div class="pt-3"></div>
      <b-row>
        <b-col lg="6">
          <b-button variant="none" class="backbutton" @click="back()">
            <span class="back_button_text_styles">Back</span>
          </b-button>
        </b-col>

        <b-col lg="6" class="text-right"> </b-col>
      </b-row>
    </validation-observer>
  </div>
</template>
<script>
import vSelect from "vue-select";
import shipmentApi from "@/Api/Modules/shipments.js";
import airefreightsApi from "@/Api/Modules/airefreights";
import { ValidationObserver } from "vee-validate";
import { ValidationProvider } from "vee-validate/dist/vee-validate.full.esm";
import {
  BCard,
  BFormRadio,
  BFormGroup,
  BInputGroup,
  BFormTextarea,
  BForm,
  BImg,
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
import mixin from "@/mixins/commonmixins";
export default {
  data() {
    return {
      form: {},
      nextTodoId: 1,
      additionalcosts: [
        {
          id: 1,
          description: "",
          amount: "",
          prevHeight: 0,
        },
      ],
      airefreightcompanies: [],
      airfreight_company: {},

      // updating data

      usd_airfreight_cost: "",
      airfreight_cost: "",
    };
  },
  components: {
    BCard,
    BFormRadio,
    BImg,
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
  async created() {
    await this.showAdditionalCosts();
  },
  methods: {
    //airfreight copanies

    async getairfreights() {
      const res = await airefreightsApi.allAirfreids();

      this.airefreightcompanies = res.data.data;
    },
    //  show current saves additional costs

    async showAdditionalCosts() {
      const payload = {
        shipment_id: localStorage.currentShipmentId,
        show: "additional_costs",
      };
      await this.$vs.loading({
        scale: 0.8,
      });

      const res = await shipmentApi.showShipment(payload);
      this.additionalcosts = res.data.data.additional_costs;

      this.airfreight_cost = res.data.data.airfreid_cost;
      this.airfreight_company.id = res.data.data.airfreight_id;

      // if airfreight is not null
      if (res.data.data.company_name !== null) {
        this.airfreight_company.company_name = res.data.data.company_name;
      }
      // if airfreight is null
      else {
        this.airfreight_company.company_name = "Select Airfreight";
      }

      this.form.airfreight_converting_rate =
        res.data.data.airfreight_converting_rate;
      this.usd_airfreight_cost = res.data.data.usd_airfreight_cost;

      await this.getairfreights();
      this.$vs.loading.close();
    },

    // submit data
    async submitData() {
      if (await this.$refs.additionalValidation.validate()) {
        await this.$vs.loading({
          scale: 0.8,
        });

        this.form.additionalcosts = this.additionalcosts;
        this.form.shipment_id = localStorage.getItem("currentShipmentId");
        // if company name null
        if (this.airfreight_company.company_name !== "Select Airfreight") {
          this.form.airfreight_id = this.airfreight_company.id;
        }
        // if not null
        else {
          this.form.airfreight_id = "";
        }

        this.form.usd_airfreight_cost = this.usd_airfreight_cost;
        this.form.airfreight_cost = this.airfreight_cost;

        await shipmentApi
          .addShipmentAditionalCosts(this.form)
          .then(() => {
            this.$vs.loading.close();
          })
          .catch(() => {
            this.$vs.loading.close();
          });
      }
    },
    // back button
    back() {
      this.$emit("DirectBack", "");
    },

    // repeat button
    repeateAgain1() {
      this.additionalcosts.push({
        id: (this.nextTodoId += this.nextTodoId),
        description: "",
        amount: "",
      });
    },
    // remove item
    removeItem(index) {
      this.additionalcosts.splice(index, 1);
    },

    // convert value with currency

    convertvalue() {
      // calculate lkr cost with rate
      this.airfreight_cost =
        this.usd_airfreight_cost * this.form.airfreight_converting_rate;

      // calculate usd cost with rate
      this.usd_airfreight_cost =
        this.airfreight_cost / this.form.airfreight_converting_rate;

      // convert to double
      this.airfreight_cost = mixin.methods.getPriceWithOutCurrency(
        this.airfreight_cost
      );

      // convert to double
      this.usd_airfreight_cost = mixin.methods.getPriceWithOutCurrency(
        this.usd_airfreight_cost
      );
    },

    convertvalueToUsd() {
      // calculate usd cost with rate
      this.usd_airfreight_cost =
        this.airfreight_cost / this.form.airfreight_converting_rate;

      // convert to double
      this.usd_airfreight_cost = mixin.methods.getPriceWithOutCurrency(
        this.usd_airfreight_cost
      );
    },

    convertvalueToLkr() {
      // calculate lkr cost with rate

      this.airfreight_cost =
        this.usd_airfreight_cost * this.form.airfreight_converting_rate;

      // convert to double
      this.airfreight_cost = mixin.methods.getPriceWithOutCurrency(
        this.airfreight_cost
      );
    },
  },
};
</script>
<style lang="scss" scoped>
.airfeight_select {
  border-color: #ffffff;
  background-color: white;
  @media (max-width: 600px) {
    width: 180px;
  }
}
</style>
