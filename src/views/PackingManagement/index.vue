<template>
  <div>
    <!-- upper search section -->
    <div>
      <b-row>
        <b-col lg="9" style="padding-right:10px">
          <div class="packing_main_button_set" >
            <b-row>
              <!-- country selection -->
              <b-col lg="4" >
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
              <b-col lg="3" >
                <v-select
                  class="select_styles"
                  v-model="buyer"
                  @input="buyerChange()"
                  :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                  label="code"
                  :options="buyers"
                />
              </b-col>
              <div class="pt-5 mobile_only_view"></div>

              <!-- view type selection -->
              <b-col lg="3">
              
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
                <b-button class="search_button " variant="none"
                  ><span class="text-white search_text">Search</span></b-button
                >
              </b-col>
            </b-row>
          </div>
        </b-col>

        <b-col lg="3" cols="12" class="mt-1">
          <div class="text-right">
            <b-button
              variant="none"
              class="button_color"
              style="width: 200px"
              @click="$router.push(`/createshipment/${country.id}/${buyer.id}`)"
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
    </div>

    <!-- Packing & Receivings section -->
    <div>
      <!-- search feidls -->
      <div class="pt-3">
        <b-row>
          <b-col lg="3" cols="6" v-if="type === 'Packing & Receivings'">
            <b-input-group class="input-group-merge form_input_styles_group">
              <b-input-group-prepend is-text>
                <feather-icon class="search_icon_color" icon="SearchIcon" />
              </b-input-group-prepend>
              <b-form-input
                type="search"
                class="form_input_styles"
                v-model="searchParams.awb"
                placeholder="Type AWB...."
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
                    placeholder="Start Eta"
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
                    placeholder="End Eta"
                  ></b-form-input>
                </b-input-group>
              </template>
            </v-date-picker>
          </b-col>
          <div class="pt-5 mobile_only_view"></div>
          <b-col lg="3" cols="6">
            <b-button
              class="search_button"
              variant="none"
              block
              @click="searchDate(type)"
              ><span class="text-white search_text">Search</span></b-button
            >
          </b-col>

          <b-col lg="2" cols="6">
            <b-button
              class="search_button"
              variant="danger"
              block
              @click="clearSearch(type)"
              ><span class="text-white search_text">Clear</span></b-button
            >
          </b-col>
        </b-row>
      </div>

      <!-- shipments table  -->
      <div class="pt-5" v-if="type === 'Packing & Receivings'">
        <b-card>
          <ShipmentTable
            :shipments="packingshipments"
            @loaddata="loadDataFromTable"
          />
        </b-card>
      </div>
    </div>

    <!-- Documentations -->
    <div class="pt-4"></div>
    <div v-if="type === 'Documentations' && loaded === true">
      <!-- tab buttons -->
      <div>
        <b-tabs
          pills
          active-nav-item-class="bg-warning border-warning"
          value="1"
        >
          <b-tab
            :active="activepackinglist"
            title="Packing list"
            title-item-class="custom-tab-item"
            @click="changeTab1()"
          >
            <template #title>
              <span class="custom-bg-text">Packing list</span>
            </template>
            <br /><br />
            <PackingListTable :shipmentsarray="documentshipments"
          /></b-tab>

          <b-tab
            :active="activecustominvoice"
            title="Custom invoice"
            @click="changeTab2()"
            title-item-class="custom-tab-item margin_class_tab"
          >
            <template #title>
              <span class="custom-bg-text">Custom invoice</span>
            </template>
            <br /><br />
            <CustomInvoiceTable :shipmentsarray="documentshipments" />
          </b-tab>

          <b-tab
            :active="activebuyerinvoice"
            @click="changeTab3()"
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
import buyerApi from "@/Api/Modules/buyers";
import reportApi from "@/Api/Modules/reports";
import shipmentApi from "@/Api/Modules/shipments";
export default {
  name: "Packings",
  data() {
    return {
      activepackinglist: true,
      activecustominvoice: false,
      activebuyerinvoice: false,
      packingshipments: [],
      documentshipments: [],
      startdate: "",
      enddate: "",
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
      currenttab: "",
      searchParams: {},
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
    if (localStorage.getItem("currentSelectedtype") === "Documentations") {
      await this.getShipmentsForDocuments();
    }
    await this.getCountries();
    this.initializeParams();
    if (
      localStorage.getItem("currentSelectedtype") === "Packing & Receivings"
    ) {
      await this.getAllShipmentsForPackings();
    }
  },

  methods: {
    // initialize previously selected country and buyer when scren loaded
    async initializeParams() {
      if (
        localStorage.currentSelectedtype &&
        localStorage.currentSelectedCountryid &&
        localStorage.currentSelectedCountryname &&
        localStorage.currentSelectedBuyerid &&
        localStorage.currentSelectedBuyercode
      ) {
        this.type = localStorage.getItem("currentSelectedtype");
        this.country.id = localStorage.getItem("currentSelectedCountryid");
        this.country.name = localStorage.getItem("currentSelectedCountryname");

        const res = await this.getBuyers(this.country.id);
        this.buyers = res.data.data;

        this.buyer.id = localStorage.getItem("currentSelectedBuyerid");
        this.buyer.code = localStorage.getItem("currentSelectedBuyercode");

        // initialize tabs
        if (sessionStorage.getItem("documenttype") === "PackingList") {
          this.activepackinglist = true;
        } else if (sessionStorage.getItem("documenttype") === "CustomInvoice") {
          this.activecustominvoice = true;
        } else if (sessionStorage.getItem("documenttype") === "BuyerInvoice") {
          this.activebuyerinvoice = true;
        }
      }
    },
    openCreateModal() {
      this.$refs.createmodal.show();
    },

    // get all countries
    async getCountries() {
      await this.$vs.loading({
        scale: 0.8,
      });
      const res = await countryApi.allCountries();
      this.countries = res.data.data;
      this.$vs.loading.close();
    },

    async getBuyers(id) {
      const payload = {
        country_id: id,
      };
      await this.$vs.loading({
        scale: 0.8,
      });
      const res = await buyerApi.buyers(payload);
      this.$vs.loading.close();
      return res;
    },
    // trigger  when country change
    async countryChange() {
      this.buyers = [];

      const res = await this.getBuyers(this.country.id);
      this.buyers = res.data.data;
      localStorage.setItem("currentSelectedCountryid", this.country.id);
      localStorage.setItem("currentSelectedCountryname", this.country.name);
      this.buyer.id = this.buyers[0].id;
      this.buyer.code = this.buyers[0].code;
      this.buyerChange();
    },
    // triger when buyer change
    async buyerChange() {
      localStorage.setItem("currentSelectedBuyerid", this.buyer.id);
      localStorage.setItem("currentSelectedBuyercode", this.buyer.code);
      localStorage.removeItem("currentShipmentId");
      // load documents acording to country and buyer
      if (localStorage.getItem("currentSelectedtype") === "Documentations") {
        await this.getShipmentsForDocuments();
      } else if (
        localStorage.getItem("currentSelectedtype") === "Packing & Receivings"
      ) {
        await this.getAllShipmentsForPackings();
      }
    },
    // triger when type change
    async typesChange() {
      localStorage.setItem("currentSelectedtype", this.type);
      if (localStorage.getItem("currentSelectedtype") === "Documentations") {
        await this.getShipmentsForDocuments();
      } else if (
        localStorage.getItem("currentSelectedtype") === "Packing & Receivings"
      ) {
        await this.getAllShipmentsForPackings();
      }
    },

    // get all shipments acording to selected buyer and country

    async getShipmentsForDocuments(reset = false) {
      if (
        localStorage.currentSelectedBuyerid &&
        localStorage.currentSelectedCountryid
      ) {
        let payload = {};
        if (reset === false) {
          payload = {
            buyer_id: localStorage.currentSelectedBuyerid,
            country_id: localStorage.currentSelectedCountryid,
            start_date: "",
            end_date: "",
          };
        } else if (reset === true) {
          payload = {
            buyer_id: localStorage.currentSelectedBuyerid,
            country_id: localStorage.currentSelectedCountryid,
            start_date: this.startdate,
            end_date: this.enddate,
          };
        }
        await this.$vs.loading({
          scale: 0.8,
        });
        const res = await reportApi.buyerShipements(payload);
        this.documentshipments = res.data.data;
        this.$vs.loading.close();
        this.loaded = true;
      }
    },

    // changes document content
    changeTab1() {
      sessionStorage.setItem("documenttype", "PackingList");
    },
    changeTab2() {
      sessionStorage.setItem("documenttype", "CustomInvoice");
    },
    changeTab3() {
      sessionStorage.setItem("documenttype", "BuyerInvoice");
    },
    // get all shipments for packing & receiving

    async getAllShipmentsForPackings(reset = false) {
      if (
        localStorage.currentSelectedBuyerid &&
        localStorage.currentSelectedCountryid
      ) {
        let payload = {};
        if (reset === false) {
          payload = {
            buyer_id: localStorage.currentSelectedBuyerid,
            country_id: localStorage.currentSelectedCountryid,
            awb: "",
            start_date: "",
            end_date: "",
          };
        } else if (reset === true) {
          payload = {
            buyer_id: localStorage.currentSelectedBuyerid,
            country_id: localStorage.currentSelectedCountryid,
            awb: this.searchParams.awb,
            start_date: this.startdate,
            end_date: this.enddate,
          };
        }
        await this.$vs.loading({
          scale: 0.8,
        });
        const res = await shipmentApi.allShipments(payload);
        this.packingshipments = res.data.data;
        this.$vs.loading.close();
      }
    },

    // search date
    async searchDate(type) {
      if (type === "Packing & Receivings") {
        await this.getAllShipmentsForPackings(true);
      } else if (type === "Documentations") {
        await this.getShipmentsForDocuments(true);
      }
    },

    // clear search
    async clearSearch(type) {
      if (type === "Packing & Receivings") {
        await this.getAllShipmentsForPackings(false);
        this.searchParams.awb = "";
      } else if (type === "Documentations") {
        await this.getShipmentsForDocuments(false);
      }
    },

    // load data from delete shipment

    async loadDataFromTable() {
      await this.getAllShipmentsForPackings();
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
