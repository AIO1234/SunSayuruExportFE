<template>
  <div>
    <!-- upper search section -->
    <div>
      <b-row>
        <b-col lg="8">
          <div class="packing_main_button_set">
            <b-row>
              <b-col lg="3">
                <v-select
                  class="select_styles"
                  v-model="country"
                  :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                  label="title"
                  :options="countries"
                />
              </b-col>
              <div class="pt-5 mobile_only_view"></div>
              <b-col lg="3">
                <v-select
                  class="select_styles"
                  v-model="buyer"
                  :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                  label="title"
                  :options="buyers"
                />
              </b-col>
              <div class="pt-5 mobile_only_view"></div>
              <b-col lg="5">
                <v-select
                  class="select_styles"
                  v-model="type"
                
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

        <b-col lg="4"> </b-col>
      </b-row>
    </div>

    <!-- below search section -->
    <div class="pt-3">
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
        <div class="pt-5 mobile_only_view"></div>
        <b-col lg="5" cols="6">
          <div class="text-right">
            <b-button
              variant="none"
              class="button_color"
              @click="openCreateModal()"
            >
              <div class="d-flex justify-content-center">
                <b-row>
                  <b-col lg="2" cols="2">
                    <b-img
                      width="20px"
                      src="@/assets/images/icons/Icons Solid.png"
                    ></b-img>
                  </b-col>
                  <b-col lg="2" cols="2">
                    <span class="button_text_styles">Create Shipment</span>
                  </b-col>
                </b-row>
              </div>
            </b-button>
          </div>
        </b-col>
      </b-row>
      <div class="pt-3">
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
      </div>
    </div>

    <!--  shipment create form -->
    <b-modal
      ref="createmodal"
      hide-footer
      title="Create a packing"
      size="xl"
      title-class="modal_title_color"
    >
      <PackingCreateForm />
    </b-modal>

    <div class="pt-5">
      <b-card>
        <ShipmentTable />
      </b-card>
    </div>
  </div>
</template>

<script>
import ShipmentTable from "@/views/PackingManagement/Components/ShipmentsTable.vue";
import PackingCreateForm from "@/views/PackingManagement/Components/CreatePackingForm.vue";
import Ripple from "vue-ripple-directive";
import vSelect from "vue-select";
import {
  BFormInput,
  BRow,
  BModal,
  BCard,
  BCalendar,
  BFormDatepicker,
  BImg,
  BCol,
  BButton,
  BInputGroup,
  BInputGroupPrepend,
} from "bootstrap-vue";
export default {
  name: "Packings",
  data() {
    return {
      startdate: "16 January 2024",
      enddate: "16 January 2024",
      isCalendarVisible: false,
      countries: ["Thailand", "Philiphine"],
      buyers: ["A123", "A234"],
      types: ["Packing & Receivings", "Documentations"],
      country: "Thailand",
      buyer: "Buyer",
      type: "Packing & Receivings",
    };
  },
  name: "users",
  components: {
    ShipmentTable,
    BInputGroup,
    vSelect,
    PackingCreateForm,
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
  methods: {
    openCreateModal() {
      this.$refs.createmodal.show();
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
