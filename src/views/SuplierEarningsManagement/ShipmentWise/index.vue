<template>
  <div>
    <div class="pt-3">
      <b-row>
        <div class="pt-5 mobile_only_view"></div>
        <b-col lg="2">
          <v-date-picker v-model="startdate" is-required>
            <template v-slot="{ inputValue, inputEvents }">
              <b-input-group class="input-group-merge form_input_styles_group">
                <b-input-group-prepend is-text>
                  <b-img src="@/assets/images/icons/Vector (1).png"></b-img>
                </b-input-group-prepend>
                <b-form-input
                  class="bg-white border px-2 py-1 rounded form_input_styles_date"
                  :value="inputValue"
                  v-on="inputEvents"
                  placeholder="16 Feb 2024 "
                ></b-form-input>
              </b-input-group>
            </template>
          </v-date-picker>
        </b-col>
        <div class="pt-5 mobile_only_view"></div>
        <b-col lg="2">
          <v-date-picker v-model="enddate" is-required>
            <template v-slot="{ inputValue, inputEvents }">
              <b-input-group class="input-group-merge form_input_styles_group">
                <b-input-group-prepend is-text>
                  <b-img src="@/assets/images/icons/Vector (1).png"></b-img>
                </b-input-group-prepend>
                <b-form-input
                  class="bg-white border px-2 py-1 rounded form_input_styles_date"
                  :value="inputValue"
                  v-on="inputEvents"
                  placeholder="16 Feb 2024 "
                ></b-form-input>
              </b-input-group>
            </template>
          </v-date-picker>
        </b-col>
        <b-col lg="3" cols="6">
          <b-button
            class="search_button"
            variant="none"
            block
            @click="searchDate()"
            ><span class="text-white search_text">Search</span></b-button
          >
        </b-col>

        <b-col lg="2" cols="6">
          <b-button
            class="search_button"
            variant="danger"
            block
            @click="clearSearch()"
            ><span class="text-white search_text">Clear</span></b-button
          >
        </b-col>
        <div class="pt-5 mobile_only_view"></div>
      </b-row>
    </div>
    <div class="pt-5">
      <b-card>
        <EarningTable :shipments="shipments" />
      </b-card>
    </div>
  </div>
</template>

<script>
import EarningTable from "@/views/SuplierEarningsManagement/ShipmentWise/Components/EarningTable.vue";
import CommonHeaderNew from "@/Components/CommonHeaderNew.vue";
import Ripple from "vue-ripple-directive";
import reportApi from "@/Api/Modules/reports";
import {
  BFormInput,
  BRow,
  BCard,
  BImg,
  BCol,
  BButton,
  BInputGroup,
  BInputGroupPrepend,
} from "bootstrap-vue";
export default {
  name: "suplierearnings",
  data() {
    return {
      modalType: "",
      shipments: [],
      startdate: "",
      enddate: "",
    };
  },
  components: {
    BInputGroup,
    BImg,
    CommonHeaderNew,
    BCard,
    BButton,
    BInputGroupPrepend,
    EarningTable,
    BFormInput,
    BRow,
    BCol,
  },
  async created() {
    this.modalType = "Earnings Modal";
    await this.allShipments();
  },
  directives: {
    Ripple,
  },
  methods: {
    async allShipments(reset = false) {
      await this.$vs.loading({
        scale: 0.8,
      });
      let payload = {};
      if (reset === false) {
        payload = {
          start_date: "",
          end_date: "",
        };
      } else if (reset === true) {
        payload = {
          start_date: this.startdate,
          end_date: this.enddate,
        };
      }

      const res = await reportApi.allShipements(payload);
      this.shipments = res.data.data;
      this.$vs.loading.close();
    },

    async searchDate() {
      await this.allShipments(true);
    },
    async clearSearch() {
      await this.allShipments(false);
    },
  },
};
</script>

<style></style>
