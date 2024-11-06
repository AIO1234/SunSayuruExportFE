<template>
  <div class="pt-3 airfreight_bills">
    <span class="section_header d-flex justify-content-center"
      >Shipment Wise AirFreight Bills</span
    >

    <h2 class="pt-3 title">{{ $route.params.company_name }}</h2>
    <br /><br />
    <b-row>
      <b-col lg="3">
        <!-- space only for mobile -->
        <div class="mobile_only_view">
          <div class="mt-2"></div>
        </div>
        <v-date-picker v-model="startdate" is-required>
          <template v-slot="{ inputValue, inputEvents }">
            <b-input-group class="input-group-merge form_input_styles_group">
              <b-input-group-prepend is-text>
                <b-img src="@/assets/images/icons/Vector (1).png"></b-img>
              </b-input-group-prepend>
              <b-form-input
                class="bg-white border px-2 py-1 rounded form_input_styles_date_1"
                :value="inputValue"
                v-on="inputEvents"
                placeholder="Start Eta"
              ></b-form-input>
            </b-input-group>
          </template> </v-date-picker
      ></b-col>
      <b-col lg="3">
        <!-- space only for mobile -->
        <div class="mobile_only_view">
          <div class="mt-2"></div>
        </div>
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
                placeholder="End Eta"
              ></b-form-input>
            </b-input-group>
          </template>
        </v-date-picker>
      </b-col>
      <b-col lg="3">
        <b-button
          @click="getAirfreightShipments()"
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

    <b-card class="mt-5">
      <b-table
        sticky-header=""
        responsive="sm"
        :items="airfreightshipments"
        :fields="fields"
      >
        <template #cell(action)="data">
          <b-row no-gutters>
            <b-col lg="4">
              <b-button variant="flat-none">
                <b-img
                  width="17px"
                  src="@/assets/images/icons/Group 117855.png"
                ></b-img>
              </b-button>
            </b-col>
            <b-col lg="4"> </b-col>
          </b-row>
        </template>

        <template #cell(airfreight_cost)="data">
          {{ getPriceWithOutCurrency(data.value) }}
        </template>

        <template #cell(usd_airfreight_cost)="data">
          {{ getPriceWithOutCurrency(data.value) }}
        </template>

        <template #cell(airfreight_converting_rate)="data">
          {{ getPriceWithOutCurrency(data.value) }}
        </template>
      </b-table>
    </b-card>
  </div>
</template>
<script>
import {
  BTable,
  BRow,
  BCard,
  BImg,
  BCol,
  BButton,
  BFormInput,
  BInputGroup,
  BInputGroupPrepend,
} from "bootstrap-vue";
import reportApi from "@/Api/Modules/reports";
export default {
  components: {
    BTable,
    BRow,
    BFormInput,
    BCard,
    BImg,
    BCol,
    BButton,
    BInputGroup,
    BInputGroupPrepend,
  },
  data() {
    return {
      startdate: "",
      enddate: "",
      fields: [
        {
          key: "invoice_no",
          label: "Invoice No",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "td-style",
        },

        {
          key: "eta",
          label: "ETA",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "td-style",
        },

        {
          key: "airfreight_cost",
          label: "Amount(LKR)",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "td-style",
        },

        {
          key: "usd_airfreight_cost",
          label: "Amount(USD)",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "td-style",
        },

        {
          key: "airfreight_converting_rate",
          label: "Converting Rate(Rs)",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "td-style",
        },
      ],
      airfreightshipments: [],
    };
  },
  async created() {
    await this.getAirfreightShipments();
  },
  methods: {
    async getAirfreightShipments() {
      // if seach data not clear geting profits with range
      if (this.startdate !== "" || this.enddate !== "") {
        const payload = {
          airfreight_id: this.$route.params.id,
          start_date: this.startdate,
          end_date: this.enddate,
        };
        await this.$vs.loading({
          scale: 0.8,
        });
        const res = await reportApi.airfreightInnerShipments(payload);
        this.airfreightshipments = res.data.data;
        this.$vs.loading.close();
      }
      // if seach data clear geting pprofits  with not seach
      else if (this.startdate === "" || this.enddate === "") {
        const payload = {
          airfreight_id: this.$route.params.id,
        };
        await this.$vs.loading({
          scale: 0.8,
        });
        const res = await reportApi.airfreightInnerShipments(payload);
        this.airfreightshipments = res.data.data;
        this.$vs.loading.close();
      }
    },

    // clear searhces

    async clear() {
      // clear start  and date

      this.startdate = "";
      this.enddate = "";
      await this.getAirfreightShipments();
    },
  },
};
</script>
