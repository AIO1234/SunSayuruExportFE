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
                `/suplier_payments_add/${suplier.id}/${suplier.name}`
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

        <!-- select suplier search -->
        <div class="mt-5"></div>
        <b-row>
          <b-col lg="4">
            <v-select
              class="form_input_styles_group"
              v-model="suplier"
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              label="name"
              @input="selectSuplier()"
              :options="supliers"
            >
            </v-select>
          </b-col>
          <!-- date seaches -->
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
        <!-- remaining balance -->
        <div class="balance_amount" v-if="suplier.name !== 'Select Suplier'">
          <span class="text"
            ><b>{{ suplier.name }}'s</b> Remaining Bill Amount :

            <b class="amount" v-if="suplier_due !== '' && suplier_due > 0">{{
              getPrice(suplier_due)
            }}</b>

            <b class="amount" v-else>No Due Balance(Paid Fully)</b>
          </span>
        </div>
        <!-- table -->

        <div v-if="suplier.name !== 'Select Suplier'">
          <SuplierPaymentTable :suplierpayments="suplierpayments" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SuplierPaymentTable from "./Components/Table.vue";
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
import suplierpi from "@/Api/Modules/supliers";
import paymentApi from "@/Api/Modules/payments";
import store from "@/store";
export default {
  data() {
    return {
      startdate: "",
      enddate: "",
      suplier: {
        name: "Select Suplier",
      },
      supliers: [],
      suplierpayments: [],
      suplier_due: "",
    };
  },
  components: {
    SuplierPaymentCreate,
    SuplierPaymentTable,
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
      await this.getAllsupliers();
      // get sessionstorage suplier if any
      if (
        store.getters.getselectedsuplierforpayment.suplier_id !== null ||
        store.getters.getselectedsuplierforpayment.suplier_name !== null
      ) {
        // console.log(store.getters.getselectedsuplierforpayment)

        //sessionstorage suplier name initiate
        this.suplier.name =
          store.getters.getselectedsuplierforpayment.suplier_name;

        //sessionstorage suplier id initiate
        this.suplier.id = store.getters.getselectedsuplierforpayment.suplier_id;

        await this.getSuplierPayments();
      }
    },

    // get all supliers
    async getAllsupliers() {
      await this.$vs.loading({
        scale: 0.8,
      });
      const res = await suplierpi.allSupliers();
      this.supliers = res.data.data;
      this.$vs.loading.close();
    },

    // select suplier method
    async selectSuplier() {
      // assign current selected suplier to store
      store.commit("SET_SELECTED_SUPLIER_FOR_PAYMENT", this.suplier);

      // call suplier payments
      await this.getSuplierPayments();
    },

    // get suplier payments
    async getSuplierPayments() {
      // store suplier id to session storage

      const payload = {
        suplier_id: this.suplier.id,
      };
      await this.$vs.loading({
        scale: 0.8,
      });
      const res = await paymentApi.getSuplierPayments(payload);
      this.suplierpayments = res.data.data.suplierpayments;
      this.suplier_due = res.data.data.due_balance;
      this.$vs.loading.close();
    },
  },
};
</script>
<style lang="scss">
@import "@core/scss/vue/libs/vue-select.scss";
</style>
