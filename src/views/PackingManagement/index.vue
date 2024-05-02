<template>
  <div>
    <!-- upper search section -->
    <div>
      <b-row>
        <b-col lg="9">
          <div class="packing_main_button_set">
            <b-row>
              <!-- country selection -->
              <b-col lg="4">
                <v-select
                  class="select_styles"
                  v-model="country"
                  @input="countryChange()"
                  :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                  label="name"
                  :options="countries"
                />
              </b-col>
              <div class="pt-5 mobile_only_view"></div>

              <!-- buyer selection -->
              <b-col lg="3">
                <v-select
                  class="select_styles"
                  v-model="buyer"
                  @input="buyerChange()"
                  :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                  label="name"
                  :options="buyers"
                />
              </b-col>
              <div class="pt-5 mobile_only_view"></div>

              <!-- view type selection -->
              <b-col lg="4">
                <v-select
                  class="select_styles"
                  v-model="type"
                  @input="typesChange()"
                  :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                  label="title"
                  :options="types"
                />
              </b-col>
              <div class="pt-5 mobile_only_view"></div>
              <b-col lg="1" class="search_padding">
                <b-button class="search_button" variant="none"
                  ><span class="text-white search_text">Search</span></b-button
                >
              </b-col>
            </b-row>
          </div>
        </b-col>

        <b-col lg="3"> </b-col>
      </b-row>
    </div>

    <!-- Packing & Receivings section -->
    <div>
      <!-- search feidls -->
      <div class="pt-3" v-if="type === 'Packing & Receivings'">
        <b-row>
          <b-col lg="3" cols="6">
            <b-input-group class="input-group-merge form_input_styles_group">
              <b-input-group-prepend is-text>
                <feather-icon class="search_icon_color" icon="SearchIcon" />
              </b-input-group-prepend>
              <b-form-input
                type="search"
                class="form_input_styles"
                placeholder="Type here...."
              ></b-form-input>
            </b-input-group>
          </b-col>
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
          <div class="pt-5 mobile_only_view"></div>
          <b-col lg="5" cols="6">
            <div class="text-right">
              <b-button
                variant="none"
                class="button_color"
                style="width: 200px"
                @click="
                  $router.push(`/createshipment/${country.id}/${buyer.id}`)
                "
              >
                <div class="d-flex justify-content-start">
                  <b-img
                    style="padding-top: 6px"
                    width="22px"
                    height="30px"
                    src="@/assets/images/icons/Icons Solid.png"
                  ></b-img>

                  <span class="button_text_styles pl-1">Create Shipment</span>
                </div>
              </b-button>
            </div>
          </b-col>
        </b-row>
        <!-- <div class="pt-3">
          <b-row>
            <b-col lg="4" cols="12"> </b-col>
            <b-col lg="8" cols="12">
              <div class="text-right">
                <b-button
                  variant="outline-primary"
                  class="export_button"
                  v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                >
                  <div class="d-flex justify-content-center">
                    <b-row>
                      <b-col lg="2" cols="2">
                        <b-img
                          width="10px"
                          src="@/assets/images/icons/Vector.png"
                        ></b-img>
                      </b-col>
                      <b-col lg="2" cols="2">
                        <span class="export_button_text">Export</span>
                      </b-col>
                    </b-row>
                  </div>
                </b-button>
              </div>
            </b-col>
          </b-row>
        </div> -->
      </div>

      <!-- shipments table  -->
      <div class="pt-5" v-if="type === 'Packing & Receivings'">
        <b-card>
          <ShipmentTable />
        </b-card>
      </div>
    </div>

    <!-- Documentations -->
    <div class="pt-4"></div>
    <div v-if="type === 'Documentations' && loaded === true">
      <!-- tab buttons -->
      <div>
        <b-tabs pills active-nav-item-class="bg-warning border-warning">
          <b-tab title="Packing list" title-item-class="custom-tab-item ">
            <template #title>
              <span class="custom-bg-text">Packing list</span>
            </template>
            <br /><br />
            <PackingListTable :shipmentsarray="documentshipments"
          /></b-tab>

          <b-tab
            title="Custom invoice"
            title-item-class="custom-tab-item margin_class_tab"
          >
            <template #title>
              <span class="custom-bg-text">Custom invoice</span>
            </template>
            <br /><br />
            <CustomInvoiceTable :shipmentsarray="documentshipments" />
          </b-tab>

          <b-tab
            title="Buyer invoice"
            title-item-class="custom-tab-item margin_class_tab"
          >
            <template #title>
              <span class="custom-bg-text">Buyer invoice</span>
            </template>
            <br /><br />
            <BuyerInvoiceTable :shipmentsarray="documentshipments" />
          </b-tab>
        </b-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import ShipmentTable from "@/views/PackingManagement/PackingandReceiving/Components/ShipmentsTable.vue";
