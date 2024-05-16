<template>
  <div class="suplierearnings">
    <span class="section_header d-flex justify-content-center"
      >View supplier bills</span
    >
    <div class="pt-3">
      <div class="pt-3">
        <b-row>
          <div class="pt-5 mobile_only_view"></div>
          <b-col lg="2">
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
    </div>

    <h2 class="pt-3 shipment_number">
      {{ $route.params.suplier_name }}’s receiving
    </h2>

    <div class="pt-2"></div>
    <b-card>
      <b-table
        sticky-header=""
        responsive="sm"
        :items="shipmentdetails"
        :fields="fields"
        per-page="20"
        :current-page="currentPage"
      >
        <template #cell(total_cost)="data">
          {{ getPriceWithOutCurrency(data.value) }}
        </template>
      </b-table>

      <b-row>
        <b-col lg="4"></b-col>
        <b-col lg="8">
          <div class="mt-1">
            <b-pagination
              v-model="currentPage"
              :total-rows="shipmentdetails.length"
              per-page="20"
              first-text="First"
              prev-text="Prev"
              next-text="Next"
              last-text="Last"
            ></b-pagination>
          </div>
        </b-col>
      </b-row>
    </b-card>
    <br />
    <b-container>
      <div class="web_only_view">
        <b-row>
          <b-col lg="10" cols="6"
            ><span class="totaltext ml-1">Total</span></b-col
          >
          <b-col lg="2" cols="6"
            ><span class="totaltext ml-4">{{
              getPrice(totalearnings)
            }}</span></b-col
          >
        </b-row>
      </div>
      <div class="mobile_only_view">
        <br />
        <b-row>
          <b-col lg="8" cols="8"
            ><span class="totaltext ml-1">Total</span></b-col
          >
          <b-col lg="2" cols="2"
            ><span class="totaltext ml-1">{{
              getPrice(totalearnings)
            }}</span></b-col
          >
        </b-row>
      </div>
    </b-container>
  </div>
</template>
<script>
import {
  BModal,
  BCard,
  BTable,
  BBadge,
  BButton,
  BCol,
  BRow,
  BImg,
  BCardText,
  BAvatar,
  BLink,
  BInputGroup,
  BInputGroupPrepend,
  BContainer,
  BFormInput,
  BPagination,
} from "bootstrap-vue";
import reportApi from "@/Api/Modules/reports";
import CommonHeaderNew from "@/Components/CommonHeaderNew.vue";
export default {
  components: {
    BCard,
    BModal,
    BImg,
    BButton,
    BCol,
    BBadge,
    BAvatar,
    BTable,
    BRow,
    BContainer,
    CommonHeaderNew,
    BCardText,
    BLink,
    BFormInput,
    BInputGroup,
    BInputGroupPrepend,
    BPagination,
  },
  props: {
    selectedItem: Object,
  },
  async created() {
    await this.suplierViseSuplierInnerDetails();
  },
  data() {
    return {
      currentPage: 1,
      startdate: "",
      enddate: "",
      totalearnings: "",
      fields: [
        {
          key: "invoice_no",
          label: "Shipment No",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "custom-cell-padding",
        },

        {
          key: "eta",
          label: "ETA",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "custom-cell-padding",
        },

        {
          key: "total_cost",
          label: "Total Cost(Rs)",
          sortable: true,
          // tdClass: "custom-cell-padding",
        },
      ],
      shipmentdetails: [],
    };
  },
  methods: {
    async suplierViseSuplierInnerDetails(reset = false) {
      await this.$vs.loading({
        scale: 0.8,
      });
      let payload = {};
      if (reset === false) {
        payload = {
          suplier_id: this.$route.params.suplier_id,
          start_date: "",
          end_date: "",
        };
      } else if (reset === true) {
        payload = {
          suplier_id: this.$route.params.suplier_id,
          start_date: this.startdate,
          end_date: this.enddate,
        };
      }

      const res = await reportApi.suplierViseSuplierShipmentEarnings(payload);
      this.shipmentdetails = res.data.data.result_data;
      this.totalearnings = res.data.data.result_amount;
      this.$vs.loading.close();
    },

    async searchDate() {
      await this.suplierViseSuplierInnerDetails(true);
    },
    async clearSearch() {
      await this.suplierViseSuplierInnerDetails(false);
    },
  },
};
</script>
