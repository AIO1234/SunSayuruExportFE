<template>
  <div class="payments">
    <div class="outgoing_payments">
      <!-- header section -->
      <div class="suplier_payments">
        <div class="text-right">
          <b-button
            variant="none"
            class="button_color button_width"
            @click="
              $router.push(
                `/buyer_payments_add/${buyer.id}/${buyer.code}/${buyer.country.name}/${buyer.country.id}`
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

        <!-- select search -->
        <div class="mt-5"></div>
        <b-row>
          <b-col lg="3">
            <v-select
              class="form_input_styles_group"
              v-model="buyer"
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              label="code"
              :options="buyers"
              @input="selectBuyer()"
            >
              <template slot="option" slot-scope="option">
                <div class="d-center">
                  <span v-if="option.country"
                    >{{ option.code }} - {{ option.country.name }}</span
                  >
                </div>
              </template>
              <template #selected-option="option">
                <div v-if="option.code === 'Select Buyer'">
                  {{ option.code }}
                </div>
                <div v-else>
                  <span v-if="option.country">
                    {{ option.code }} -
                    <b> {{ option.country.name }}</b>
                  </span>
                </div>
              </template>
            </v-select>
          </b-col>
          <b-col lg="3">
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
          <b-col lg="3">
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
          <b-col lg="2">
            <b-button
              @click="getBuyerPayments()"
              variant="none"
              class="search_button"
              ><span class="search_text">Search</span></b-button
            >
          </b-col>
          <b-col lg="1">
            <b-button @click="clear()" variant="none" class="search_button"
              ><span class="search_text">Clear</span></b-button
            >
          </b-col>
        </b-row>

        <br />
        <br />
        <!-- remaining balance -->
        <div class="balance_amount" v-if="buyer.code !== 'Select Buyer'">
          <span class="text"
            ><b>{{ buyer.code }} 's</b> Remaining Due Amount For
            <span v-if="buyer.country">{{ buyer.country.name }}</span> :

            <b class="amount">{{ getPriceUsd(buyer_due) }}</b>
          </span>
        </div>
        <!-- table -->
        <div v-if="buyer.code !== 'Select Buyer' && buyer.country">
          <BuyerPaymentTable
            :buyerpayments="buyerpayments"
            :country="buyer.country.name"
            :country_id="buyer.country.id"
            :buyer="buyer"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import buyerpi from "@/Api/Modules/buyers";
import BuyerPaymentTable from "./Components/Table.vue";
import SuplierPaymentCreate from "./Components/AddPayment.vue";
import vSelect from "vue-select";
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
import paymentApi from "@/Api/Modules/payments";
import store from "@/store";

export default {
  data() {
    return {
      startdate: "",
      enddate: "",
      buyer: {
        code: "Select Buyer",
        country: {},
      },
      buyers: [],
      buyerpayments: [],
      buyer_due: "",
    };
  },
  components: {
    SuplierPaymentCreate,
    BuyerPaymentTable,
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
      await this.getAllBuyers();
      // get sessionstorage suplier if any
      if (
        store.getters.getselectedbuyerforpayment.buyer_id !== null ||
        store.getters.getselectedbuyerforpayment.buyer_code !== null ||
        store.getters.getselectedbuyerforpayment.country_id !== null ||
        store.getters.getselectedbuyerforpayment.country_name !== null
      ) {
        // console.log(store.getters.getselectedbuyerforpayment)

        //sessionstorage buyer name initiate
        this.buyer.code = store.getters.getselectedbuyerforpayment.buyer_code;

        //sessionstorage buyer id initiate
        this.buyer.id = store.getters.getselectedbuyerforpayment.buyer_id;

        this.buyer.country.id =
          store.getters.getselectedbuyerforpayment.country_id;
        this.buyer.country.name =
          store.getters.getselectedbuyerforpayment.country_name;

        await this.getBuyerPayments();
      }
    },

    // get all buyers
    async getAllBuyers() {
      await this.$vs.loading({
        scale: 0.8,
      });
      const res = await buyerpi.buyerswithqualities();
      this.buyers = res.data.data;
      this.$vs.loading.close();
    },

    // select suplier method
    async selectBuyer() {
      // assign current selected suplier to store
      store.commit("SET_SELECTED_BUYER_FOR_PAYMENT", this.buyer);

      // call suplier payments
      await this.getBuyerPayments();
    },

    // get suplier payments
    async getBuyerPayments() {
      // store suplier id to session storage

      // if seach data not clear geting payment with range
      if (this.startdate !== "" || this.enddate !== "") {
        const payload = {
          buyer_id: this.buyer.id,
          start_date: this.startdate,
          end_date: this.enddate,
        };
        await this.$vs.loading({
          scale: 0.8,
        });
        const res = await paymentApi.getBuyerPayments(payload);
        this.buyerpayments = res.data.data.buyerpayments;
        this.buyer_due = res.data.data.due_balance;
        this.$vs.loading.close();
      }
      // if seach data clear geting payment with not seach
      else if (this.startdate === "" || this.enddate === "") {
        const payload = {
          buyer_id: this.buyer.id,
        };
        await this.$vs.loading({
          scale: 0.8,
        });
        const res = await paymentApi.getBuyerPayments(payload);
        this.buyerpayments = res.data.data.buyerpayments;
        this.buyer_due = res.data.data.due_balance;
        this.$vs.loading.close();
      }
    },
    // clear searhces

    async clear() {
      // clear start  and date

      this.startdate = "";
      this.enddate = "";
      await this.getBuyerPayments();
    },
  },
};
</script>
<style lang="scss">
@import "@core/scss/vue/libs/vue-select.scss";
</style>