import PackingListTable from "@/views/PackingManagement/Documentaion/PackingList.vue";
import CustomInvoiceTable from "@/views/PackingManagement/Documentaion/CustomInvoice.vue";
import BuyerInvoiceTable from "@/views/PackingManagement/Documentaion/BuyerInvoice.vue";
import Ripple from "vue-ripple-directive";
import vSelect from "vue-select";
import {
  BFormInput,
  BRow,
  BModal,
  BTab,
  BTabs,
  BCard,
  BCalendar,
  BFormDatepicker,
  BImg,
  BCol,
  BButton,
  BInputGroup,
  BInputGroupPrepend,
} from "bootstrap-vue";
import countryApi from "@/Api/Modules/countries";
import reportApi from "@/Api/Modules/reports";
export default {
  name: "Packings",
  data() {
    return {
      documentshipments: [],
      startdate: "16 January 2024",
      enddate: "16 January 2024",
      isCalendarVisible: false,
      countries: [],
      buyers: [],
      types: ["Packing & Receivings", "Documentations"],
      country: {
        name: "Select Country",
        id: "",
      },
      buyer: {
        name: "Select Buyer",
        id: "",
      },
      type: "Select Type",
      loaded: false,
    };
  },
  name: "users",
  components: {
    CustomInvoiceTable,
    ShipmentTable,
    BInputGroup,
    BuyerInvoiceTable,
    PackingListTable,
    BTab,
    BTabs,
    vSelect,
    BCalendar,
    BModal,
    BFormDatepicker,
    BImg,
    BCard,
    BButton,
    BInputGroupPrepend,
    BFormInput,
    BRow,
    BCol,
  },
  directives: {
    Ripple,
  },
  async created() {
    await this.getShipmentsForDocuments();
    await this.getCountries();
    this.initializeParams();
  },

  methods: {
    // initialize previously selected country and buyer when scren loaded
    initializeParams() {
      if (
        localStorage.currentSelectedtype &&
        localStorage.currentSelectedCountryid &&
        localStorage.currentSelectedCountryname &&
        localStorage.currentSelectedBuyerid &&
        localStorage.currentSelectedBuyername
      ) {
        this.type = localStorage.getItem("currentSelectedtype");
        this.country.id = localStorage.getItem("currentSelectedCountryid");
        this.country.name = localStorage.getItem("currentSelectedCountryname");

        const result = this.countries.find(
          (option) => option.id === parseInt(this.country.id)
        );

        this.buyers = result.buyers;

        this.buyer.id = localStorage.getItem("currentSelectedBuyerid");
        this.buyer.name = localStorage.getItem("currentSelectedBuyername");
      }
    },
    openCreateModal() {
      this.$refs.createmodal.show();
    },
    // get all countries
    async getCountries() {
      const res = await countryApi.allCountries();
      this.countries = res.data.data;
    },
    // trigger  when country change
    countryChange() {
      this.buyers = this.country.buyers;
      localStorage.setItem("currentSelectedCountryid", this.country.id);
      localStorage.setItem("currentSelectedCountryname", this.country.name);
      this.buyer.id = this.buyers[0].id;
      this.buyer.name = this.buyers[0].name;
      this.buyerChange();
    },
    // triger when buyer change
    buyerChange() {
      localStorage.setItem("currentSelectedBuyerid", this.buyer.id);
      localStorage.setItem("currentSelectedBuyername", this.buyer.name);
    },
    // triger when type change
    async typesChange() {
      localStorage.setItem("currentSelectedtype", this.type);
    },

    // get all shipments acording to selected buyer and country

    async getShipmentsForDocuments() {
      if (
        localStorage.currentSelectedBuyerid &&
        localStorage.currentSelectedCountryid
      ) {
        const payload = {
          buyer_id: localStorage.currentSelectedBuyerid,
          country_id: localStorage.currentSelectedCountryid,
        };
        await this.$vs.loading({
          scale: 0.8,
        });
        const res = await reportApi.buyerShipements(payload);
        this.documentshipments = res.data.data;
        this.$vs.loading.close();
        this.loaded = true;
      }
    },
  },
};
</script>

<style lang="scss">
.calendar-container {
  position: relative;
}

.absolute-calendar {
  position: absolute;
  top: 100%;
  left: 0;
}

@import "@core/scss/vue/libs/vue-select.scss";
</style>
