<template>
  <div class="payments">
    <div class="outgoing_payments">
      <!-- header section -->
      <div class="additional_payments">
        <div class="text-right">
          <b-button
            variant="none"
            class="button_color button_width"
            @click="$router.push('/addtional_payments_add')"
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
          <b-col lg="3">
            <b-button
              @click="getAdditionalPayments()"
              variant="none"
              class="search_button"
              ><span class="search_text">Search</span></b-button
            >
          </b-col>
          <b-col lg="3">
            <b-button @click="clear()" variant="none" class="search_button"
              ><span class="search_text">Clear</span></b-button
            >
          </b-col>
        </b-row>

        <br />
        <br />
        <div class="balance_amount">
          <span class="text"
            >Remaining Additional Bill Amount :
            <b
              class="amount"
              v-if="additional_due !== '' && additional_due > 0"
              >{{ getPrice(additional_due) }}</b
            >
            <b class="amount" v-else>No Due Balance(Paid Fully)</b>
          </span>
        </div>
        <!-- table -->
        <AdditionalPaymentTable :additionalpayments="additionalpayments" />
      </div>
    </div>
  </div>
</template>
<script>
import AdditionalPaymentTable from "./Components/Table.vue";
import vSelect from "vue-select";
import paymentApi from "@/Api/Modules/payments";
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
      additionalpayments: [],
      additional_due: "",
    };
  },
  components: {
    AdditionalPaymentTable,
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
    await this.getAdditionalPayments();
  },
  methods: {
    // get suplier payments
    async getAdditionalPayments() {
      // if seach data not clear geting payment with range
      if (this.startdate !== "" || this.enddate !== "") {
        const payload = {
          start_date: this.startdate,
          end_date: this.enddate,
        };

        await this.$vs.loading({
          scale: 0.8,
        });
        const res = await paymentApi.getAdditionalPayments(payload);
        this.additionalpayments = res.data.data.additionalpayments;
        this.additional_due = res.data.data.due_balance;
        this.$vs.loading.close();
      }
      // if seach data clear geting payment with not seach
      else if (this.startdate === "" || this.enddate === "") {
        await this.$vs.loading({
          scale: 0.8,
        });
        const res = await paymentApi.getAdditionalPayments();
        this.additionalpayments = res.data.data.additionalpayments;
        this.additional_due = res.data.data.due_balance;
        this.$vs.loading.close();
      }
    },

    // clear searhces

    async clear() {
      // clear start  and date

      this.startdate = "";
      this.enddate = "";
      await this.getAdditionalPayments();
    },
  },
};
</script>
<style lang="scss">
@import "@core/scss/vue/libs/vue-select.scss";
</style>
