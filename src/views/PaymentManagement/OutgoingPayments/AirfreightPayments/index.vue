<template>
  <div class="payments">
    <div class="outgoing_payments">
      <!-- header section -->
      <div class="airfreight_payments">
        <div class="text-right">
          <b-button
            variant="none"
            class="button_color button_width"
            @click="
              $router.push(
                `/airfreight_payments_add/${airfreight.id}/${airfreight.company_name}`
              )
            "
          >
            <div class="d-flex justify-content-start">
              <b-img
                style="padding-top: 3px; padding-bottom: 3px"
                width="22px"
                height="30px"
                src="@/assets/images/icons/Icons Solid.png"
              ></b-img>

              <span class="button_text_styles pl-1">Add Payment</span>
            </div>
          </b-button>
        </div>

        <!-- select airfreiht search -->
        <div class="mt-5"></div>
        <b-row>
          <b-col lg="4">
            <v-select
              class="form_input_styles_group"
              v-model="airfreight"
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              label="company_name"
              @input="selectAirfreight()"
              :options="airfreights"
            >
            </v-select>
          </b-col>
          <b-col lg="4">
            <v-date-picker v-model="startdate" is-required>
              <template v-slot="{ inputValue, inputEvents }">
                <b-input-group
                  class="input-group-merge form_input_styles_group"
                >
                  <b-input-group-prepend is-text>
                    <b-img src="@/assets/images/icons/Vector (1).png"></b-img>
                  </b-input-group-prepend>
                  <b-form-input
                    class="bg-white border px-2 py-1 rounded form_input_styles_date_1"
                    :value="inputValue"
                    v-on="inputEvents"
                    placeholder="Start Date"
                  ></b-form-input>
                </b-input-group>
              </template> </v-date-picker
          ></b-col>
          <b-col lg="4">
            <v-date-picker v-model="enddate" is-required>
              <template v-slot="{ inputValue, inputEvents }">
                <b-input-group
                  class="input-group-merge form_input_styles_group"
                >
                  <b-input-group-prepend is-text>
                    <b-img src="@/assets/images/icons/Vector (1).png"></b-img>
                  </b-input-group-prepend>
                  <b-form-input
                    class="bg-white border px-2 py-1 rounded form_input_styles_date"
                    :value="inputValue"
                    v-on="inputEvents"
                    placeholder="End Date"
                  ></b-form-input>
                </b-input-group>
              </template>
            </v-date-picker>
          </b-col>
        </b-row>

        <br />
        <br />

        <div
          class="balance_amount"
          v-if="airfreight.company_name !== 'Select Airfreight'"
        >
          <span class="text">
            <b>{{ airfreight.company_name }}'s </b> Remaining Airfreight Bill
            Amount :
            <b class="amount"
              >{{ getPrice(airfreight_lkr_due) }}({{
                getPriceUsd(airfreight_usd_due)
              }})
            </b>
          </span>
        </div>
        <!-- table -->
        <div v-if="airfreight.company_name !== 'Select Airfreight'">
          <AirfreightPaymentTable
            :airfreightpayments="airfreightpayments"
            :airfreight="airfreight"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AirfreightPaymentTable from "./Components/Table.vue";
import airfreigtApi from "@/Api/Modules/airefreights";
import suplierpi from "@/Api/Modules/supliers";
import paymentApi from "@/Api/Modules/payments";
import vSelect from "vue-select";
import store from "@/store";
import {
  BImg,
  BContainer,
  BModal,
  VBModal,
  BRow,
  BCol,
  BButton,
  BInputGroupPrepend,
  BInputGroup,
  BFormInput,
} from "bootstrap-vue";
export default {
  data() {
    return {
      startdate: "",
      enddate: "",
      airfreight: {
        company_name: "Select Airfreight",
      },
      airfreights: [],
      airfreightpayments: [],
      airfreight_lkr_due: "",
      airfreight_usd_due: "",
    };
  },
  components: {
    AirfreightPaymentTable,
    BInputGroup,
    vSelect,
    BImg,
    BModal,
    BContainer,
    VBModal,
    BRow,
    BCol,
    BButton,
    BInputGroupPrepend,
    BFormInput,
  },
  async created() {
    await this.initializeData();
  },
  methods: {
    // initiate  data with loading
    async initializeData() {
      // call all supliers
      await this.getAllAirfreights();
      // get sessionstorage suplier if any
      if (
        store.getters.getselectedairfreightforpayment.airfreight_id !== null ||
        store.getters.getselectedairfreightforpayment.company_name !== null
      ) {
        // console.log(store.getters.getselectedsuplierforpayment)

        // sessionstorage suplier name initiate
        this.airfreight.company_name =
          store.getters.getselectedairfreightforpayment.company_name;

        // sessionstorage suplier id initiate
        this.airfreight.id =
          store.getters.getselectedairfreightforpayment.airfreight_id;

        await this.getAirfreightPayments();
      }
    },

    // get all airfreights

    async getAllAirfreights() {
      await this.$vs.loading({
        scale: 0.8,
      });
      const res = await airfreigtApi.allAirfreids();
      this.airfreights = res.data.data;
      this.$vs.loading.close();
    },

    // select suplier method
    async selectAirfreight() {
      // assign current selected suplier to store
      store.commit("SET_SELECTED_AIRFREIGHT_FOR_PAYMENT", this.airfreight);
      // call suplier payments
      await this.getAirfreightPayments();
    },

    // get suplier payments
    async getAirfreightPayments() {
      // store suplier id to session storage
      const payload = {
        airfreight_id: this.airfreight.id,
      };
      await this.$vs.loading({
        scale: 0.8,
      });
      const res = await paymentApi.getAirfreightPayments(payload);
      this.airfreightpayments = res.data.data.airfreightpayments;

      this.airfreight_lkr_due = res.data.data.lkr_due_balance;
      this.airfreight_usd_due = res.data.data.usd_due_balance;

      this.$vs.loading.close();
    },
  },
};
</script>
<style lang="scss">
@import "@core/scss/vue/libs/vue-select.scss";
</style>
