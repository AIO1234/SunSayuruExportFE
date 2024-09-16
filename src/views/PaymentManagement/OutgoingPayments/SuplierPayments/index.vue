<template>
  <div class="payments">
    <div class="outgoing_payments">
      <!-- header section -->
      <div class="suplier_payments">
        <div class="text-right">
          <b-button
            variant="none"
            class="button_color button_width"
            @click="$router.push('/suplier_payments_add')"
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
          <b-col lg="4">
            <v-select
              class="form_input_styles_group"
              v-model="suplier"
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              label="title"
              :options="supliers"
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
            <v-date-picker v-model="startdate" is-required>
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
                    placeholder="Start Date"
                  ></b-form-input>
                </b-input-group>
              </template>
            </v-date-picker>
          </b-col>
        </b-row>

        <br />
        <br />
        <!-- remaining balance -->
        <div class="balance_amount">
          <span class="text"
            >Remaining Supplier Bill Amount :
            <b class="amount">Rs.500,000.00</b></span
          >
        </div>
        <!-- table -->
        <SuplierPaymentTable />
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
export default {
  data() {
    return {
      startdate: "",
      enddate: "",
      suplier: {
        title: "Sumith",
        id: 1,
      },
      supliers: [
        {
          title: "Sumith",
          id: 1,
        },
        {
          title: "Kamal",
          id: 2,
        },
      ],
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
  methods: {
    // get all supliers

    async getAllsupliers() {
      await this.$vs.loading({
        scale: 0.8,
      });
      const res = await airfreightsApi.allAirfreids();
      this.airfreights = res.data.data;
      this.$vs.loading.close();
    },
  },
};
</script>
<style lang="scss">
@import "@core/scss/vue/libs/vue-select.scss";
</style>
